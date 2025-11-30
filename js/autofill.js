(function() {
  if (window.__itabAutofillInjected) return;
  window.__itabAutofillInjected = true;

  let matchedCredentials = [];
  let autofillPopup = null;

  async function init() {
    try {
      const response = await chrome.runtime.sendMessage({
        type: 'getPasswordsForUrl',
        url: window.location.href
      });
      
      if (response && response.length > 0) {
        matchedCredentials = response;
        setupAutofill();
      }
    } catch (e) {}
  }

  function setupAutofill() {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    
    passwordFields.forEach(passwordField => {
      const form = passwordField.closest('form');
      const usernameField = findUsernameField(passwordField, form);
      
      if (usernameField) {
        addAutofillIcon(usernameField, passwordField);
      }
      
      addAutofillIcon(passwordField, passwordField, true);
    });
  }

  function findUsernameField(passwordField, form) {
    const container = form || passwordField.parentElement?.parentElement?.parentElement || document;
    
    const selectors = [
      'input[type="email"]',
      'input[type="text"][name*="user" i]',
      'input[type="text"][name*="email" i]',
      'input[type="text"][name*="login" i]',
      'input[type="text"][name*="account" i]',
      'input[type="text"][name*="name" i]',
      'input[type="text"][id*="user" i]',
      'input[type="text"][id*="email" i]',
      'input[type="text"][id*="login" i]',
      'input[type="text"][id*="account" i]',
      'input[type="text"][id*="name" i]',
      'input[autocomplete="username"]',
      'input[autocomplete="email"]',
      'input:not([type])[name*="user" i]',
      'input:not([type])[name*="name" i]',
      'input[type="text"]',
      'input:not([type])'
    ];
    
    for (const selector of selectors) {
      try {
        const fields = container.querySelectorAll(selector);
        for (const field of fields) {
          if (field !== passwordField && 
              field.type !== 'password' &&
              field.type !== 'hidden' &&
              isVisible(field) &&
              isBeforeElement(field, passwordField)) {
            return field;
          }
        }
      } catch (e) {}
    }
    
    return null;
  }

  function isVisible(element) {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           style.opacity !== '0' &&
           element.offsetWidth > 0 &&
           element.offsetHeight > 0;
  }

  function isBeforeElement(a, b) {
    const position = a.compareDocumentPosition(b);
    return (position & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
  }

  function addAutofillIcon(inputField, passwordField, isPasswordField = false) {
    if (inputField.dataset.itabAutofill) return;
    inputField.dataset.itabAutofill = 'true';

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'itab-autofill-icon-wrapper';
    iconWrapper.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" class="itab-autofill-icon">
        <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
    `;

    addStyles();
    
    iconWrapper.style.cssText = `
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
      border-radius: 4px;
      transition: background 0.2s, opacity 0.2s;
      opacity: 0.4;
    `;

    const parent = inputField.parentElement;
    if (parent && window.getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }

    if (parent) {
      parent.appendChild(iconWrapper);
    }

    iconWrapper.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showCredentialPopup(inputField, passwordField, iconWrapper);
    });
  }

  function showCredentialPopup(usernameField, passwordField, iconWrapper) {
    removeAutofillPopup();

    autofillPopup = document.createElement('div');
    autofillPopup.className = 'itab-autofill-popup';
    
    let html = '<div class="itab-autofill-popup-header">Select Account</div>';
    
    matchedCredentials.forEach((cred, index) => {
      html += `
        <div class="itab-autofill-popup-item" data-index="${index}">
          <div class="itab-autofill-popup-item-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div class="itab-autofill-popup-item-info">
            <div class="itab-autofill-popup-item-username">${escapeHtml(cred.username)}</div>
            <div class="itab-autofill-popup-item-site">${escapeHtml(cred.name || cred.url)}</div>
          </div>
        </div>
      `;
    });
    
    autofillPopup.innerHTML = html;

    const iconRect = iconWrapper.getBoundingClientRect();
    autofillPopup.style.cssText = `
      position: fixed;
      top: ${iconRect.bottom + 5}px;
      left: ${iconRect.left + iconRect.width / 2}px;
      transform: translateX(-50%);
      z-index: 2147483647;
    `;

    document.body.appendChild(autofillPopup);

    autofillPopup.querySelectorAll('.itab-autofill-popup-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        fillCredential(usernameField, passwordField, matchedCredentials[index]);
        removeAutofillPopup();
      });
    });

    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 0);
  }

  function handleOutsideClick(e) {
    if (autofillPopup && !autofillPopup.contains(e.target)) {
      removeAutofillPopup();
    }
  }

  function removeAutofillPopup() {
    if (autofillPopup) {
      autofillPopup.remove();
      autofillPopup = null;
    }
    document.removeEventListener('click', handleOutsideClick);
  }

  function fillCredential(usernameField, passwordField, credential) {
    if (usernameField && usernameField !== passwordField) {
      setInputValue(usernameField, credential.username);
    }
    if (passwordField) {
      setInputValue(passwordField, credential.password);
    }
  }

  function setInputValue(input, value) {
    input.focus();
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
    
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype, 'value'
    )?.set;
    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function addStyles() {
    if (document.getElementById('itab-autofill-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'itab-autofill-styles';
    style.textContent = `
      .itab-autofill-icon-wrapper {
        opacity: 0.6;
      }
      .itab-autofill-icon-wrapper:hover {
        opacity: 1;
        background: rgba(0,0,0,0.1);
      }
      .itab-autofill-icon {
        color: #666;
      }
      .itab-autofill-popup {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        min-width: 250px;
        max-width: 350px;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .itab-autofill-popup-header {
        padding: 12px 16px;
        font-size: 13px;
        color: #666;
        border-bottom: 1px solid #eee;
      }
      .itab-autofill-popup-item {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .itab-autofill-popup-item:hover {
        background: #f5f5f5;
      }
      .itab-autofill-popup-item-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #e8f0fe;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        flex-shrink: 0;
      }
      .itab-autofill-popup-item-icon svg {
        color: #4285f4;
      }
      .itab-autofill-popup-item-info {
        flex: 1;
        min-width: 0;
      }
      .itab-autofill-popup-item-username {
        font-size: 14px;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .itab-autofill-popup-item-site {
        font-size: 12px;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
    document.head.appendChild(style);
  }

  let pendingCredentials = null;
  let savePromptShown = false;

  function setupSavePasswordListener() {
    document.addEventListener('submit', handleFormSubmit, true);
    
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, input[type="submit"], [role="button"]');
      if (target && isLoginButton(target)) {
        captureCredentials();
      }
    }, true);

    document.addEventListener('mousedown', (e) => {
      const target = e.target.closest('button, input[type="submit"], [role="button"]');
      if (target && isLoginButton(target)) {
        captureCredentials();
      }
    }, true);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.type === 'password' || activeElement.type === 'text' || activeElement.type === 'email')) {
          captureCredentials();
        }
      }
    }, true);

    window.addEventListener('beforeunload', () => {
      if (pendingCredentials && !savePromptShown) {
        sendCredentialsToBackground();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && pendingCredentials && !savePromptShown) {
        sendCredentialsToBackground();
      }
    });
  }

  function sendCredentialsToBackground() {
    if (pendingCredentials) {
      try {
        chrome.runtime.sendMessage({
          type: 'pendingPassword',
          data: {
            username: pendingCredentials.username,
            password: pendingCredentials.password,
            url: window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
            title: getPageTitle()
          }
        }).catch(() => {
          try {
            localStorage.setItem('itab_pending_password', JSON.stringify({
              username: pendingCredentials.username,
              password: pendingCredentials.password,
              url: window.location.hostname,
              title: getPageTitle(),
              timestamp: Date.now()
            }));
          } catch (storageError) {}
        });
      } catch (e) {}
      savePromptShown = true;
    }
  }

  function captureCredentials() {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    
    for (const passwordField of passwordFields) {
      if (passwordField.value) {
        const form = passwordField.closest('form');
        const usernameField = findUsernameField(passwordField, form);
        
        if (usernameField && usernameField.value) {
          const username = usernameField.value.trim();
          const password = passwordField.value;
          
          if (username && password) {
            pendingCredentials = { username, password };
            return;
          }
        }
      }
    }
  }

  function handleFormSubmit(e) {
    const form = e.target;
    if (form.tagName !== 'FORM') return;
    
    captureCredentials();
    
    setTimeout(() => {
      if (pendingCredentials && !savePromptShown) {
        sendCredentialsToBackground();
      }
    }, 100);
  }

  function isLoginButton(element) {
    const text = (element.textContent || element.value || '').toLowerCase();
    const keywords = ['login', 'sign in', 'signin', 'submit', 'log in'];
    return keywords.some(keyword => text.includes(keyword));
  }

  function getPageTitle() {
    return document.title || window.location.hostname;
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'itab-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 2147483647;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  async function savePassword(username, password) {
    try {
      await chrome.runtime.sendMessage({
        type: 'savePassword',
        data: {
          name: getPageTitle(),
          url: window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
          username: username,
          password: password,
          notes: ''
        }
      });
      showToast('Password saved');
    } catch (e) {}
    savePromptShown = false;
  }
  
  async function updatePassword(id, password) {
    try {
      await chrome.runtime.sendMessage({
        type: 'updatePassword',
        id: id,
        password: password
      });
      showToast('Password updated');
    } catch (e) {}
    savePromptShown = false;
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'showSavePasswordPrompt') {
    }
    return true;
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      setupSavePasswordListener();
    });
  } else {
    init();
    setupSavePasswordListener();
  }

  const observer = new MutationObserver((mutations) => {
    let hasNewInputs = false;
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches && (node.matches('input[type="password"]') || node.querySelector('input[type="password"]'))) {
            hasNewInputs = true;
          }
        }
      });
    });
    
    if (hasNewInputs && matchedCredentials.length > 0) {
      setupAutofill();
    }
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });

})();
