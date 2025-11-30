chrome.runtime.onInstalled.addListener(() => {
  // 创建简单的右键菜单，直接添加到书签
  chrome.contextMenus.create({
    id: 'addToBookmark',
    title: '添加到导航书签',
    contexts: ['page', 'link']
  });
});

// 存储待保存的密码信息（tabId -> pendingData）
const pendingPasswordPrompts = new Map();

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'addToBookmark') {
    let url, title;
    
    if (info.linkUrl) {
      url = info.linkUrl;
      title = info.selectionText || extractDomainName(info.linkUrl);
    } else {
      url = info.pageUrl || tab.url;
      title = tab.title || extractDomainName(url);
    }

    // 默认添加到普通页面
    saveBookmarkAndOpenTab(url, title, false, tab.id);
  }
});

function extractDomainName(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

async function saveBookmarkAndOpenTab(url, title, isPrivate, sourceTabId) {
  const pendingBookmark = {
    url,
    title,
    isPrivate,
    sourceTabId,
    timestamp: Date.now()
  };
  
  await chrome.storage.local.set({ pendingBookmark });
  chrome.tabs.create({ url: 'index.html?action=addBookmark' });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getPendingBookmark') {
    chrome.storage.local.get(['pendingBookmark'], (result) => {
      sendResponse(result.pendingBookmark || null);
      chrome.storage.local.remove(['pendingBookmark']);
    });
    return true;
  }
  
  if (message.type === 'activateTab') {
    const tabId = message.tabId;
    if (tabId) {
      chrome.tabs.get(tabId, (tab) => {
        if (!chrome.runtime.lastError && tab) {
          chrome.tabs.update(tabId, { active: true });
        }
      });
    }
    sendResponse({ success: true });
    return false;
  }
  
  if (message.type === 'getPasswordsForUrl') {
    const url = message.url;
    chrome.storage.local.get(['passwords'], (result) => {
      const passwords = result.passwords || [];
      const hostname = getHostname(url);
      
      const matched = passwords.filter(p => {
        const entryHostname = getHostname(p.url);
        return hostname.includes(entryHostname) || entryHostname.includes(hostname);
      }).map(p => ({
        id: p.id,
        name: p.name,
        url: p.url,
        username: p.username,
        password: p.password
      }));
      
      sendResponse(matched);
    });
    return true;
  }
  
  if (message.type === 'pendingPassword') {
    const data = message.data;
    const tabId = sender.tab?.id;
    
    chrome.storage.local.get(['passwords'], (result) => {
      const passwords = result.passwords || [];
      const hostname = data.url;
      
      const existing = passwords.find(p => {
        const entryHostname = getHostname(p.url);
        return (hostname.includes(entryHostname) || entryHostname.includes(hostname)) &&
               p.username === data.username;
      });
      
      let promptData;
      if (existing) {
        if (existing.password !== data.password) {
          promptData = {
            type: 'update',
            data: {
              id: existing.id,
              username: data.username,
              password: data.password,
              url: data.url,
              title: data.title
            }
          };
        }
      } else {
        promptData = {
          type: 'new',
          data: {
            username: data.username,
            password: data.password,
            url: data.url,
            title: data.title
          }
        };
      }
      
      if (promptData && tabId) {
        // 存储待显示的密码提示，等页面加载完成后显示
        pendingPasswordPrompts.set(tabId, {
          ...promptData,
          timestamp: Date.now()
        });
        
        // 同时尝试立即显示（如果页面没有跳转）
        setTimeout(() => {
          showPasswordNotificationForTab(tabId);
        }, 500);
      }
    });
    
    sendResponse({ received: true });
    return false;
  }
  
  if (message.type === 'savePassword') {
    const data = message.data;
    chrome.storage.local.get(['passwords'], (result) => {
      const passwords = result.passwords || [];
      const newPassword = {
        id: Date.now(),
        name: data.name,
        url: data.url,
        username: data.username,
        password: data.password,
        notes: data.notes || '',
        createdAt: Date.now()
      };
      passwords.push(newPassword);
      chrome.storage.local.set({ passwords }, () => {
        sendResponse({ success: true, id: newPassword.id });
      });
    });
    return true;
  }
  
  if (message.type === 'updatePassword') {
    const { id, password } = message;
    chrome.storage.local.get(['passwords'], (result) => {
      const passwords = result.passwords || [];
      const index = passwords.findIndex(p => p.id === id);
      if (index !== -1) {
        passwords[index].password = password;
        passwords[index].updatedAt = Date.now();
        chrome.storage.local.set({ passwords }, () => {
          sendResponse({ success: true });
        });
      } else {
        sendResponse({ success: false, error: 'Password not found' });
      }
    });
    return true;
  }
  
  // 清除指定标签页的待显示密码提示
  if (message.type === 'clearPendingPasswordPrompt') {
    const tabId = sender.tab?.id;
    if (tabId) {
      pendingPasswordPrompts.delete(tabId);
    }
    sendResponse({ success: true });
    return false;
  }
});

