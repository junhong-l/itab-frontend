/**
 * 后台服务脚本
 * 处理右键菜单和消息通信
 */

// 扩展安装或更新时创建右键菜单
chrome.runtime.onInstalled.addListener(() => {
  // 创建右键菜单
  chrome.contextMenus.create({
    id: 'addToBookmark',
    title: '添加到导航页书签',
    contexts: ['page', 'link']  // 在页面和链接上显示
  });

  // 创建子菜单 - 添加到普通页面
  chrome.contextMenus.create({
    id: 'addToNormal',
    parentId: 'addToBookmark',
    title: '添加到普通页面',
    contexts: ['page', 'link']
  });

  // 创建子菜单 - 添加到隐私页面
  chrome.contextMenus.create({
    id: 'addToPrivate',
    parentId: 'addToBookmark',
    title: '添加到隐私页面',
    contexts: ['page', 'link']
  });
});

// 处理右键菜单点击事件
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'addToNormal' || info.menuItemId === 'addToPrivate') {
    const isPrivate = info.menuItemId === 'addToPrivate';
    
    // 获取要添加的URL和标题
    let url, title;
    
    if (info.linkUrl) {
      // 点击的是链接
      url = info.linkUrl;
      title = info.selectionText || extractDomainName(info.linkUrl);
    } else {
      // 点击的是页面空白处
      url = info.pageUrl || tab.url;
      title = tab.title || extractDomainName(url);
    }

    // 保存书签数据到存储，然后打开新标签页让用户选择文件夹
    saveBookmarkAndOpenTab(url, title, isPrivate);
  }
});

// 从URL中提取域名作为默认标题
function extractDomainName(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

// 保存待添加的书签信息并打开导航页
async function saveBookmarkAndOpenTab(url, title, isPrivate) {
  // 将待添加的书签信息存储起来
  const pendingBookmark = {
    url,
    title,
    isPrivate,
    timestamp: Date.now()
  };
  
  await chrome.storage.local.set({ pendingBookmark });
  
  // 打开新标签页（导航页）
  chrome.tabs.create({ url: 'index.html?action=addBookmark' });
}

// 监听来自页面的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getPendingBookmark') {
    // 获取待添加的书签信息
    chrome.storage.local.get(['pendingBookmark'], (result) => {
      sendResponse(result.pendingBookmark || null);
      // 清除待添加的书签信息
      chrome.storage.local.remove(['pendingBookmark']);
    });
    return true; // 表示会异步发送响应
  }
});