// 监听标签页更新，当页面加载完成后显示密码保存提示
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && pendingPasswordPrompts.has(tabId)) {
    // 页面加载完成，延迟一点显示提示，确保页面已经稳定
    setTimeout(() => {
      showPasswordNotificationForTab(tabId);
    }, 800);
  }
});

// 监听标签页关闭，清理待显示的提示
chrome.tabs.onRemoved.addListener((tabId) => {
  pendingPasswordPrompts.delete(tabId);
});

// 为指定标签页显示密码保存提示
async function showPasswordNotificationForTab(tabId) {
  const pending = pendingPasswordPrompts.get(tabId);
  if (!pending) return;
  
  // 检查是否已过期（超过30秒）
  if (Date.now() - pending.timestamp > 30000) {
    pendingPasswordPrompts.delete(tabId);
    return;
  }
  
  try {
    const tab = await chrome.tabs.get(tabId);
    if (!tab || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('about:')) {
      pendingPasswordPrompts.delete(tabId);
      return;
    }
    
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: showSavePasswordPopup,
      args: [pending.type, pending.data]
    });
    
    // 显示成功后清除
    pendingPasswordPrompts.delete(tabId);
  } catch (e) {
    // 如果注入失败，保留待显示数据，等下次页面加载完成再试
  }
}

function getHostname(url) {
  try {
    if (url.includes('://')) {
      return new URL(url).hostname;
    }
    return url.split('/')[0].split(':')[0];
  } catch {
    return url;
  }
}

function showSavePasswordPopup(type, data) {
  const existing = document.getElementById('itab-save-password-popup');
  if (existing) existing.remove();
  
  const isUpdate = type === 'update';
  const title = isUpdate ? '\u66F4\u65B0\u5BC6\u7801' : '\u4FDD\u5B58\u5BC6\u7801';
  
  const popup = document.createElement('div');
  popup.id = 'itab-save-password-popup';
  popup.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95));
      backdrop-filter: blur(20px);
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      width: 200px;
      color: white;
      border: 1px solid rgba(255,255,255,0.2);
      text-align: center;
    ">
      <div style="
        width: 48px;
        height: 48px;
        background: rgba(255,255,255,0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 12px;
      ">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      </div>
      <div style="font-size: 15px; font-weight: 600; margin-bottom: 6px;">${title}</div>
      <div style="font-size: 12px; color: rgba(255,255,255,0.8); margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.username}</div>
      <div style="font-size: 11px; color: rgba(255,255,255,0.6); margin-bottom: 16px;">${data.url}</div>
      <div style="display: flex; gap: 8px;">
        <button id="itab-pwd-cancel" style="
          flex: 1;
          padding: 10px 0;
          border: 1px solid rgba(255,255,255,0.3);
          background: transparent;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
        ">\u53D6\u6D88</button>
        <button id="itab-pwd-save" style="
          flex: 1;
          padding: 10px 0;
          border: none;
          background: white;
          color: #667eea;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
        ">${isUpdate ? '\u66F4\u65B0' : '\u4FDD\u5B58'}</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(popup);
  
  document.getElementById('itab-pwd-cancel').addEventListener('click', () => {
    popup.remove();
  });
  
  document.getElementById('itab-pwd-save').addEventListener('click', async () => {
    try {
      if (isUpdate) {
        await chrome.runtime.sendMessage({
          type: 'updatePassword',
          id: data.id,
          password: data.password
        });
      } else {
        await chrome.runtime.sendMessage({
          type: 'savePassword',
          data: {
            name: data.title || data.url,
            url: data.url,
            username: data.username,
            password: data.password,
            notes: ''
          }
        });
      }
      popup.remove();
    } catch (e) {
      popup.remove();
    }
  });
  
  setTimeout(() => {
    if (document.getElementById('itab-save-password-popup')) {
      popup.remove();
    }
  }, 30000);
}
