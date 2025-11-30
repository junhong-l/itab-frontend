/**
 * 导航页主应用
 */

(function() {
  // DOM 元素
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // 元素引用
  const elements = {
    background: $('#background'),
    time: $('#time'),
    date: $('#date'),
    lunar: $('#lunar'),
    searchInput: $('#searchInput'),
    searchBtn: $('#searchBtn'),
    searchBox: $('#searchBox'),
    bookmarkSearchResults: $('#bookmarkSearchResults'),
    engineSelector: $('#engineSelector'),
    engineDropdown: $('#engineDropdown'),
    currentEngineName: $('#currentEngineName'),
    currentEngineIcon: $('#currentEngineIcon'),
    bookmarkSearchResults: $('#bookmarkSearchResults'),
    shortcutsSection: $('#shortcutsSection'),
    addShortcutBtn: $('#addShortcutBtn'),
    addFolderBtn: $('#addFolderBtn'),
    settingsBtn: $('#settingsBtn'),
    settingsPanel: $('#settingsPanel'),
    closeSettingsBtn: $('#closeSettingsBtn'),
    // 快捷方式弹窗
    shortcutModal: $('#shortcutModal'),
    closeModalBtn: $('#closeModalBtn'),
    cancelShortcutBtn: $('#cancelShortcutBtn'),
    saveShortcutBtn: $('#saveShortcutBtn'),
    shortcutName: $('#shortcutName'),
    shortcutUrl: $('#shortcutUrl'),
    shortcutFolder: $('#shortcutFolder'),
    modalTitle: $('#modalTitle'),
    // 文件夹弹窗
    folderModal: $('#folderModal'),
    closeFolderModalBtn: $('#closeFolderModalBtn'),
    cancelFolderBtn: $('#cancelFolderBtn'),
    saveFolderBtn: $('#saveFolderBtn'),
    folderName: $('#folderName'),
    folderModalTitle: $('#folderModalTitle'),
    // 隐私模式触发
    weekday: $('#weekday'),
    // 搜索引擎弹窗
    engineModal: $('#engineModal'),
    closeEngineModalBtn: $('#closeEngineModalBtn'),
    cancelEngineBtn: $('#cancelEngineBtn'),
    saveEngineBtn: $('#saveEngineBtn'),
    engineName: $('#engineName'),
    engineUrl: $('#engineUrl'),
    engineIcon: $('#engineIcon'),
    engineModalTitle: $('#engineModalTitle'),
    enginesList: $('#enginesList'),
    addEngineBtn: $('#addEngineBtn'),
    // 右键菜单
    contextMenu: $('#contextMenu'),
    pinShortcut: $('#pinShortcut'),
    editShortcut: $('#editShortcut'),
    deleteShortcut: $('#deleteShortcut'),
    folderContextMenu: $('#folderContextMenu'),
    editFolder: $('#editFolder'),
    deleteFolder: $('#deleteFolder'),
    // 设置项
    bgType: $('#bgType'),
    gradientSettings: $('#gradientSettings'),
    solidSettings: $('#solidSettings'),
    imageSettings: $('#imageSettings'),
    gradientColor1: $('#gradientColor1'),
    gradientColor2: $('#gradientColor2'),
    gradientAngle: $('#gradientAngle'),
    gradientAngleValue: $('#gradientAngleValue'),
    solidColor: $('#solidColor'),
    bgImageInput: $('#bgImageInput'),
    bgImagePreview: $('#bgImagePreview'),
    iconSize: $('#iconSize'),
    iconSizeValue: $('#iconSizeValue'),
    folderSize: $('#folderSize'),
    folderSizeValue: $('#folderSizeValue'),
    iconGap: $('#iconGap'),
    iconGapValue: $('#iconGapValue'),
    folderGap: $('#folderGap'),
    folderGapValue: $('#folderGapValue'),
    iconRadius: $('#iconRadius'),
    iconRadiusValue: $('#iconRadiusValue'),
    searchRadius: $('#searchRadius'),
    searchRadiusValue: $('#searchRadiusValue'),
    btnRadius: $('#btnRadius'),
    btnRadiusValue: $('#btnRadiusValue'),
    bookmarkFileInput: $('#bookmarkFileInput'),
    importPreview: $('#importPreview'),
    exportDataBtn: $('#exportDataBtn'),
    importDataInput: $('#importDataInput'),
    // 备份预览弹窗
    backupPreviewModal: $('#backupPreviewModal'),
    backupInfo: $('#backupInfo'),
    backupPreviewTree: $('#backupPreviewTree'),
    closeBackupPreviewBtn: $('#closeBackupPreviewBtn'),
    cancelBackupImportBtn: $('#cancelBackupImportBtn'),
    exportCurrentBeforeImport: $('#exportCurrentBeforeImport'),
    confirmBackupImportBtn: $('#confirmBackupImportBtn'),
    // 多选模式
    multiSelectBtn: $('#multiSelectBtn'),
    multiSelectBar: $('#multiSelectBar'),
    selectedCount: $('#selectedCount'),
    selectAllBtn: $('#selectAllBtn'),
    deselectAllBtn: $('#deselectAllBtn'),
    deleteSelectedBtn: $('#deleteSelectedBtn'),
    exitMultiSelectBtn: $('#exitMultiSelectBtn'),
    // 添加菜单
    addMenuBtn: $('#addMenuBtn'),
    addMenuDropdown: $('#addMenuDropdown'),
    addPartitionBtn: $('#addPartitionBtn'),
    // 文件夹弹窗
    folderPopupOverlay: $('#folderPopupOverlay'),
    folderPopup: $('#folderPopup'),
    folderPopupTitle: $('#folderPopupTitle'),
    folderPopupContent: $('#folderPopupContent'),
    closeFolderPopupBtn: $('#closeFolderPopupBtn'),
    // 书签搜索
    bookmarkSearchInput: $('#bookmarkSearchInput'),
    bookmarkSearchClear: $('#bookmarkSearchClear'),
    // 分区相关
    partitionModal: $('#partitionModal'),
    partitionModalTitle: $('#partitionModalTitle'),
    partitionName: $('#partitionName'),
    closePartitionModalBtn: $('#closePartitionModalBtn'),
    cancelPartitionBtn: $('#cancelPartitionBtn'),
    savePartitionBtn: $('#savePartitionBtn'),
    partitionContextMenu: $('#partitionContextMenu'),
    editPartition: $('#editPartition'),
    deletePartition: $('#deletePartition'),
    // 页面右键菜单相关
    pageContextMenu: $('#pageContextMenu'),
    addPageToBookmark: $('#addPageToBookmark'),
    addPageBookmarkModal: $('#addPageBookmarkModal'),
    closeAddPageBookmarkBtn: $('#closeAddPageBookmarkBtn'),
    pageBookmarkName: $('#pageBookmarkName'),
    pageBookmarkUrl: $('#pageBookmarkUrl'),
    pageBookmarkPartition: $('#pageBookmarkPartition'),
    pageBookmarkFolder: $('#pageBookmarkFolder'),
    cancelAddPageBookmarkBtn: $('#cancelAddPageBookmarkBtn'),
    saveAddPageBookmarkBtn: $('#saveAddPageBookmarkBtn'),
    // 同步面板
    syncBtn: $('#syncBtn'),
    syncPanel: $('#syncPanel'),
    closeSyncBtn: $('#closeSyncBtn'),
    syncLogin: $('#syncLogin'),
    syncActions: $('#syncActions'),
    syncApiList: $('#syncApiList'),
    syncApiUpload: $('#syncApiUpload'),
    syncApiDownload: $('#syncApiDownload'),
    syncAccessKey: $('#syncAccessKey'),
    syncSecretKey: $('#syncSecretKey'),
    syncStatus: $('#syncStatus'),
    syncConnectBtn: $('#syncConnectBtn'),
    syncDisconnectBtn: $('#syncDisconnectBtn'),
    syncUploadBtn: $('#syncUploadBtn'),
    syncDownloadBtn: $('#syncDownloadBtn'),
    syncInfo: $('#syncInfo'),
    syncBackupItems: $('#syncBackupItems'),
    syncRefreshBtn: $('#syncRefreshBtn'),
    // 密码管理
    passwordManagerBtn: $('#passwordManagerBtn'),
    passwordManagerModal: $('#passwordManagerModal'),
    closePasswordManagerBtn: $('#closePasswordManagerBtn'),
    pwdSearchInput: $('#pwdSearchInput'),
    pwdDecryptBtn: $('#pwdDecryptBtn'),
    pwdEncryptBtn: $('#pwdEncryptBtn'),
    pwdAddBtn: $('#pwdAddBtn'),
    pwdMultiSelectBar: $('#pwdMultiSelectBar'),
    pwdSelectAll: $('#pwdSelectAll'),
    pwdSelectedCount: $('#pwdSelectedCount'),
    pwdDeleteSelectedBtn: $('#pwdDeleteSelectedBtn'),
    pwdList: $('#pwdList'),
    pwdEmpty: $('#pwdEmpty'),
    pwdImportBtn: $('#pwdImportBtn'),
    pwdExportBtn: $('#pwdExportBtn'),
    pwdImportInput: $('#pwdImportInput'),
    // 访问密码弹窗
    pwdAccessSetModal: $('#pwdAccessSetModal'),
    pwdAccessSetClose: $('#pwdAccessSetClose'),
    pwdAccessNew: $('#pwdAccessNew'),
    pwdAccessConfirm: $('#pwdAccessConfirm'),
    pwdAccessSetCancel: $('#pwdAccessSetCancel'),
    pwdAccessSetSave: $('#pwdAccessSetSave'),
    pwdAccessVerifyModal: $('#pwdAccessVerifyModal'),
    pwdAccessVerifyClose: $('#pwdAccessVerifyClose'),
    pwdAccessInput: $('#pwdAccessInput'),
    pwdAccessError: $('#pwdAccessError'),
    pwdAccessVerifyCancel: $('#pwdAccessVerifyCancel'),
    pwdAccessVerifyConfirm: $('#pwdAccessVerifyConfirm'),
    // 加密密钥弹窗
    encryptKeyModal: $('#encryptKeyModal'),
    encryptKeyTitle: $('#encryptKeyTitle'),
    encryptKeyTipText: $('#encryptKeyTipText'),
    closeEncryptKeyBtn: $('#closeEncryptKeyBtn'),
    encryptKeyInput: $('#encryptKeyInput'),
    encryptKeyConfirm: $('#encryptKeyConfirm'),
    toggleEncryptKey: $('#toggleEncryptKey'),
    toggleEncryptKeyConfirm: $('#toggleEncryptKeyConfirm'),
    encryptKeyError: $('#encryptKeyError'),
    cancelEncryptKey: $('#cancelEncryptKey'),
    confirmEncryptKey: $('#confirmEncryptKey'),
    // 密码编辑弹窗
    passwordModal: $('#passwordModal'),
    passwordModalTitle: $('#passwordModalTitle'),
    closePasswordModalBtn: $('#closePasswordModalBtn'),
    passwordSiteName: $('#passwordSiteName'),
    passwordSiteUrl: $('#passwordSiteUrl'),
    passwordUsername: $('#passwordUsername'),
    passwordValue: $('#passwordValue'),
    togglePasswordVisibility: $('#togglePasswordVisibility'),
    passwordNotes: $('#passwordNotes'),
    cancelPasswordBtn: $('#cancelPasswordBtn'),
    savePasswordBtn: $('#savePasswordBtn'),
    // 导出选择弹窗
    exportChoiceOverlay: $('#exportChoiceOverlay'),
    exportChoiceEncrypt: $('#exportChoiceEncrypt'),
    exportChoicePlain: $('#exportChoicePlain'),
    exportChoiceCancel: $('#exportChoiceCancel')
  };

  // 应用状态
  let state = {
    partitions: [],
    currentPartition: 1,         // 非隐私区域当前工作区
    currentPrivatePartition: 2,  // 隐私区域当前工作区
    folders: [],
    shortcuts: [],
    searchEngines: [],
    currentEngine: 1,
    settings: {},
    editingShortcutId: null,
    editingFolderId: null,
    editingEngineId: null,
    editingPartitionId: null,
    contextMenuTargetId: null,
    folderContextMenuTargetId: null,
    partitionContextMenuTargetId: null,
    openFolderId: null, // 当前打开的文件夹弹窗
    draggingFromFolderId: null, // 拖拽来源文件夹
    draggingShortcutId: null, // 正在拖拽的书签ID
    // 多选模式
    multiSelectMode: false,
    selectedShortcuts: new Set(),
    // 书签搜索
    bookmarkSearchQuery: '',
    // 搜索框书签搜索
    searchBookmarkResults: [],
    searchBookmarkIndex: -1,
    // 隐私模式
    privateMode: false,
    // 文件夹拖拽排序
    draggingFolderId: null,
    // 同步状态
    syncConnected: false,
    syncConfig: null,
    syncBackups: [],        // 云端备份列表
    selectedBackupId: null, // 选中的备份ID
    // 是否从右键菜单打开添加书签
    isAddBookmarkFromContextMenu: false,
    sourceTabId: null,  // 来源标签页ID，用于返回
    // 密码管理状态
    pwdSearchQuery: '',
    pwdEditingId: null,
    pwdSelectedIds: new Set(),
    pwdMultiSelectMode: false,
    // 加密密钥相关
    encryptKeyResolve: null,
    encryptKeyReject: null
  };

  // AES 加密函数（使用 Web Crypto API）
  async function deriveKey(password, salt) {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveBits', 'deriveKey']
    );
    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  // 加密字符串
  async function encryptString(plaintext, password) {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(password, salt);
    
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      encoder.encode(plaintext)
    );
    
    // 将 salt + iv + 密文组合成一个数组，然后 base64 编码
    const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    combined.set(salt, 0);
    combined.set(iv, salt.length);
    combined.set(new Uint8Array(encrypted), salt.length + iv.length);
    
    return btoa(String.fromCharCode(...combined));
  }

  // 解密字符串
  async function decryptString(encryptedBase64, password) {
    try {
      const combined = new Uint8Array(atob(encryptedBase64).split('').map(c => c.charCodeAt(0)));
      const salt = combined.slice(0, 16);
      const iv = combined.slice(16, 28);
      const encrypted = combined.slice(28);
      
      const key = await deriveKey(password, salt);
      
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        encrypted
      );
      
      return new TextDecoder().decode(decrypted);
    } catch (e) {
      console.error('解密失败:', e);
      return null;
    }
  }

  // 加密密码数据中的敏感字段
  async function encryptPasswords(passwords, encryptKey) {
    if (!passwords || passwords.length === 0) return [];
    
    const encryptedPasswords = [];
    for (const pwd of passwords) {
      const encryptedPwd = { ...pwd };
      if (pwd.username) {
        encryptedPwd.username = await encryptString(pwd.username, encryptKey);
      }
      if (pwd.password) {
        encryptedPwd.password = await encryptString(pwd.password, encryptKey);
      }
      encryptedPwd._encrypted = true; // 标记已加密
      encryptedPasswords.push(encryptedPwd);
    }
    return encryptedPasswords;
  }

  // 解密密码数据中的敏感字段
  async function decryptPasswords(passwords, decryptKey) {
    if (!passwords || passwords.length === 0) return [];
    
    const decryptedPasswords = [];
    for (const pwd of passwords) {
      if (!pwd._encrypted) {
        decryptedPasswords.push(pwd);
        continue;
      }
      
      const decryptedPwd = { ...pwd };
      if (pwd.username) {
        const decrypted = await decryptString(pwd.username, decryptKey);
        if (decrypted === null) return null; // 解密失败
        decryptedPwd.username = decrypted;
      }
      if (pwd.password) {
        const decrypted = await decryptString(pwd.password, decryptKey);
        if (decrypted === null) return null; // 解密失败
        decryptedPwd.password = decrypted;
      }
      delete decryptedPwd._encrypted;
      decryptedPasswords.push(decryptedPwd);
    }
    return decryptedPasswords;
  }

  // 初始化应用
  async function init() {
    // 加载数据
    const data = await Storage.getAll();
    state.partitions = data.partitions || [
      { id: 1, name: 'Home', order: 0, isPrivate: false },
      { id: 2, name: 'Home', order: 0, isPrivate: true }
    ];
    state.currentPartition = data.currentPartition || 1;
    state.currentPrivatePartition = data.currentPrivatePartition || 2;
    state.folders = data.folders || [];
    state.shortcuts = data.shortcuts;
    state.searchEngines = data.searchEngines;
    state.currentEngine = data.currentEngine;
    state.settings = data.settings;

    // 兼容旧数据：确保两个区域都有默认工作区
    ensureDefaultPartitions();

    // 获取两个区域的默认分区ID
    const defaultNormalPartitionId = state.partitions.find(p => !p.isPrivate)?.id || 1;
    const defaultPrivatePartitionId = state.partitions.find(p => p.isPrivate)?.id || 2;
    
    // 获取所有非隐私分区ID和隐私分区ID
    const normalPartitionIds = state.partitions.filter(p => !p.isPrivate).map(p => p.id);
    const privatePartitionIds = state.partitions.filter(p => p.isPrivate).map(p => p.id);

    // 兼容旧数据：修复书签的分区归属
    // 隐私书签必须在隐私分区，非隐私书签必须在非隐私分区
    state.shortcuts = state.shortcuts.map(s => {
      let partitionId = s.partitionId;
      if (s.isPrivate) {
        // 隐私书签：如果分区ID不在隐私分区列表中，改为默认隐私分区
        if (!partitionId || !privatePartitionIds.includes(partitionId)) {
          partitionId = defaultPrivatePartitionId;
        }
      } else {
        // 非隐私书签：如果分区ID不在非隐私分区列表中，改为默认非隐私分区
        if (!partitionId || !normalPartitionIds.includes(partitionId)) {
          partitionId = defaultNormalPartitionId;
        }
      }
      return {
        ...s,
        folderId: s.folderId !== undefined ? s.folderId : null,
        partitionId
      };
    });

    // 兼容旧数据：修复文件夹的分区归属
    state.folders = state.folders.map(f => {
      let partitionId = f.partitionId;
      if (f.isPrivate) {
        if (!partitionId || !privatePartitionIds.includes(partitionId)) {
          partitionId = defaultPrivatePartitionId;
        }
      } else {
        if (!partitionId || !normalPartitionIds.includes(partitionId)) {
          partitionId = defaultNormalPartitionId;
        }
      }
      return { ...f, partitionId };
    });
    
    // 保存修复后的数据
    await Storage.set('shortcuts', state.shortcuts);
    await Storage.set('folders', state.folders);

    // 渲染界面
    updateTime();
    renderShortcuts();
    renderEngines();
    renderEngineSelector();
    applySettings();

    // 绑定事件
    bindEvents();

    // 启动时钟
    setInterval(updateTime, 1000);

    // 检查是否有待添加的书签（从右键菜单添加）
    checkPendingBookmark();
  }

  // 确保两个区域都有默认工作区
  function ensureDefaultPartitions() {
    let normalPartitions = state.partitions.filter(p => !p.isPrivate);
    let privatePartitions = state.partitions.filter(p => p.isPrivate);
    
    let maxId = state.partitions.reduce((max, p) => Math.max(max, p.id), 0);
    let needSave = false;
    
    // 确保非隐私区域有工作区
    if (normalPartitions.length === 0) {
      maxId++;
      state.partitions.push({ id: maxId, name: 'Home', order: 0, isPrivate: false });
      state.currentPartition = maxId;
      needSave = true;
      normalPartitions = state.partitions.filter(p => !p.isPrivate);
    }
    
    // 确保隐私区域有工作区
    if (privatePartitions.length === 0) {
      maxId++;
      state.partitions.push({ id: maxId, name: 'Home', order: 0, isPrivate: true });
      state.currentPrivatePartition = maxId;
      needSave = true;
      privatePartitions = state.partitions.filter(p => p.isPrivate);
    }
    
    // 修复旧数据：如果隐私区域只有一个叫"隐私分区"的，改名为"Home"
    if (privatePartitions.length === 1 && privatePartitions[0].name === '隐私分区') {
      privatePartitions[0].name = 'Home';
      needSave = true;
    }
    
    // 确保当前工作区ID有效
    if (!normalPartitions.find(p => p.id === state.currentPartition)) {
      state.currentPartition = state.partitions.find(p => !p.isPrivate)?.id || 1;
      needSave = true;
    }
    if (!privatePartitions.find(p => p.id === state.currentPrivatePartition)) {
      state.currentPrivatePartition = state.partitions.find(p => p.isPrivate)?.id || 2;
      needSave = true;
    }
    
    if (needSave) {
      Storage.set('partitions', state.partitions);
      Storage.set('currentPartition', state.currentPartition);
      Storage.set('currentPrivatePartition', state.currentPrivatePartition);
    }
  }

  // 获取当前区域的活动工作区ID
  function getCurrentPartitionId() {
    return state.privateMode ? state.currentPrivatePartition : state.currentPartition;
  }

  // 设置当前区域的活动工作区ID
  async function setCurrentPartitionId(id) {
    if (state.privateMode) {
      state.currentPrivatePartition = id;
      await Storage.set('currentPrivatePartition', id);
    } else {
      state.currentPartition = id;
      await Storage.set('currentPartition', id);
    }
  }

  // 更新时间显示
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    elements.time.textContent = `${hours}:${minutes}:${seconds}`;

    // 更新日期
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];
    elements.date.textContent = `${year}年${month}月${day}日`;
    elements.weekday.textContent = weekDay;

    // 更新农历
    const lunarDate = Lunar.solar2lunar(year, month, day);
    if (lunarDate) {
      elements.lunar.textContent = `${lunarDate.yearCn} ${lunarDate.monthCn}${lunarDate.dayCn} 【${lunarDate.animal}年】`;
    }
  }

  // 过滤书签（根据搜索关键词和分区）
  function filterShortcuts(shortcuts, includePartitionFilter = true) {
    // 先根据隐私模式过滤
    let filtered = shortcuts.filter(s => !!s.isPrivate === state.privateMode);
    
    // 根据分区过滤
    if (includePartitionFilter) {
      const currentPartitionId = getCurrentPartitionId();
      filtered = filtered.filter(s => s.partitionId === currentPartitionId || !s.partitionId);
    }
    
    if (!state.bookmarkSearchQuery) return filtered;
    const query = state.bookmarkSearchQuery.toLowerCase();
    return filtered.filter(s => 
      s.name.toLowerCase().includes(query) || 
      s.url.toLowerCase().includes(query)
    );
  }

  // 过滤文件夹（根据分区）
  function filterFolders(folders) {
    // 先根据隐私模式过滤
    let filtered = folders.filter(f => !!f.isPrivate === state.privateMode);
    // 根据分区过滤
    const currentPartitionId = getCurrentPartitionId();
    filtered = filtered.filter(f => f.partitionId === currentPartitionId || !f.partitionId);
    return filtered;
  }

  // 渲染快捷方式（按文件夹分组）
  function renderShortcuts() {
    elements.shortcutsSection.innerHTML = '';

    const isSearching = !!state.bookmarkSearchQuery;

    // 如果正在搜索，显示搜索结果（搜索时不过滤分区，搜索全部）
    if (isSearching) {
      const searchResults = filterShortcuts(state.shortcuts, false);
      
      const resultsContainer = document.createElement('div');
      resultsContainer.className = 'search-results';
      
      const resultsGrid = document.createElement('div');
      resultsGrid.className = 'shortcuts-grid';
      
      if (searchResults.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'no-search-result';
        noResult.textContent = '没有找到匹配的书签';
        resultsContainer.appendChild(noResult);
      } else {
        searchResults.forEach(shortcut => {
          resultsGrid.appendChild(createShortcutElement(shortcut));
        });
        resultsContainer.appendChild(resultsGrid);
      }
      
      elements.shortcutsSection.appendChild(resultsContainer);
      return;
    }

    // 创建根目录区域（大图标区域）
    const rootContainer = document.createElement('div');
    rootContainer.className = 'root-shortcuts';
    rootContainer.dataset.folderId = 'root';
    
    // 添加常用栏标题
    const rootTitle = document.createElement('div');
    rootTitle.className = 'section-title';
    rootTitle.textContent = '常用';
    rootContainer.appendChild(rootTitle);
    
    const rootGrid = document.createElement('div');
    rootGrid.className = 'shortcuts-grid';
    rootGrid.dataset.area = 'root'; // 标记为根目录区域
    
    // 根目录拖放事件 - 支持排序和移入
    rootGrid.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      
      // 清除之前的指示
      rootGrid.querySelectorAll('.shortcut-item').forEach(el => {
        el.classList.remove('drag-before', 'drag-after');
      });
      
      // 如果拖拽的是根目录书签，显示排序指示
      if (state.draggingShortcutId) {
        const draggingShortcut = state.shortcuts.find(s => s.id === state.draggingShortcutId);
        if (draggingShortcut && !draggingShortcut.folderId) {
          // 是根目录书签，处理排序
          const afterElement = getDragAfterElementInGrid(rootGrid, e.clientX, e.clientY);
          
          if (afterElement && parseInt(afterElement.dataset.id) !== state.draggingShortcutId) {
            afterElement.classList.add('drag-before');
          }
          return;
        }
      }
      
      // 其他书签拖入根目录
      rootContainer.classList.add('drag-over');
    });

    rootGrid.addEventListener('dragleave', (e) => {
      if (!rootGrid.contains(e.relatedTarget)) {
        rootContainer.classList.remove('drag-over');
        rootGrid.querySelectorAll('.shortcut-item').forEach(el => {
          el.classList.remove('drag-before', 'drag-after');
        });
      }
    });

    rootGrid.addEventListener('drop', async (e) => {
      e.preventDefault();
      rootContainer.classList.remove('drag-over');
      rootGrid.querySelectorAll('.shortcut-item').forEach(el => {
        el.classList.remove('drag-before', 'drag-after');
      });
      
      const shortcutId = parseInt(e.dataTransfer.getData('text/plain'));
      if (!shortcutId) return;
      
      const draggingShortcut = state.shortcuts.find(s => s.id === shortcutId);
      if (!draggingShortcut) return;
      
      // 判断是排序还是移入
      if (!draggingShortcut.folderId || draggingShortcut.folderId === null) {
        // 根目录内排序
        const afterElement = getDragAfterElementInGrid(rootGrid, e.clientX, e.clientY);
        const beforeId = afterElement ? parseInt(afterElement.dataset.id) : null;
        await reorderShortcutInRoot(shortcutId, beforeId);
      } else {
        // 从文件夹移到根目录
        await moveShortcutToFolder(shortcutId, null);
        if (state.openFolderId) {
          openFolderPopup(state.openFolderId);
        }
      }
    });
    
    // 先渲染根目录的快捷方式（无文件夹的大图标）
    // 根据隐私模式和分区过滤书签
    const currentPartitionId = getCurrentPartitionId();
    const rootShortcuts = state.shortcuts.filter(s => {
      if (s.folderId) return false; // 不在根目录
      // 隐私模式显示隐私书签，普通模式显示普通书签
      if (!!s.isPrivate !== state.privateMode) return false;
      // 分区过滤
      if (s.partitionId && s.partitionId !== currentPartitionId) return false;
      return true;
    });
    
    // 获取被钉住的书签（在文件夹内但被钉住的）
    const pinnedShortcuts = state.shortcuts.filter(s => {
      if (!s.folderId) return false; // 必须在文件夹内
      if (!s.isPinned) return false; // 必须被钉住
      // 隐私模式显示隐私书签，普通模式显示普通书签
      if (!!s.isPrivate !== state.privateMode) return false;
      // 分区过滤
      if (s.partitionId && s.partitionId !== currentPartitionId) return false;
      return true;
    });
    
    // 先渲染根目录书签
    rootShortcuts.forEach(shortcut => {
      rootGrid.appendChild(createShortcutElement(shortcut));
    });
    
    // 再渲染被钉住的书签（带特殊标记）
    pinnedShortcuts.forEach(shortcut => {
      rootGrid.appendChild(createShortcutElement(shortcut, false, true));
    });
    
    rootContainer.appendChild(rootGrid);
    elements.shortcutsSection.appendChild(rootContainer);

    // 创建文件夹区域（包含分区标签）
    const foldersContainer = document.createElement('div');
    foldersContainer.className = 'folders-section';
    
    // 添加分区标签栏作为标题
    const partitionsBar = createPartitionsBar();
    foldersContainer.appendChild(partitionsBar);
    
    // 根据隐私模式和分区过滤文件夹
    const visibleFolders = filterFolders(state.folders);

    if (visibleFolders.length > 0) {
      const foldersGrid = document.createElement('div');
      foldersGrid.className = 'shortcuts-grid';
      
      visibleFolders.forEach(folder => {
        const folderShortcuts = state.shortcuts.filter(s => s.folderId === folder.id);
        foldersGrid.appendChild(createFolderElement(folder, folderShortcuts));
      });
      
      foldersContainer.appendChild(foldersGrid);
    } else {
      // 即使没有文件夹也显示空状态提示
      const emptyTip = document.createElement('div');
      emptyTip.className = 'folders-empty-tip';
      emptyTip.textContent = '当前分区暂无文件夹';
      foldersContainer.appendChild(emptyTip);
    }
    
    elements.shortcutsSection.appendChild(foldersContainer);
  }

  // 移动快捷方式到文件夹
  async function moveShortcutToFolder(shortcutId, folderId) {
    const shortcut = state.shortcuts.find(s => s.id === shortcutId);
    if (!shortcut) return;
    
    // 如果目标文件夹和当前文件夹相同，不做任何操作
    if (shortcut.folderId === folderId) return;
    
    // 检查隐私模式匹配：隐私书签只能放入隐私文件夹，普通书签只能放入普通文件夹
    if (folderId !== null) {
      const targetFolder = state.folders.find(f => f.id === folderId);
      if (targetFolder && !!targetFolder.isPrivate !== !!shortcut.isPrivate) {
        // 隐私属性不匹配，不允许移动
        return;
      }
    }
    
    shortcut.folderId = folderId;
    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
  }

  // 钉住/取消钉住书签到常用区域
  async function togglePinShortcut(shortcutId) {
    const shortcut = state.shortcuts.find(s => s.id === shortcutId);
    if (!shortcut) return;
    
    // 切换钉住状态
    shortcut.isPinned = !shortcut.isPinned;
    
    await Storage.set('shortcuts', state.shortcuts);
    hideAllContextMenus();
    renderShortcuts();
    
    // 如果文件夹弹窗打开，刷新弹窗
    if (state.openFolderId) {
      openFolderPopup(state.openFolderId);
    }
  }

  // 创建文件夹元素（iOS风格）
  function createFolderElement(folder, shortcuts) {
    const item = document.createElement('div');
    item.className = 'folder-item';
    item.dataset.folderId = folder.id;
    item.draggable = true; // 允许文件夹拖拽

    // 预览区域 - 3x3网格显示最多9个图标
    const preview = document.createElement('div');
    preview.className = 'folder-preview';

    // 取前9个书签显示预览
    const previewShortcuts = shortcuts.slice(0, 9);
    previewShortcuts.forEach(shortcut => {
      const previewIcon = document.createElement('div');
      previewIcon.className = 'folder-preview-icon';
      
      const faviconUrl = getFaviconUrl(shortcut.url);
      if (shortcut.icon || faviconUrl) {
        const img = document.createElement('img');
        img.addEventListener('error', () => {
          img.src = DEFAULT_ICON_SVG;
        });
        img.src = shortcut.icon || faviconUrl;
        previewIcon.appendChild(img);
      } else {
        previewIcon.textContent = shortcut.name.charAt(0).toUpperCase();
      }
      
      preview.appendChild(previewIcon);
    });

    // 如果书签不足9个，添加空占位
    for (let i = previewShortcuts.length; i < 9; i++) {
      const emptyIcon = document.createElement('div');
      emptyIcon.className = 'folder-preview-icon empty';
      preview.appendChild(emptyIcon);
    }

    // 文件夹名称
    const label = document.createElement('span');
    label.className = 'folder-label';
    label.textContent = folder.name;

    item.appendChild(preview);
    item.appendChild(label);

    // 文件夹拖拽排序 - dragstart
    item.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      state.draggingFolderId = folder.id;
      e.dataTransfer.setData('text/folder-id', folder.id);
      e.dataTransfer.effectAllowed = 'move';
      item.classList.add('is-dragging');
      document.body.classList.add('is-dragging');
    });

    // 文件夹拖拽排序 - dragend
    item.addEventListener('dragend', () => {
      state.draggingFolderId = null;
      item.classList.remove('is-dragging');
      document.body.classList.remove('is-dragging');
      // 清除所有拖拽指示器
      document.querySelectorAll('.folder-item').forEach(el => {
        el.classList.remove('drag-over', 'drag-before', 'drag-after');
      });
    });

    // 点击打开文件夹弹窗
    item.addEventListener('click', (e) => {
      if (e.button !== 0) return;
      if (document.body.classList.contains('is-dragging')) return;
      openFolderPopup(folder.id);
    });

    // 文件夹右键菜单
    item.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showFolderContextMenu(e.clientX, e.clientY, folder.id);
    });

    // 拖拽进入文件夹 (书签拖入或文件夹排序)
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      
      // 判断是文件夹排序还是书签拖入
      if (state.draggingFolderId && state.draggingFolderId !== folder.id) {
        // 文件夹排序
        e.dataTransfer.dropEffect = 'move';
        const rect = item.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        
        // 清除之前的指示
        item.classList.remove('drag-before', 'drag-after', 'drag-over');
        
        if (e.clientX < midX) {
          item.classList.add('drag-before');
        } else {
          item.classList.add('drag-after');
        }
      } else if (!state.draggingFolderId) {
        // 书签拖入文件夹
        e.dataTransfer.dropEffect = 'move';
        item.classList.add('drag-over');
      }
    });

    // 拖拽离开文件夹
    item.addEventListener('dragleave', (e) => {
      if (!item.contains(e.relatedTarget)) {
        item.classList.remove('drag-over', 'drag-before', 'drag-after');
      }
    });

    // 放置到文件夹
    item.addEventListener('drop', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      item.classList.remove('drag-over', 'drag-before', 'drag-after');
      
      // 判断是文件夹排序还是书签拖入
      const draggingFolderId = state.draggingFolderId;
      
      if (draggingFolderId && draggingFolderId !== folder.id) {
        // 文件夹排序
        const rect = item.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        const insertBefore = e.clientX < midX;
        
        await reorderFolder(draggingFolderId, folder.id, insertBefore);
      } else {
        // 书签拖入文件夹
        const shortcutId = parseInt(e.dataTransfer.getData('text/plain'));
        if (shortcutId) {
          await moveShortcutToFolder(shortcutId, folder.id);
          // 如果弹窗打开，刷新弹窗内容
          if (state.openFolderId) {
            openFolderPopup(state.openFolderId);
          }
        }
      }
    });

    return item;
  }

  // 文件夹重新排序
  async function reorderFolder(draggedId, targetId, insertBefore) {
    const draggedIndex = state.folders.findIndex(f => f.id === draggedId);
    const targetIndex = state.folders.findIndex(f => f.id === targetId);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    // 从数组中移除被拖拽的文件夹
    const [draggedFolder] = state.folders.splice(draggedIndex, 1);
    
    // 计算新的目标位置
    let newIndex = state.folders.findIndex(f => f.id === targetId);
    if (!insertBefore) {
      newIndex += 1;
    }
    
    // 插入到新位置
    state.folders.splice(newIndex, 0, draggedFolder);
    
    // 保存并重新渲染
    await Storage.set('folders', state.folders);
    renderShortcuts();
  }

  // 打开文件夹弹窗
  function openFolderPopup(folderId) {
    const folder = state.folders.find(f => f.id === folderId);
    if (!folder) return;

    state.openFolderId = folderId;
    state.draggingShortcutId = null;
    
    // 设置标题
    elements.folderPopupTitle.textContent = folder.name;
    
    // 清空并填充内容
    elements.folderPopupContent.innerHTML = '';
    
    const folderShortcuts = state.shortcuts.filter(s => s.folderId === folderId);
    
    folderShortcuts.forEach(shortcut => {
      const shortcutEl = createShortcutElement(shortcut, true);
      elements.folderPopupContent.appendChild(shortcutEl);
    });

    // 如果文件夹为空，显示提示
    if (folderShortcuts.length === 0) {
      const emptyTip = document.createElement('div');
      emptyTip.className = 'folder-empty-tip';
      emptyTip.textContent = '拖拽书签到此文件夹';
      elements.folderPopupContent.appendChild(emptyTip);
    }

    // 文件夹弹窗内的拖放排序
    elements.folderPopupContent.addEventListener('dragover', handleFolderPopupDragOver);
    elements.folderPopupContent.addEventListener('drop', handleFolderPopupDrop);

    // 显示弹窗
    elements.folderPopupOverlay.classList.add('show');
  }

  // 文件夹弹窗内拖拽悬停处理
  function handleFolderPopupDragOver(e) {
    e.preventDefault();
    if (!state.draggingShortcutId) return;
    
    const afterElement = getDragAfterElement(elements.folderPopupContent, e.clientX, e.clientY);
    const draggingEl = elements.folderPopupContent.querySelector(`[data-id="${state.draggingShortcutId}"]`);
    
    if (!draggingEl) return;
    
    // 清除所有排序指示器
    elements.folderPopupContent.querySelectorAll('.shortcut-item').forEach(el => {
      el.classList.remove('drag-before', 'drag-after');
    });
    
    if (afterElement) {
      if (afterElement !== draggingEl) {
        afterElement.classList.add('drag-before');
      }
    }
  }

  // 文件夹弹窗内拖放处理
  async function handleFolderPopupDrop(e) {
    e.preventDefault();
    if (!state.draggingShortcutId || !state.openFolderId) return;
    
    const afterElement = getDragAfterElement(elements.folderPopupContent, e.clientX, e.clientY);
    
    // 重新排序书签
    await reorderShortcutInFolder(state.draggingShortcutId, state.openFolderId, afterElement ? parseInt(afterElement.dataset.id) : null);
  }

  // 获取拖拽后应该插入的位置
  function getDragAfterElement(container, x, y) {
    const draggableElements = [...container.querySelectorAll('.shortcut-item:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offsetX = x - box.left - box.width / 2;
      const offsetY = y - box.top - box.height / 2;
      const offset = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
      
      // 找到最近的元素
      if (x < box.right && y < box.bottom && (!closest || offset < closest.offset)) {
        return { offset, element: child };
      }
      return closest;
    }, null)?.element;
  }

  // 重新排序文件夹内的书签
  async function reorderShortcutInFolder(shortcutId, folderId, beforeShortcutId) {
    const folderShortcuts = state.shortcuts.filter(s => s.folderId === folderId);
    const otherShortcuts = state.shortcuts.filter(s => s.folderId !== folderId);
    
    const draggedIndex = folderShortcuts.findIndex(s => s.id === shortcutId);
    if (draggedIndex === -1) return;
    
    const [draggedShortcut] = folderShortcuts.splice(draggedIndex, 1);
    
    if (beforeShortcutId) {
      const targetIndex = folderShortcuts.findIndex(s => s.id === beforeShortcutId);
      if (targetIndex !== -1) {
        folderShortcuts.splice(targetIndex, 0, draggedShortcut);
      } else {
        folderShortcuts.push(draggedShortcut);
      }
    } else {
      folderShortcuts.push(draggedShortcut);
    }
    
    state.shortcuts = [...otherShortcuts, ...folderShortcuts];
    await Storage.set('shortcuts', state.shortcuts);
    
    // 刷新文件夹弹窗
    openFolderPopup(folderId);
  }

  // 重新排序根目录的书签
  async function reorderShortcutInRoot(shortcutId, beforeShortcutId) {
    // 获取根目录书签（当前模式下可见的）
    const rootShortcuts = state.shortcuts.filter(s => {
      if (s.folderId) return false;
      return !!s.isPrivate === state.privateMode;
    });
    const otherShortcuts = state.shortcuts.filter(s => {
      if (!s.folderId) {
        return !!s.isPrivate !== state.privateMode;
      }
      return true;
    });
    
    const draggedIndex = rootShortcuts.findIndex(s => s.id === shortcutId);
    if (draggedIndex === -1) return;
    
    const [draggedShortcut] = rootShortcuts.splice(draggedIndex, 1);
    
    if (beforeShortcutId) {
      const targetIndex = rootShortcuts.findIndex(s => s.id === beforeShortcutId);
      if (targetIndex !== -1) {
        rootShortcuts.splice(targetIndex, 0, draggedShortcut);
      } else {
        rootShortcuts.push(draggedShortcut);
      }
    } else {
      rootShortcuts.push(draggedShortcut);
    }
    
    state.shortcuts = [...rootShortcuts, ...otherShortcuts];
    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
  }

  // 根据相对位置重新排序根目录的书签
  async function reorderShortcutInRootRelative(draggedId, targetId, insertBefore) {
    // 获取根目录书签（当前模式下可见的）
    const rootShortcuts = state.shortcuts.filter(s => {
      if (s.folderId) return false;
      return !!s.isPrivate === state.privateMode;
    });
    const otherShortcuts = state.shortcuts.filter(s => {
      if (!s.folderId) {
        return !!s.isPrivate !== state.privateMode;
      }
      return true;
    });
    
    const draggedIndex = rootShortcuts.findIndex(s => s.id === draggedId);
    if (draggedIndex === -1) return;
    
    const [draggedShortcut] = rootShortcuts.splice(draggedIndex, 1);
    
    let targetIndex = rootShortcuts.findIndex(s => s.id === targetId);
    if (targetIndex === -1) {
      rootShortcuts.push(draggedShortcut);
    } else {
      if (!insertBefore) {
        targetIndex += 1;
      }
      rootShortcuts.splice(targetIndex, 0, draggedShortcut);
    }
    
    state.shortcuts = [...rootShortcuts, ...otherShortcuts];
    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
  }

  // 获取网格内拖拽后应该插入的位置
  function getDragAfterElementInGrid(container, x, y) {
    const draggableElements = [...container.querySelectorAll('.shortcut-item:not(.dragging)')];
    
    if (draggableElements.length === 0) return null;
    
    let closestElement = null;
    let closestDistance = Infinity;
    
    for (const child of draggableElements) {
      const box = child.getBoundingClientRect();
      const centerX = box.left + box.width / 2;
      const centerY = box.top + box.height / 2;
      
      // 计算到元素中心的距离
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      
      // 如果鼠标在元素左半边，考虑插入到该元素前面
      if (x < centerX && distance < closestDistance) {
        closestDistance = distance;
        closestElement = child;
      }
    }
    
    // 如果没找到（鼠标在所有元素右边），返回null表示插入到末尾
    return closestElement;
  }

  // 关闭文件夹弹窗
  function closeFolderPopup() {
    elements.folderPopupOverlay.classList.remove('show');
    state.openFolderId = null;
    state.draggingShortcutId = null;
    
    // 移除事件监听
    elements.folderPopupContent.removeEventListener('dragover', handleFolderPopupDragOver);
    elements.folderPopupContent.removeEventListener('drop', handleFolderPopupDrop);
  }

  // 创建快捷方式元素
  // isPinnedDisplay: 是否作为钉住的书签显示在常用区域
  function createShortcutElement(shortcut, inFolderPopup = false, isPinnedDisplay = false) {
    const item = document.createElement('div');
    item.className = 'shortcut-item';
    if (isPinnedDisplay) {
      item.classList.add('pinned');
    }
    item.dataset.id = shortcut.id;
    item.draggable = !isPinnedDisplay; // 钉住显示的书签不能拖动
    item.title = shortcut.name; // 鼠标悬停显示完整名称

    const icon = document.createElement('div');
    icon.className = 'shortcut-icon';

    // 创建文字备用元素（当图片加载失败时显示）
    const textFallback = document.createElement('span');
    textFallback.className = 'icon-text-fallback';
    textFallback.textContent = shortcut.name.charAt(0).toUpperCase();
    textFallback.style.display = 'none';
    icon.appendChild(textFallback);

    // 尝试获取网站图标
    const faviconUrl = getFaviconUrl(shortcut.url);
    if (shortcut.icon || faviconUrl) {
      const img = document.createElement('img');
      img.addEventListener('error', () => {
        // favicon 加载失败时使用默认图标
        img.src = DEFAULT_ICON_SVG;
      });
      img.src = shortcut.icon || faviconUrl;
      icon.appendChild(img);
    } else {
      textFallback.style.display = 'flex';
    }
    
    // 如果是钉住显示，添加图钉图标
    if (isPinnedDisplay) {
      const pinBadge = document.createElement('div');
      pinBadge.className = 'pin-badge';
      pinBadge.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12"><path fill="currentColor" d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"/></svg>';
      icon.appendChild(pinBadge);
    }

    const name = document.createElement('span');
    name.className = 'shortcut-name';
    name.textContent = shortcut.name;

    item.appendChild(icon);
    item.appendChild(name);

    // 当其他书签拖到这个书签上时，显示排序指示
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      
      // 不能拖到自己上
      if (state.draggingShortcutId === shortcut.id) return;
      
      // 判断拖拽的书签是否和当前书签在同一区域
      const draggingShortcut = state.shortcuts.find(s => s.id === state.draggingShortcutId);
      if (!draggingShortcut) return;
      
      // 钉住显示的书签不参与排序
      if (isPinnedDisplay) return;
      
      // 两个书签的 folderId 相同才能排序
      if (draggingShortcut.folderId === shortcut.folderId) {
        const box = item.getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        
        // 清除其他书签的指示
        const container = item.parentElement;
        if (container) {
          container.querySelectorAll('.shortcut-item').forEach(el => {
            el.classList.remove('drag-before', 'drag-after');
          });
        }
        
        // 根据鼠标位置显示左侧或右侧指示
        if (e.clientX < centerX) {
          item.classList.add('drag-before');
        } else {
          item.classList.add('drag-after');
        }
      }
    });

    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-before', 'drag-after');
    });

    item.addEventListener('drop', async (e) => {
      // 钉住显示的书签不接受拖放
      if (isPinnedDisplay) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      item.classList.remove('drag-before', 'drag-after');
      
      const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
      if (!draggedId || draggedId === shortcut.id) return;
      
      const draggingShortcut = state.shortcuts.find(s => s.id === draggedId);
      if (!draggingShortcut) return;
      
      // 两个书签的 folderId 相同才能排序
      if (draggingShortcut.folderId === shortcut.folderId) {
        const box = item.getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        const insertBefore = e.clientX < centerX;
        
        if (shortcut.folderId) {
          // 在文件夹内排序
          await reorderShortcutInFolder(draggedId, shortcut.folderId, insertBefore ? shortcut.id : null);
        } else {
          // 在根目录排序
          await reorderShortcutInRootRelative(draggedId, shortcut.id, insertBefore);
        }
      }
    });

    // 拖拽开始
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', shortcut.id.toString());
      e.dataTransfer.effectAllowed = 'move';
      item.classList.add('dragging');
      state.draggingShortcutId = shortcut.id;
      
      if (inFolderPopup) {
        // 在文件夹弹窗内，记录来源文件夹但不立即关闭
        state.draggingFromFolderId = state.openFolderId;
      }
      
      // 延迟添加拖拽状态，让拖拽图像正常显示
      setTimeout(() => {
        document.body.classList.add('is-dragging');
      }, 0);
    });

    // 拖拽过程中检测是否超出文件夹弹窗
    if (inFolderPopup) {
      item.addEventListener('drag', (e) => {
        if (!state.openFolderId) return;
        
        const popup = elements.folderPopup;
        const rect = popup.getBoundingClientRect();
        
        // 检测鼠标是否超出弹窗范围
        if (e.clientX > 0 && e.clientY > 0) { // 有效坐标
          if (e.clientX < rect.left || e.clientX > rect.right || 
              e.clientY < rect.top || e.clientY > rect.bottom) {
            // 超出弹窗范围，关闭弹窗让用户拖到外面
            closeFolderPopup();
          }
        }
      });
    }

    // 拖拽结束
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      document.body.classList.remove('is-dragging');
      state.draggingShortcutId = null;
      state.draggingFromFolderId = null;
      // 移除所有拖拽悬停状态
      document.querySelectorAll('.drag-over, .drag-before, .drag-after').forEach(el => {
        el.classList.remove('drag-over', 'drag-before', 'drag-after');
      });
    });

    // 点击处理
    item.addEventListener('click', (e) => {
      e.preventDefault();
      // 如果正在拖拽，不触发点击
      if (item.classList.contains('dragging')) return;
      
      // 多选模式下切换选中状态
      if (state.multiSelectMode) {
        toggleShortcutSelection(shortcut.id, item);
        return;
      }
      
      openInBackground(shortcut.url);
    });

    // 右键菜单
    item.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      // 多选模式下右键也是切换选中
      if (state.multiSelectMode) {
        toggleShortcutSelection(shortcut.id, item);
        return;
      }
      showContextMenu(e.clientX, e.clientY, shortcut.id);
    });

    return item;
  }

  // 后台打开链接
  function openInBackground(url) {
    // 确保 URL 有协议
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    // 使用 Chrome 扩展 API 在后台打开
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.create({ url: url, active: false });
    } else {
      // 普通网页环境，使用 window.open
      window.open(url, '_blank');
    }
  }

  // 获取网站图标URL（直接使用网站的favicon）
  function getFaviconUrl(url) {
    try {
      const urlObj = new URL(url);
      return `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`;
    } catch {
      return '';
    }
  }

  // 默认图标路径（用于 favicon 加载失败时显示蓝色地球）
  const DEFAULT_ICON_SVG = 'icons/default-favicon.svg';

  // 显示快捷方式右键菜单
  function showContextMenu(x, y, id) {
    hideAllContextMenus();
    state.contextMenuTargetId = id;
    
    // 获取书签信息，判断是否在文件夹内
    const shortcut = state.shortcuts.find(s => s.id === id);
    const pinItem = document.getElementById('pinShortcut');
    
    if (shortcut && shortcut.folderId) {
      // 在文件夹内的书签，显示"钉到常用"选项
      if (shortcut.isPinned) {
        pinItem.textContent = '取消钉住';
      } else {
        pinItem.textContent = '钉到常用';
      }
      pinItem.style.display = 'block';
    } else {
      // 根目录的书签，隐藏"钉到常用"选项
      pinItem.style.display = 'none';
    }
    
    elements.contextMenu.style.left = x + 'px';
    elements.contextMenu.style.top = y + 'px';
    elements.contextMenu.classList.add('show');
  }

  // 显示文件夹右键菜单
  function showFolderContextMenu(x, y, id) {
    hideAllContextMenus();
    state.folderContextMenuTargetId = id;
    elements.folderContextMenu.style.left = x + 'px';
    elements.folderContextMenu.style.top = y + 'px';
    elements.folderContextMenu.classList.add('show');
  }

  // 隐藏所有右键菜单
  function hideAllContextMenus() {
    elements.contextMenu.classList.remove('show');
    elements.folderContextMenu.classList.remove('show');
    elements.partitionContextMenu.classList.remove('show');
    elements.pageContextMenu.classList.remove('show');
    state.contextMenuTargetId = null;
    state.folderContextMenuTargetId = null;
    partitionContextMenuTargetId = null;
  }

  // 显示页面右键菜单
  function showPageContextMenu(x, y) {
    hideAllContextMenus();
    
    // 调整菜单位置，确保不超出屏幕
    const menuWidth = 180;
    const menuHeight = 50;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (x + menuWidth > viewportWidth) {
      x = viewportWidth - menuWidth - 10;
    }
    if (y + menuHeight > viewportHeight) {
      y = viewportHeight - menuHeight - 10;
    }
    
    elements.pageContextMenu.style.left = x + 'px';
    elements.pageContextMenu.style.top = y + 'px';
    elements.pageContextMenu.classList.add('show');
  }

  // 默认搜索引擎图标 (SVG base64)
  const defaultEngineIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI3IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjdlZWEiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNiIgeTE9IjE2IiB4Mj0iMjEiIHkyPSIyMSIgc3Ryb2tlPSIjNjY3ZWVhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==';

  // 渲染搜索引擎列表（设置面板）
  function renderEngines() {
    elements.enginesList.innerHTML = '';
    state.searchEngines.forEach(engine => {
      const item = document.createElement('div');
      item.className = 'engine-item';
      item.innerHTML = `
        <img src="${engine.icon || defaultEngineIcon}" alt="${engine.name}" class="engine-icon-img">
        <div class="engine-item-info">
          <div class="engine-item-name">${engine.name}</div>
          <div class="engine-item-url">${engine.url}</div>
        </div>
        <div class="engine-item-actions">
          <button class="edit-engine-btn" data-id="${engine.id}">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </button>
          <button class="delete-engine-btn" data-id="${engine.id}">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        </div>
      `;
      // 绑定图片错误处理
      const img = item.querySelector('.engine-icon-img');
      if (img) {
        img.addEventListener('error', () => { img.src = defaultEngineIcon; });
      }
      elements.enginesList.appendChild(item);
    });

    // 绑定编辑和删除按钮事件
    $$('.edit-engine-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        openEngineModal(id);
      });
    });

    $$('.delete-engine-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        deleteEngine(id);
      });
    });
  }

  // 渲染搜索引擎选择器
  function renderEngineSelector() {
    const currentEngine = state.searchEngines.find(e => e.id === state.currentEngine) || state.searchEngines[0];
    if (currentEngine) {
      elements.currentEngineName.textContent = currentEngine.name;
      // 移除旧的错误处理器，添加新的
      const newIcon = elements.currentEngineIcon.cloneNode(true);
      elements.currentEngineIcon.parentNode.replaceChild(newIcon, elements.currentEngineIcon);
      elements.currentEngineIcon = newIcon;
      elements.currentEngineIcon.addEventListener('error', () => {
        elements.currentEngineIcon.src = defaultEngineIcon;
      });
      elements.currentEngineIcon.src = currentEngine.icon || defaultEngineIcon;
    }

    // 渲染下拉列表
    elements.engineDropdown.innerHTML = '';
    state.searchEngines.forEach(engine => {
      const option = document.createElement('div');
      option.className = 'search-engine-option' + (engine.id === state.currentEngine ? ' active' : '');
      option.dataset.id = engine.id;
      option.innerHTML = `
        <img src="${engine.icon || defaultEngineIcon}" alt="${engine.name}" class="engine-dropdown-img">
        <span>${engine.name}</span>
      `;
      // 绑定图片错误处理
      const img = option.querySelector('.engine-dropdown-img');
      if (img) {
        img.addEventListener('error', () => { img.src = defaultEngineIcon; });
      }
      option.addEventListener('click', () => {
        selectEngine(engine.id);
      });
      elements.engineDropdown.appendChild(option);
    });
  }

  // 选择搜索引擎
  async function selectEngine(id) {
    state.currentEngine = id;
    await Storage.set('currentEngine', id);
    renderEngineSelector();
    toggleEngineDropdown(false);
  }

  // 切换搜索引擎下拉菜单
  function toggleEngineDropdown(show) {
    if (show === undefined) {
      elements.engineDropdown.classList.toggle('show');
      elements.engineSelector.classList.toggle('active');
    } else if (show) {
      elements.engineDropdown.classList.add('show');
      elements.engineSelector.classList.add('active');
    } else {
      elements.engineDropdown.classList.remove('show');
      elements.engineSelector.classList.remove('active');
    }
  }

  // 执行搜索（后台打开）
  function doSearch() {
    const query = elements.searchInput.value.trim();
    if (!query) return;

    // 隐藏书签搜索结果
    hideBookmarkSearchResults();

    const engine = state.searchEngines.find(e => e.id === state.currentEngine) || state.searchEngines[0];
    if (engine) {
      const url = engine.url.replace('%s', encodeURIComponent(query));
      openInBackground(url);
      elements.searchInput.value = ''; // 清空搜索框
    }
  }

  // 搜索书签
  function searchBookmarks(query) {
    if (!query || query.length < 1) {
      state.searchBookmarkResults = [];
      return [];
    }
    
    const lowerQuery = query.toLowerCase();
    const results = state.shortcuts.filter(s => {
      // 根据当前隐私模式过滤：书签本身有 isPrivate 属性
      if (!!s.isPrivate !== state.privateMode) {
        return false;
      }
      
      const nameMatch = s.name && s.name.toLowerCase().includes(lowerQuery);
      const urlMatch = s.url && s.url.toLowerCase().includes(lowerQuery);
      return nameMatch || urlMatch;
    }).slice(0, 8); // 最多显示8个结果
    
    state.searchBookmarkResults = results;
    return results;
  }

  // 显示书签搜索结果
  function showBookmarkSearchResults(results) {
    if (!elements.bookmarkSearchResults) return;
    
    if (results.length === 0) {
      elements.bookmarkSearchResults.classList.remove('show');
      return;
    }
    
    let html = `<div class="bookmark-search-header">
      <span>书签匹配</span>
      <span>${results.length} 个结果</span>
    </div>`;
    
    results.forEach((s, index) => {
      const folder = s.folderId ? state.folders.find(f => f.id === s.folderId) : null;
      const folderName = folder ? folder.name : '';
      html += `
        <div class="bookmark-search-item ${index === state.searchBookmarkIndex ? 'active' : ''}" 
             data-index="${index}" data-url="${escapeHtml(s.url)}">
          <div class="bookmark-icon">
            <img src="${getFaviconUrl(s.url)}" onerror="this.src='${DEFAULT_ICON_SVG}'">
          </div>
          <div class="bookmark-info">
            <div class="bookmark-name">${escapeHtml(s.name)}</div>
            <div class="bookmark-url">${escapeHtml(s.url)}</div>
          </div>
          ${folderName ? `<span class="bookmark-folder">${escapeHtml(folderName)}</span>` : ''}
        </div>
      `;
    });
    
    html += `<div class="bookmark-search-tip">
      <kbd>↑</kbd><kbd>↓</kbd> 选择 · <kbd>Enter</kbd> 打开 · <kbd>Esc</kbd> 关闭
    </div>`;
    
    elements.bookmarkSearchResults.innerHTML = html;
    elements.bookmarkSearchResults.classList.add('show');
    
    // 绑定点击事件
    elements.bookmarkSearchResults.querySelectorAll('.bookmark-search-item').forEach(item => {
      item.addEventListener('click', () => {
        const url = item.dataset.url;
        if (url) {
          openInBackground(url);
          elements.searchInput.value = '';
          hideBookmarkSearchResults();
        }
      });
    });
  }

  // 隐藏书签搜索结果
  function hideBookmarkSearchResults() {
    if (!elements.bookmarkSearchResults) return;
    elements.bookmarkSearchResults.classList.remove('show');
    state.searchBookmarkResults = [];
    state.searchBookmarkIndex = -1;
  }

  // 处理搜索输入
  function handleSearchInput(e) {
    const query = e.target.value.trim();
    state.searchBookmarkIndex = -1;
    
    if (query.length >= 1) {
      const results = searchBookmarks(query);
      showBookmarkSearchResults(results);
    } else {
      hideBookmarkSearchResults();
    }
  }

  // 处理搜索键盘事件
  function handleSearchKeydown(e) {
    const results = state.searchBookmarkResults;
    
    if (!results.length) {
      if (e.key === 'Enter') {
        doSearch();
      }
      return;
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.searchBookmarkIndex = Math.min(state.searchBookmarkIndex + 1, results.length - 1);
      showBookmarkSearchResults(results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.searchBookmarkIndex = Math.max(state.searchBookmarkIndex - 1, -1);
      showBookmarkSearchResults(results);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (state.searchBookmarkIndex >= 0 && results[state.searchBookmarkIndex]) {
        // 打开选中的书签
        openInBackground(results[state.searchBookmarkIndex].url);
        elements.searchInput.value = '';
        hideBookmarkSearchResults();
      } else {
        // 执行搜索引擎搜索
        doSearch();
      }
    } else if (e.key === 'Escape') {
      hideBookmarkSearchResults();
      elements.searchInput.blur();
    }
  }

  // 更新文件夹选择下拉框
  function updateFolderSelect(selectedFolderId = null) {
    elements.shortcutFolder.innerHTML = '<option value="">无（根目录）</option>';
    // 根据当前模式过滤文件夹：隐私模式只显示隐私文件夹，普通模式只显示普通文件夹
    // 同时根据当前分区过滤
    const currentPartitionId = getCurrentPartitionId();
    const filteredFolders = state.folders.filter(f => 
      !!f.isPrivate === state.privateMode && 
      f.partitionId === currentPartitionId
    );
    filteredFolders.forEach(folder => {
      const option = document.createElement('option');
      option.value = folder.id;
      option.textContent = folder.name;
      if (selectedFolderId === folder.id) {
        option.selected = true;
      }
      elements.shortcutFolder.appendChild(option);
    });
  }

  // 应用设置
  function applySettings() {
    const settings = state.settings;

    // 确保有默认值
    if (!settings.iconSize) settings.iconSize = 57;
    if (!settings.folderSize) settings.folderSize = 65;
    if (!settings.iconGap) settings.iconGap = 15;
    if (!settings.folderGap) settings.folderGap = 20;
    if (!settings.btnRadius) settings.btnRadius = 12;

    // 应用背景
    applyBackground();

    // 应用圆角和大小
    document.documentElement.style.setProperty('--icon-size', settings.iconSize + 'px');
    document.documentElement.style.setProperty('--folder-size', settings.folderSize + 'px');
    document.documentElement.style.setProperty('--icon-gap', settings.iconGap + 'px');
    document.documentElement.style.setProperty('--folder-gap', settings.folderGap + 'px');
    document.documentElement.style.setProperty('--icon-radius', settings.iconRadius + 'px');
    document.documentElement.style.setProperty('--search-radius', settings.searchRadius + 'px');
    document.documentElement.style.setProperty('--btn-radius', settings.btnRadius + 'px');

    // 更新设置面板的值
    elements.bgType.value = settings.bgType;
    elements.gradientColor1.value = settings.gradientColor1;
    elements.gradientColor2.value = settings.gradientColor2;
    elements.gradientAngle.value = settings.gradientAngle;
    elements.gradientAngleValue.textContent = settings.gradientAngle + '°';
    elements.solidColor.value = settings.solidColor;
    elements.iconSize.value = settings.iconSize;
    elements.iconSizeValue.textContent = settings.iconSize + 'px';
    elements.folderSize.value = settings.folderSize;
    elements.folderSizeValue.textContent = settings.folderSize + 'px';
    elements.iconGap.value = settings.iconGap;
    elements.iconGapValue.textContent = settings.iconGap + 'px';
    elements.folderGap.value = settings.folderGap;
    elements.folderGapValue.textContent = settings.folderGap + 'px';
    elements.iconRadius.value = settings.iconRadius;
    elements.iconRadiusValue.textContent = settings.iconRadius + 'px';
    elements.searchRadius.value = settings.searchRadius;
    elements.searchRadiusValue.textContent = settings.searchRadius + 'px';
    elements.btnRadius.value = settings.btnRadius;
    elements.btnRadiusValue.textContent = settings.btnRadius + 'px';

    // 显示/隐藏背景设置
    updateBgTypeUI();

    // 显示背景图片预览
    if (settings.bgImage) {
      elements.bgImagePreview.style.backgroundImage = `url(${settings.bgImage})`;
    }
  }

  // 应用背景
  function applyBackground() {
    const settings = state.settings;
    switch (settings.bgType) {
      case 'gradient':
        elements.background.style.background = `linear-gradient(${settings.gradientAngle}deg, ${settings.gradientColor1} 0%, ${settings.gradientColor2} 100%)`;
        break;
      case 'solid':
        elements.background.style.background = settings.solidColor;
        break;
      case 'image':
        if (settings.bgImage) {
          elements.background.style.background = `url(${settings.bgImage})`;
          elements.background.style.backgroundSize = 'cover';
          elements.background.style.backgroundPosition = 'center';
        }
        break;
    }
  }

  // 更新背景类型UI
  function updateBgTypeUI() {
    const bgType = elements.bgType.value;
    elements.gradientSettings.style.display = bgType === 'gradient' ? 'block' : 'none';
    elements.solidSettings.style.display = bgType === 'solid' ? 'block' : 'none';
    elements.imageSettings.style.display = bgType === 'image' ? 'block' : 'none';
  }

  // 打开快捷方式弹窗
  function openShortcutModal(id = null) {
    state.editingShortcutId = id;
    updateFolderSelect();

    if (id) {
      const shortcut = state.shortcuts.find(s => s.id === id);
      if (shortcut) {
        elements.modalTitle.textContent = '编辑快捷方式';
        elements.shortcutName.value = shortcut.name;
        elements.shortcutUrl.value = shortcut.url;
        updateFolderSelect(shortcut.folderId);
      }
    } else {
      elements.modalTitle.textContent = '添加快捷方式';
      elements.shortcutName.value = '';
      elements.shortcutUrl.value = '';
    }
    elements.shortcutModal.classList.add('show');
  }

  // 关闭快捷方式弹窗
  function closeShortcutModal() {
    elements.shortcutModal.classList.remove('show');
    state.editingShortcutId = null;
  }

  // 保存快捷方式
  async function saveShortcut() {
    const name = elements.shortcutName.value.trim();
    let url = elements.shortcutUrl.value.trim();
    const folderId = elements.shortcutFolder.value ? parseInt(elements.shortcutFolder.value) : null;

    if (!name || !url) {
      showAlert('请填写名称和网址', 'error');
      return;
    }

    // 自动添加协议
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    if (state.editingShortcutId) {
      // 编辑
      const index = state.shortcuts.findIndex(s => s.id === state.editingShortcutId);
      if (index !== -1) {
        state.shortcuts[index].name = name;
        state.shortcuts[index].url = url;
        state.shortcuts[index].folderId = folderId;
        // 编辑时保持原有的隐私属性和分区
      }
    } else {
      // 添加
      const maxId = state.shortcuts.reduce((max, s) => Math.max(max, s.id), 0);
      state.shortcuts.push({
        id: maxId + 1,
        name,
        url,
        icon: '',
        folderId,
        partitionId: getCurrentPartitionId(), // 添加到当前分区
        isPrivate: state.privateMode // 根据当前模式决定是否为隐私书签
      });
    }

    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
    closeShortcutModal();
  }

  // 删除快捷方式
  async function deleteShortcut(id) {
    const confirmed = await showConfirm('确定要删除这个快捷方式吗？');
    if (!confirmed) return;

    state.shortcuts = state.shortcuts.filter(s => s.id !== id);
    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
    hideAllContextMenus();
  }

  // 打开文件夹弹窗
  function openFolderModal(id = null) {
    state.editingFolderId = id;

    if (id) {
      const folder = state.folders.find(f => f.id === id);
      if (folder) {
        elements.folderModalTitle.textContent = '编辑文件夹';
        elements.folderName.value = folder.name;
      }
    } else {
      elements.folderModalTitle.textContent = state.privateMode ? '添加隐私文件夹' : '添加文件夹';
      elements.folderName.value = '';
    }
    elements.folderModal.classList.add('show');
  }

  // 关闭文件夹弹窗
  function closeFolderModal() {
    elements.folderModal.classList.remove('show');
    state.editingFolderId = null;
  }

  // 保存文件夹
  async function saveFolder() {
    const name = elements.folderName.value.trim();

    if (!name) {
      showAlert('请填写文件夹名称', 'error');
      return;
    }

    const currentPartitionId = getCurrentPartitionId();
    const nameLower = name.toLowerCase();

    if (state.editingFolderId) {
      // 编辑 - 检查同名文件夹（排除自己，不区分大小写）
      const existingFolder = state.folders.find(f => 
        f.id !== state.editingFolderId &&
        f.name.toLowerCase() === nameLower && 
        f.partitionId === currentPartitionId &&
        !!f.isPrivate === state.privateMode
      );
      if (existingFolder) {
        showAlert('当前工作区已存在同名文件夹', 'error');
        return;
      }
      
      const index = state.folders.findIndex(f => f.id === state.editingFolderId);
      if (index !== -1) {
        state.folders[index].name = name;
      }
    } else {
      // 添加 - 检查当前工作区是否已存在同名文件夹（不区分大小写）
      const existingFolder = state.folders.find(f => 
        f.name.toLowerCase() === nameLower && 
        f.partitionId === currentPartitionId &&
        !!f.isPrivate === state.privateMode
      );
      if (existingFolder) {
        showAlert('当前工作区已存在同名文件夹', 'error');
        return;
      }
      
      // 根据当前模式自动设置隐私属性，并关联当前分区
      const maxId = state.folders.reduce((max, f) => Math.max(max, f.id), 0);
      state.folders.push({
        id: maxId + 1,
        name,
        collapsed: false,
        partitionId: currentPartitionId, // 添加到当前分区
        isPrivate: state.privateMode // 普通模式创建普通文件夹，隐私模式创建隐私文件夹
      });
    }

    await Storage.set('folders', state.folders);
    renderShortcuts();
    closeFolderModal();
  }

  // 删除文件夹
  async function deleteFolder(id) {
    const folder = state.folders.find(f => f.id === id);
    const shortcutsInFolder = state.shortcuts.filter(s => s.folderId === id);

    let confirmMsg = `确定要删除文件夹"${folder.name}"吗？`;
    if (shortcutsInFolder.length > 0) {
      confirmMsg += `\n该文件夹中有 ${shortcutsInFolder.length} 个快捷方式，它们将被一并删除。`;
    }

    const confirmed = await showConfirm(confirmMsg);
    if (!confirmed) return;

    // 删除文件夹中的所有快捷方式
    state.shortcuts = state.shortcuts.filter(s => s.folderId !== id);

    // 删除文件夹
    state.folders = state.folders.filter(f => f.id !== id);

    await Storage.set('folders', state.folders);
    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
    hideAllContextMenus();
  }

  // 打开搜索引擎弹窗
  function openEngineModal(id = null) {
    state.editingEngineId = id;
    if (id) {
      const engine = state.searchEngines.find(e => e.id === id);
      if (engine) {
        elements.engineModalTitle.textContent = '编辑搜索引擎';
        elements.engineName.value = engine.name;
        elements.engineUrl.value = engine.url;
        elements.engineIcon.value = engine.icon;
      }
    } else {
      elements.engineModalTitle.textContent = '添加搜索引擎';
      elements.engineName.value = '';
      elements.engineUrl.value = '';
      elements.engineIcon.value = '';
    }
    elements.engineModal.classList.add('show');
  }

  // 关闭搜索引擎弹窗
  function closeEngineModal() {
    elements.engineModal.classList.remove('show');
    state.editingEngineId = null;
  }

  // 保存搜索引擎
  async function saveEngine() {
    const name = elements.engineName.value.trim();
    const url = elements.engineUrl.value.trim();
    const icon = elements.engineIcon.value.trim();

    if (!name || !url) {
      showAlert('请填写名称和搜索URL', 'error');
      return;
    }

    if (!url.includes('%s')) {
      showAlert('搜索URL必须包含 %s 作为搜索关键词占位符', 'error');
      return;
    }

    if (state.editingEngineId) {
      // 编辑
      const index = state.searchEngines.findIndex(e => e.id === state.editingEngineId);
      if (index !== -1) {
        state.searchEngines[index].name = name;
        state.searchEngines[index].url = url;
        state.searchEngines[index].icon = icon;
      }
    } else {
      // 添加
      const maxId = state.searchEngines.reduce((max, e) => Math.max(max, e.id), 0);
      state.searchEngines.push({
        id: maxId + 1,
        name,
        url,
        icon
      });
    }

    await Storage.set('searchEngines', state.searchEngines);
    renderEngines();
    renderEngineSelector();
    closeEngineModal();
  }

  // 删除搜索引擎
  async function deleteEngine(id) {
    if (state.searchEngines.length <= 1) {
      showAlert('至少保留一个搜索引擎', 'error');
      return;
    }

    const confirmed = await showConfirm('确定要删除这个搜索引擎吗？');
    if (!confirmed) return;

    state.searchEngines = state.searchEngines.filter(e => e.id !== id);
    
    // 如果删除的是当前选中的引擎，切换到第一个
    if (state.currentEngine === id) {
      state.currentEngine = state.searchEngines[0].id;
      await Storage.set('currentEngine', state.currentEngine);
    }

    await Storage.set('searchEngines', state.searchEngines);
    renderEngines();
    renderEngineSelector();
  }

  // 解析书签HTML文件
  function parseBookmarks(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bookmarks = [];

    function extractLinks(element, folder = '') {
      const links = element.querySelectorAll(':scope > dt > a');
      links.forEach(link => {
        bookmarks.push({
          name: link.textContent.trim(),
          url: link.href,
          folder: folder
        });
      });

      // 处理文件夹
      const folders = element.querySelectorAll(':scope > dt > h3');
      folders.forEach(h3 => {
        const folderName = h3.textContent.trim();
        const dl = h3.parentElement.querySelector('dl');
        if (dl) {
          extractLinks(dl, folderName);
        }
      });
    }

    const rootDl = doc.querySelector('dl');
    if (rootDl) {
      extractLinks(rootDl);
    }

    return bookmarks;
  }

  // 显示书签导入预览
  function showImportPreview(bookmarks) {
    const importActions = $('#importActions');
    
    if (bookmarks.length === 0) {
      elements.importPreview.innerHTML = '<p>未找到书签</p>';
      if (importActions) importActions.style.display = 'none';
      return;
    }

    let html = `<p>找到 ${bookmarks.length} 个书签</p>`;
    
    // 按文件夹分组
    const grouped = {};
    bookmarks.forEach((b, index) => {
      const folder = b.folder || '根目录';
      if (!grouped[folder]) grouped[folder] = [];
      grouped[folder].push({ ...b, index });
    });

    for (const folder in grouped) {
      html += `<div class="import-folder">${folder}</div>`;
      grouped[folder].forEach(b => {
        html += `
          <div class="import-item">
            <input type="checkbox" id="bookmark-${b.index}" checked data-index="${b.index}" data-folder="${b.folder || ''}">
            <label for="bookmark-${b.index}">${b.name}</label>
          </div>
        `;
      });
    }

    elements.importPreview.innerHTML = html;

    // 存储书签数据
    elements.importPreview.bookmarksData = bookmarks;

    // 显示按钮区域
    if (importActions) {
      importActions.style.display = 'flex';
    }
  }

  // 导入选中的书签
  async function importSelectedBookmarks() {
    const bookmarks = elements.importPreview.bookmarksData;
    const checkboxes = elements.importPreview.querySelectorAll('input[type="checkbox"]:checked');
    
    // 收集需要创建的文件夹
    const folderNames = new Set();
    checkboxes.forEach(cb => {
      const folderName = cb.dataset.folder;
      if (folderName) {
        folderNames.add(folderName);
      }
    });

    // 创建文件夹映射
    const folderMap = {};
    let maxFolderId = state.folders.reduce((max, f) => Math.max(max, f.id), 0);
    
    folderNames.forEach(name => {
      // 检查是否已存在同名文件夹
      const existingFolder = state.folders.find(f => f.name === name);
      if (existingFolder) {
        folderMap[name] = existingFolder.id;
      } else {
        maxFolderId++;
        state.folders.push({
          id: maxFolderId,
          name: name,
          collapsed: false
        });
        folderMap[name] = maxFolderId;
      }
    });

    // 添加快捷方式
    let maxId = state.shortcuts.reduce((max, s) => Math.max(max, s.id), 0);
    checkboxes.forEach(cb => {
      const index = parseInt(cb.dataset.index);
      const bookmark = bookmarks[index];
      const folderName = cb.dataset.folder;
      maxId++;
      state.shortcuts.push({
        id: maxId,
        name: bookmark.name,
        url: bookmark.url,
        icon: '',
        folderId: folderName ? folderMap[folderName] : null
      });
    });

    await Storage.set('folders', state.folders);
    await Storage.set('shortcuts', state.shortcuts);
    renderShortcuts();
    elements.importPreview.innerHTML = `<p>成功导入 ${checkboxes.length} 个书签</p>`;
    
    // 隐藏按钮区域
    const importActions = $('#importActions');
    if (importActions) {
      importActions.style.display = 'none';
    }
    
    setTimeout(() => {
      elements.importPreview.innerHTML = '';
    }, 3000);
  }

  // 导出所有设置
  async function exportAllData() {
    // 重新从 Storage 加载最新数据，确保多标签页场景下数据是最新的
    const latestData = await Storage.getAll();
    state.partitions = latestData.partitions || state.partitions;
    state.folders = latestData.folders || state.folders;
    state.shortcuts = latestData.shortcuts || state.shortcuts;
    state.searchEngines = latestData.searchEngines || state.searchEngines;
    state.currentEngine = latestData.currentEngine || state.currentEngine;
    state.settings = latestData.settings || state.settings;
    state.currentPartition = latestData.currentPartition || state.currentPartition;
    state.currentPrivatePartition = latestData.currentPrivatePartition || state.currentPrivatePartition;

    // 获取密码数据
    const passwords = await PasswordManager.getAll();
    
    // 如果有密码数据，询问是否加密
    let exportPasswords = passwords;
    let isEncrypted = false;
    
    if (passwords && passwords.length > 0) {
      // 使用三选项：加密导出、不加密导出、取消
      const choice = await showExportChoice();
      
      if (choice === 'cancel') {
        return; // 用户取消
      }
      
      if (choice === 'encrypt') {
        try {
          const encryptKey = await showEncryptKeyModal('export');
          if (!encryptKey) {
            return; // 用户取消输入密钥
          }
          // 加密密码数据
          exportPasswords = await encryptPasswords(passwords, encryptKey);
          isEncrypted = true;
        } catch (e) {
          if (e === 'cancelled') {
            return;
          }
          showAlert('加密失败: ' + e.message, 'error');
          return;
        }
      }
      // choice === 'plain' 时直接使用原始密码数据
    }
    
    const data = {
      version: '2.0',
      exportDate: new Date().toISOString(),
      passwordsEncrypted: isEncrypted,
      data: {
        folders: state.folders,
        shortcuts: state.shortcuts,
        searchEngines: state.searchEngines,
        currentEngine: state.currentEngine,
        settings: state.settings,
        partitions: state.partitions,
        currentPartition: state.currentPartition,
        currentPrivatePartition: state.currentPrivatePartition,
        passwords: exportPasswords
      }
    };

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const timeStr = `${String(date.getHours()).padStart(2, '0')}-${String(date.getMinutes()).padStart(2, '0')}`;
    a.download = `导航页备份-${dateStr}-${timeStr}${isEncrypted ? '-加密' : ''}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showAlert(isEncrypted ? '备份导出成功！（密码已加密）' : '备份导出成功！', 'success');
  }

  // 临时存储待导入的备份数据
  let pendingBackupData = null;

  // 显示备份预览弹窗
  async function showBackupPreview(file) {
    try {
      const text = await file.text();
      const rawData = JSON.parse(text);

      // 兼容新旧格式
      let data;
      let version = '1.0';
      let exportDate = null;
      let passwordsEncrypted = false;
      
      if (rawData.data) {
        // 新格式 v2.0
        data = rawData.data;
        version = rawData.version || '2.0';
        exportDate = rawData.exportDate;
        passwordsEncrypted = rawData.passwordsEncrypted || false;
      } else if (rawData.folders && rawData.shortcuts) {
        // 旧格式 v1.0
        data = rawData;
      } else {
        throw new Error('无效的备份文件格式');
      }

      // 验证必要数据
      if (!data.folders || !Array.isArray(data.folders)) {
        throw new Error('备份文件中缺少文件夹数据');
      }
      if (!data.shortcuts || !Array.isArray(data.shortcuts)) {
        throw new Error('备份文件中缺少书签数据');
      }

      // 存储待导入数据（包含加密标记）
      pendingBackupData = data;
      pendingBackupData._passwordsEncrypted = passwordsEncrypted;

      // 统计信息
      const partitionCount = data.partitions?.length || 1;
      const folderCount = data.folders.length;
      const shortcutCount = data.shortcuts.length;
      const engineCount = data.searchEngines?.length || 0;
      const passwordCount = data.passwords?.length || 0;
      const hasSettings = data.settings ? true : false;

      // 渲染备份信息
      let infoHtml = `
        <div class="backup-info-row">
          <span class="label">备份版本</span>
          <span class="value">v${version}</span>
        </div>
        <div class="backup-info-row">
          <span class="label">备份时间</span>
          <span class="value">${exportDate ? new Date(exportDate).toLocaleString('zh-CN') : '未知'}</span>
        </div>
        <div class="backup-info-row">
          <span class="label">分区数量</span>
          <span class="value highlight">${partitionCount} 个</span>
        </div>
        <div class="backup-info-row">
          <span class="label">文件夹数量</span>
          <span class="value highlight">${folderCount} 个</span>
        </div>
        <div class="backup-info-row">
          <span class="label">书签数量</span>
          <span class="value highlight">${shortcutCount} 个</span>
        </div>
        <div class="backup-info-row">
          <span class="label">搜索引擎</span>
          <span class="value">${engineCount} 个</span>
        </div>
        <div class="backup-info-row">
          <span class="label">密码数量</span>
          <span class="value highlight">${passwordCount} 个${passwordsEncrypted ? ' <span style="color: #4a9eff; font-size: 12px;">(已加密)</span>' : ''}</span>
        </div>
        <div class="backup-info-row">
          <span class="label">外观设置</span>
          <span class="value">${hasSettings ? '包含' : '不包含'}</span>
        </div>
      `;
      elements.backupInfo.innerHTML = infoHtml;

      // 渲染数据预览树
      let treeHtml = '';

      // 分区预览
      if (data.partitions && data.partitions.length > 0) {
        treeHtml += `
          <div class="backup-tree-section">
            <div class="backup-tree-title">
              <svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
              分区
              <span class="count">${data.partitions.length}</span>
            </div>
            <div class="backup-tree-items">
              ${data.partitions.slice(0, 5).map(p => `
                <div class="backup-tree-item">
                  <span class="item-name">${p.name}</span>
                </div>
              `).join('')}
              ${data.partitions.length > 5 ? `<div class="backup-tree-more">还有 ${data.partitions.length - 5} 个分区...</div>` : ''}
            </div>
          </div>
        `;
      }

      // 文件夹预览
      if (data.folders.length > 0) {
        treeHtml += `
          <div class="backup-tree-section">
            <div class="backup-tree-title">
              <svg viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
              文件夹
              <span class="count">${data.folders.length}</span>
            </div>
            <div class="backup-tree-items">
              ${data.folders.slice(0, 5).map(f => {
                const folderShortcuts = data.shortcuts.filter(s => s.folderId === f.id);
                return `
                  <div class="backup-tree-item">
                    <span class="item-name">${f.name}</span>
                    <span class="item-count">${folderShortcuts.length} 个书签</span>
                  </div>
                `;
              }).join('')}
              ${data.folders.length > 5 ? `<div class="backup-tree-more">还有 ${data.folders.length - 5} 个文件夹...</div>` : ''}
            </div>
          </div>
        `;
      }

      // 书签预览（根目录书签）
      const rootShortcuts = data.shortcuts.filter(s => !s.folderId);
      if (rootShortcuts.length > 0) {
        treeHtml += `
          <div class="backup-tree-section">
            <div class="backup-tree-title">
              <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
              根目录书签
              <span class="count">${rootShortcuts.length}</span>
            </div>
            <div class="backup-tree-items">
              ${rootShortcuts.slice(0, 5).map(s => `
                <div class="backup-tree-item">
                  <img src="${getFaviconUrl(s.url)}" class="backup-favicon">
                  <span class="item-name">${s.name}</span>
                </div>
              `).join('')}
              ${rootShortcuts.length > 5 ? `<div class="backup-tree-more">还有 ${rootShortcuts.length - 5} 个书签...</div>` : ''}
            </div>
          </div>
        `;
      }

      elements.backupPreviewTree.innerHTML = treeHtml;

      // 为备份预览中的 favicon 添加错误处理（使用默认图标）
      elements.backupPreviewTree.querySelectorAll('.backup-favicon').forEach(img => {
        img.addEventListener('error', () => {
          img.src = DEFAULT_ICON_SVG;
        });
      });

      // 显示弹窗
      elements.backupPreviewModal.classList.add('show');

    } catch (e) {
      console.error('解析备份文件失败:', e);
      showAlert('备份文件解析失败：' + e.message, 'error');
    }
  }

  // 关闭备份预览弹窗
  function closeBackupPreviewModal() {
    elements.backupPreviewModal.classList.remove('show');
    pendingBackupData = null;
  }

  // 确认导入备份
  async function confirmBackupImport() {
    if (!pendingBackupData) return;

    const data = pendingBackupData;
    const importMode = document.querySelector('input[name="importMode"]:checked').value;

    try {
      // 检查密码是否加密，需要解密
      if (data._passwordsEncrypted && data.passwords && data.passwords.length > 0) {
        try {
          const decryptKey = await showEncryptKeyModal('import');
          if (!decryptKey) {
            return; // 用户取消
          }
          // 解密密码数据
          const decryptedPasswords = await decryptPasswords(data.passwords, decryptKey);
          if (decryptedPasswords === null) {
            showAlert('解密失败，密钥可能不正确', 'error');
            return;
          }
          data.passwords = decryptedPasswords;
        } catch (e) {
          if (e === 'cancelled') {
            return;
          }
          showAlert('解密失败: ' + e.message, 'error');
          return;
        }
      }

      if (importMode === 'replace') {
        // 完全替换模式
        await importDataReplace(data);
      } else {
        // 智能合并模式
        await importDataMerge(data);
      }

      closeBackupPreviewModal();
      
      // 应用设置和重新渲染
      applySettings();
      applyBackground();
      renderShortcuts();
      renderEngines();
      renderEngineSelector();

      showAlert('导入成功！', 'success');
    } catch (e) {
      console.error('导入失败:', e);
      showAlert('导入失败：' + e.message, 'error');
    }
  }

  // 完全替换模式导入
  async function importDataReplace(data) {
    // 导入分区
    if (data.partitions && Array.isArray(data.partitions) && data.partitions.length > 0) {
      state.partitions = data.partitions;
      await Storage.set('partitions', state.partitions);
    }
    if (data.currentPartition) {
      state.currentPartition = data.currentPartition;
      await Storage.set('currentPartition', state.currentPartition);
    }
    if (data.currentPrivatePartition) {
      state.currentPrivatePartition = data.currentPrivatePartition;
      await Storage.set('currentPrivatePartition', state.currentPrivatePartition);
    }
    
    // 确保两个区域都有默认工作区
    ensureDefaultPartitions();

    // 导入文件夹
    state.folders = data.folders;
    await Storage.set('folders', state.folders);

    // 导入书签
    state.shortcuts = data.shortcuts;
    await Storage.set('shortcuts', state.shortcuts);

    // 导入搜索引擎（如果有）
    if (data.searchEngines && Array.isArray(data.searchEngines) && data.searchEngines.length > 0) {
      state.searchEngines = data.searchEngines;
      await Storage.set('searchEngines', state.searchEngines);
    }

    // 导入当前搜索引擎选择
    if (data.currentEngine) {
      state.currentEngine = data.currentEngine;
      await Storage.set('currentEngine', state.currentEngine);
    }

    // 导入设置（如果有）
    if (data.settings && typeof data.settings === 'object') {
      state.settings = {
        bgType: data.settings.bgType || 'gradient',
        gradientColor1: data.settings.gradientColor1 || '#667eea',
        gradientColor2: data.settings.gradientColor2 || '#764ba2',
        gradientAngle: data.settings.gradientAngle ?? 135,
        solidColor: data.settings.solidColor || '#1a1a2e',
        bgImage: data.settings.bgImage || '',
        iconSize: data.settings.iconSize ?? 57,
        folderSize: data.settings.folderSize ?? 65,
        iconGap: data.settings.iconGap ?? 15,
        folderGap: data.settings.folderGap ?? 20,
        iconRadius: data.settings.iconRadius ?? 11,
        searchRadius: data.settings.searchRadius ?? 16,
        btnRadius: data.settings.btnRadius ?? 12
      };
      await Storage.set('settings', state.settings);
    }

    // 导入密码（如果有）
    if (data.passwords && Array.isArray(data.passwords)) {
      await PasswordManager.saveAll(data.passwords);
    }
  }

  // 智能合并模式导入
  async function importDataMerge(data) {
    // 确保 state.partitions 已初始化
    if (!state.partitions || !Array.isArray(state.partitions)) {
      state.partitions = [{ id: 1, name: 'Home', order: 0 }];
    }
    
    // 合并分区（按名称去重）
    if (data.partitions && Array.isArray(data.partitions)) {
      const existingNames = new Set(state.partitions.map(p => p.name));
      let maxId = state.partitions.reduce((max, p) => Math.max(max, parseInt(p.id) || 0), 0);
      const partitionIdMap = {}; // 旧ID -> 新ID映射
      
      for (const partition of data.partitions) {
        if (!existingNames.has(partition.name)) {
          maxId++;
          const newPartition = { ...partition, id: String(maxId) };
          partitionIdMap[partition.id] = String(maxId);
          state.partitions.push(newPartition);
          existingNames.add(partition.name);
        } else {
          // 找到已存在的分区ID
          const existing = state.partitions.find(p => p.name === partition.name);
          partitionIdMap[partition.id] = existing.id;
        }
      }
      await Storage.set('partitions', state.partitions);
      
      // 更新文件夹的分区ID引用
      data.folders = data.folders.map(f => ({
        ...f,
        partitionId: f.partitionId ? partitionIdMap[f.partitionId] || f.partitionId : f.partitionId
      }));
    }

    // 合并文件夹（按名称+分区去重）
    const existingFolderKeys = new Set(state.folders.map(f => `${f.name}_${f.partitionId || ''}`));
    let maxFolderId = state.folders.reduce((max, f) => Math.max(max, f.id), 0);
    const folderIdMap = {}; // 旧ID -> 新ID映射

    for (const folder of data.folders) {
      const key = `${folder.name}_${folder.partitionId || ''}`;
      if (!existingFolderKeys.has(key)) {
        maxFolderId++;
        const newFolder = { ...folder, id: maxFolderId };
        folderIdMap[folder.id] = maxFolderId;
        state.folders.push(newFolder);
        existingFolderKeys.add(key);
      } else {
        // 找到已存在的文件夹ID
        const existing = state.folders.find(f => `${f.name}_${f.partitionId || ''}` === key);
        folderIdMap[folder.id] = existing.id;
      }
    }
    await Storage.set('folders', state.folders);

    // 合并书签（按URL去重）
    const existingUrls = new Set(state.shortcuts.map(s => s.url));
    let maxShortcutId = state.shortcuts.reduce((max, s) => Math.max(max, s.id), 0);

    for (const shortcut of data.shortcuts) {
      if (!existingUrls.has(shortcut.url)) {
        maxShortcutId++;
        const newShortcut = {
          ...shortcut,
          id: maxShortcutId,
          folderId: shortcut.folderId ? folderIdMap[shortcut.folderId] || shortcut.folderId : null
        };
        state.shortcuts.push(newShortcut);
        existingUrls.add(shortcut.url);
      }
    }
    await Storage.set('shortcuts', state.shortcuts);

    // 合并搜索引擎（按URL去重）
    if (data.searchEngines && Array.isArray(data.searchEngines)) {
      const existingEngineUrls = new Set(state.searchEngines.map(e => e.url));
      let maxEngineId = state.searchEngines.reduce((max, e) => Math.max(max, e.id), 0);

      for (const engine of data.searchEngines) {
        if (!existingEngineUrls.has(engine.url)) {
          maxEngineId++;
          state.searchEngines.push({ ...engine, id: maxEngineId });
          existingEngineUrls.add(engine.url);
        }
      }
      await Storage.set('searchEngines', state.searchEngines);
    }

    // 合并密码（按URL+用户名去重）
    if (data.passwords && Array.isArray(data.passwords)) {
      const existingPasswords = await PasswordManager.getAll();
      const existingKeys = new Set(existingPasswords.map(p => `${p.url}_${p.username}`));
      let maxPwdId = existingPasswords.reduce((max, p) => Math.max(max, p.id || 0), 0);

      for (const pwd of data.passwords) {
        const key = `${pwd.url}_${pwd.username}`;
        if (!existingKeys.has(key)) {
          maxPwdId++;
          existingPasswords.push({ ...pwd, id: maxPwdId });
          existingKeys.add(key);
        }
      }
      await PasswordManager.saveAll(existingPasswords);
    }

    // 设置不合并，保留当前设置
  }

  // 保留旧函数以兼容（内部调用）
  async function importAllData(file) {
    await showBackupPreview(file);
  }

  // ========== 多选模式相关函数 ==========

  // 进入多选模式
  function enterMultiSelectMode() {
    state.multiSelectMode = true;
    state.selectedShortcuts.clear();
    document.body.classList.add('multi-select-mode');
    elements.multiSelectBar.classList.add('show');
    updateSelectedCount();
  }

  // 退出多选模式
  function exitMultiSelectMode() {
    state.multiSelectMode = false;
    state.selectedShortcuts.clear();
    document.body.classList.remove('multi-select-mode');
    elements.multiSelectBar.classList.remove('show');
    // 移除所有选中状态
    $$('.shortcut-item.selected').forEach(item => item.classList.remove('selected'));
  }

  // 切换书签选中状态
  function toggleShortcutSelection(id, element) {
    if (state.selectedShortcuts.has(id)) {
      state.selectedShortcuts.delete(id);
      element.classList.remove('selected');
    } else {
      state.selectedShortcuts.add(id);
      element.classList.add('selected');
    }
    updateSelectedCount();
  }

  // 更新选中数量显示
  function updateSelectedCount() {
    elements.selectedCount.textContent = state.selectedShortcuts.size;
  }

  // 全选所有书签
  function selectAllShortcuts() {
    state.shortcuts.forEach(s => state.selectedShortcuts.add(s.id));
    $$('.shortcut-item').forEach(item => item.classList.add('selected'));
    updateSelectedCount();
  }

  // 取消全选
  function deselectAllShortcuts() {
    state.selectedShortcuts.clear();
    $$('.shortcut-item.selected').forEach(item => item.classList.remove('selected'));
    updateSelectedCount();
  }

  // 删除选中的书签
  async function deleteSelectedShortcuts() {
    const count = state.selectedShortcuts.size;
    if (count === 0) {
      showAlert('请先选择要删除的书签', 'error');
      return;
    }

    const confirmed = await showConfirm(`确定要删除选中的 ${count} 个书签吗？`);
    if (!confirmed) return;

    // 删除选中的书签
    state.shortcuts = state.shortcuts.filter(s => !state.selectedShortcuts.has(s.id));
    await Storage.set('shortcuts', state.shortcuts);

    // 退出多选模式并刷新
    exitMultiSelectMode();
    renderShortcuts();
  }

  // 切换隐私模式（无任何视觉提示）
  function togglePrivateMode() {
    state.privateMode = !state.privateMode;
    renderShortcuts();
  }

  // 绑定事件
  function bindEvents() {
    // 双击星期切换隐私模式（无任何视觉变化）
    elements.weekday.addEventListener('dblclick', (e) => {
      e.preventDefault();
      togglePrivateMode();
    });

    // 搜索相关
    elements.engineSelector.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEngineDropdown();
    });

    elements.searchInput.addEventListener('keypress', (e) => {
      // keypress 不再处理 Enter，由 keydown 统一处理
    });

    // 搜索输入框实时书签搜索
    elements.searchInput.addEventListener('input', handleSearchInput);

    // 搜索输入框键盘导航
    elements.searchInput.addEventListener('keydown', handleSearchKeydown);

    // 搜索输入框失焦时隐藏下拉菜单（延迟以允许点击）
    elements.searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        hideBookmarkSearchResults();
      }, 200);
    });

    elements.searchBtn.addEventListener('click', doSearch);

    // 书签搜索（如果元素存在）
    if (elements.bookmarkSearchInput) {
      elements.bookmarkSearchInput.addEventListener('input', (e) => {
        state.bookmarkSearchQuery = e.target.value.trim();
        elements.bookmarkSearchClear.style.display = state.bookmarkSearchQuery ? 'flex' : 'none';
        renderShortcuts();
      });
    }

    if (elements.bookmarkSearchClear) {
      elements.bookmarkSearchClear.addEventListener('click', () => {
        state.bookmarkSearchQuery = '';
        elements.bookmarkSearchInput.value = '';
        elements.bookmarkSearchClear.style.display = 'none';
        renderShortcuts();
      });
    }

    // 点击其他地方关闭下拉菜单和右键菜单
    document.addEventListener('click', (e) => {
      if (!elements.engineDropdown.contains(e.target) && !elements.engineSelector.contains(e.target)) {
        toggleEngineDropdown(false);
      }
      if (!elements.contextMenu.contains(e.target) && !elements.folderContextMenu.contains(e.target)) {
        hideAllContextMenus();
      }
      // 关闭添加菜单
      if (!elements.addMenuDropdown.contains(e.target) && !elements.addMenuBtn.contains(e.target)) {
        elements.addMenuDropdown.classList.remove('show');
      }
      // 关闭书签搜索下拉菜单
      if (elements.bookmarkSearchResults && 
          !elements.bookmarkSearchResults.contains(e.target) && 
          !elements.searchInput.contains(e.target)) {
        hideBookmarkSearchResults();
      }
    });

    // 全局拖拽结束监听（防止元素被移除后 dragend 不触发）
    document.addEventListener('dragend', () => {
      document.body.classList.remove('is-dragging');
      state.draggingFromFolderId = null;
      document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    });

    // 设置面板
    elements.settingsBtn.addEventListener('click', () => {
      elements.settingsPanel.classList.add('show');
    });

    elements.closeSettingsBtn.addEventListener('click', () => {
      elements.settingsPanel.classList.remove('show');
    });

    // 添加菜单
    elements.addMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.addMenuDropdown.classList.toggle('show');
    });

    // 设置选项卡
    $$('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.tab-btn').forEach(b => b.classList.remove('active'));
        $$('.settings-tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        $(`#tab-${btn.dataset.tab}`).classList.add('active');
      });
    });

    // 快捷方式相关
    elements.addShortcutBtn.addEventListener('click', () => {
      elements.addMenuDropdown.classList.remove('show');
      openShortcutModal();
    });
    elements.closeModalBtn.addEventListener('click', closeShortcutModal);
    elements.cancelShortcutBtn.addEventListener('click', closeShortcutModal);
    elements.saveShortcutBtn.addEventListener('click', saveShortcut);

    // 多选模式
    elements.multiSelectBtn.addEventListener('click', enterMultiSelectMode);
    elements.exitMultiSelectBtn.addEventListener('click', exitMultiSelectMode);
    elements.selectAllBtn.addEventListener('click', selectAllShortcuts);
    elements.deselectAllBtn.addEventListener('click', deselectAllShortcuts);
    elements.deleteSelectedBtn.addEventListener('click', deleteSelectedShortcuts);

    // 文件夹相关
    elements.addFolderBtn.addEventListener('click', () => {
      elements.addMenuDropdown.classList.remove('show');
      openFolderModal();
    });
    elements.closeFolderModalBtn.addEventListener('click', closeFolderModal);
    elements.cancelFolderBtn.addEventListener('click', closeFolderModal);
    elements.saveFolderBtn.addEventListener('click', saveFolder);

    // 分区相关
    elements.addPartitionBtn.addEventListener('click', () => {
      elements.addMenuDropdown.classList.remove('show');
      openPartitionModal();
    });
    elements.closePartitionModalBtn.addEventListener('click', closePartitionModal);
    elements.cancelPartitionBtn.addEventListener('click', closePartitionModal);
    elements.savePartitionBtn.addEventListener('click', savePartition);
    
    // 分区右键菜单
    elements.editPartition.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.partitionContextMenu.classList.remove('show');
      if (state.partitionContextMenuTargetId) {
        const partition = state.partitions.find(p => p.id === state.partitionContextMenuTargetId);
        if (partition) {
          openPartitionModal(partition);
        }
      }
    });
    elements.deletePartition.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.partitionContextMenu.classList.remove('show');
      if (state.partitionContextMenuTargetId) {
        deletePartition(state.partitionContextMenuTargetId);
      }
    });

    // 文件夹弹窗关闭
    elements.closeFolderPopupBtn.addEventListener('click', closeFolderPopup);
    elements.folderPopupOverlay.addEventListener('click', (e) => {
      if (e.target === elements.folderPopupOverlay) {
        closeFolderPopup();
      }
    });

    // 快捷方式右键菜单
    elements.pinShortcut.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.contextMenuTargetId) {
        togglePinShortcut(state.contextMenuTargetId);
      }
    });

    elements.editShortcut.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止冒泡，防止触发document的click事件
      if (state.contextMenuTargetId) {
        const shortcutId = state.contextMenuTargetId;
        hideAllContextMenus();
        openShortcutModal(shortcutId);
      }
    });

    elements.deleteShortcut.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止冒泡，防止触发document的click事件
      if (state.contextMenuTargetId) {
        deleteShortcut(state.contextMenuTargetId);
      }
    });

    // 文件夹右键菜单
    elements.editFolder.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止冒泡，防止触发document的click事件
      if (state.folderContextMenuTargetId) {
        const folderId = state.folderContextMenuTargetId;
        hideAllContextMenus();
        openFolderModal(folderId);
      }
    });

    elements.deleteFolder.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止冒泡，防止触发document的click事件
      if (state.folderContextMenuTargetId) {
        deleteFolder(state.folderContextMenuTargetId);
      }
    });

    // 搜索引擎相关
    elements.addEngineBtn.addEventListener('click', () => openEngineModal());
    elements.closeEngineModalBtn.addEventListener('click', closeEngineModal);
    elements.cancelEngineBtn.addEventListener('click', closeEngineModal);
    elements.saveEngineBtn.addEventListener('click', saveEngine);

    // 背景设置
    elements.bgType.addEventListener('change', async () => {
      state.settings.bgType = elements.bgType.value;
      updateBgTypeUI();
      applyBackground();
      await Storage.set('settings', state.settings);
    });

    elements.gradientColor1.addEventListener('input', async () => {
      state.settings.gradientColor1 = elements.gradientColor1.value;
      applyBackground();
      await Storage.set('settings', state.settings);
    });

    elements.gradientColor2.addEventListener('input', async () => {
      state.settings.gradientColor2 = elements.gradientColor2.value;
      applyBackground();
      await Storage.set('settings', state.settings);
    });

    elements.gradientAngle.addEventListener('input', async () => {
      state.settings.gradientAngle = parseInt(elements.gradientAngle.value);
      elements.gradientAngleValue.textContent = elements.gradientAngle.value + '°';
      applyBackground();
      await Storage.set('settings', state.settings);
    });

    elements.solidColor.addEventListener('input', async () => {
      state.settings.solidColor = elements.solidColor.value;
      applyBackground();
      await Storage.set('settings', state.settings);
    });

    elements.bgImageInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', async (event) => {
          state.settings.bgImage = event.target.result;
          elements.bgImagePreview.style.backgroundImage = `url(${event.target.result})`;
          applyBackground();
          await Storage.set('settings', state.settings);
        });
        reader.readAsDataURL(file);
      }
    });

    // 外观设置
    elements.iconSize.addEventListener('input', async () => {
      state.settings.iconSize = parseInt(elements.iconSize.value);
      elements.iconSizeValue.textContent = elements.iconSize.value + 'px';
      document.documentElement.style.setProperty('--icon-size', elements.iconSize.value + 'px');
      await Storage.set('settings', state.settings);
    });

    elements.folderSize.addEventListener('input', async () => {
      state.settings.folderSize = parseInt(elements.folderSize.value);
      elements.folderSizeValue.textContent = elements.folderSize.value + 'px';
      document.documentElement.style.setProperty('--folder-size', elements.folderSize.value + 'px');
      await Storage.set('settings', state.settings);
    });

    elements.iconGap.addEventListener('input', async () => {
      state.settings.iconGap = parseInt(elements.iconGap.value);
      elements.iconGapValue.textContent = elements.iconGap.value + 'px';
      document.documentElement.style.setProperty('--icon-gap', elements.iconGap.value + 'px');
      await Storage.set('settings', state.settings);
    });

    elements.folderGap.addEventListener('input', async () => {
      state.settings.folderGap = parseInt(elements.folderGap.value);
      elements.folderGapValue.textContent = elements.folderGap.value + 'px';
      document.documentElement.style.setProperty('--folder-gap', elements.folderGap.value + 'px');
      await Storage.set('settings', state.settings);
    });

    elements.iconRadius.addEventListener('input', async () => {
      state.settings.iconRadius = parseInt(elements.iconRadius.value);
      elements.iconRadiusValue.textContent = elements.iconRadius.value + 'px';
      document.documentElement.style.setProperty('--icon-radius', elements.iconRadius.value + 'px');
      await Storage.set('settings', state.settings);
    });

    elements.searchRadius.addEventListener('input', async () => {
      state.settings.searchRadius = parseInt(elements.searchRadius.value);
      elements.searchRadiusValue.textContent = elements.searchRadius.value + 'px';
      document.documentElement.style.setProperty('--search-radius', elements.searchRadius.value + 'px');
      await Storage.set('settings', state.settings);
    });

    elements.btnRadius.addEventListener('input', async () => {
      state.settings.btnRadius = parseInt(elements.btnRadius.value);
      elements.btnRadiusValue.textContent = elements.btnRadius.value + 'px';
      document.documentElement.style.setProperty('--btn-radius', elements.btnRadius.value + 'px');
      await Storage.set('settings', state.settings);
    });

    // 书签导入
    elements.bookmarkFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          const bookmarks = parseBookmarks(event.target.result);
          showImportPreview(bookmarks);
        });
        reader.readAsText(file);
      }
    });

    // 书签导入按钮事件
    $('#selectAllBookmarks').addEventListener('click', () => {
      elements.importPreview.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
    });

    $('#deselectAllBookmarks').addEventListener('click', () => {
      elements.importPreview.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    });

    $('#importSelectedBookmarks').addEventListener('click', importSelectedBookmarks);

    // 备份导出
    elements.exportDataBtn.addEventListener('click', exportAllData);

    // 备份导入 - 显示预览
    elements.importDataInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        showBackupPreview(file);
        e.target.value = ''; // 清空以便再次选择同一文件
      }
    });

    // 备份预览弹窗事件
    elements.closeBackupPreviewBtn.addEventListener('click', closeBackupPreviewModal);
    elements.cancelBackupImportBtn.addEventListener('click', closeBackupPreviewModal);
    elements.exportCurrentBeforeImport.addEventListener('click', () => {
      exportAllData();
    });
    elements.confirmBackupImportBtn.addEventListener('click', confirmBackupImport);

    // 同步面板
    elements.syncBtn.addEventListener('click', () => {
      elements.syncPanel.classList.add('active');
      loadSyncConfig();
    });

    elements.closeSyncBtn.addEventListener('click', () => {
      elements.syncPanel.classList.remove('active');
    });

    elements.syncConnectBtn.addEventListener('click', connectSync);
    elements.syncDisconnectBtn.addEventListener('click', disconnectSync);
    elements.syncUploadBtn.addEventListener('click', uploadData);
    elements.syncDownloadBtn.addEventListener('click', downloadData);
    elements.syncRefreshBtn.addEventListener('click', loadBackupList);

    // 加密密钥弹窗事件
    elements.closeEncryptKeyBtn.addEventListener('click', () => {
      const rejectFunc = state.encryptKeyReject;
      hideEncryptKeyModal();
      if (rejectFunc) rejectFunc('cancelled');
    });
    
    elements.cancelEncryptKey.addEventListener('click', () => {
      const rejectFunc = state.encryptKeyReject;
      hideEncryptKeyModal();
      if (rejectFunc) rejectFunc('cancelled');
    });
    
    elements.confirmEncryptKey.addEventListener('click', () => {
      const key = elements.encryptKeyInput.value;
      const confirmKey = elements.encryptKeyConfirm.value;
      const confirmFormGroup = elements.encryptKeyConfirm.closest('.form-group');
      const isDecryptMode = confirmFormGroup && confirmFormGroup.style.display === 'none';
      
      if (!key) {
        elements.encryptKeyError.textContent = '请输入密钥';
        elements.encryptKeyError.style.display = 'block';
        return;
      }
      
      if (key.length < 6) {
        elements.encryptKeyError.textContent = '密钥长度至少6位';
        elements.encryptKeyError.style.display = 'block';
        return;
      }
      
      // 加密模式需要验证两次输入一致
      if (!isDecryptMode && key !== confirmKey) {
        elements.encryptKeyError.textContent = '两次输入的密钥不一致';
        elements.encryptKeyError.style.display = 'block';
        return;
      }
      
      // 先保存 resolve 函数，再隐藏弹窗（隐藏会清空 resolve）
      const resolveFunc = state.encryptKeyResolve;
      hideEncryptKeyModal();
      if (resolveFunc) {
        resolveFunc(key);
      }
    });
    
    // 切换密钥可见性
    elements.toggleEncryptKey.addEventListener('click', () => {
      const input = elements.encryptKeyInput;
      input.type = input.type === 'password' ? 'text' : 'password';
    });
    
    elements.toggleEncryptKeyConfirm.addEventListener('click', () => {
      const input = elements.encryptKeyConfirm;
      input.type = input.type === 'password' ? 'text' : 'password';
    });
    
    // Enter 键确认
    elements.encryptKeyInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const isDecryptMode = elements.encryptKeyConfirm.parentElement.parentElement.style.display === 'none';
        if (isDecryptMode) {
          elements.confirmEncryptKey.click();
        } else {
          elements.encryptKeyConfirm.focus();
        }
      }
    });
    
    elements.encryptKeyConfirm.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        elements.confirmEncryptKey.click();
      }
    });

    // 页面右键菜单功能已禁用（新标签页场景下"添加当前页面到书签"没有意义）

    // 添加页面到书签弹窗事件
    elements.closeAddPageBookmarkBtn.addEventListener('click', closeAddPageBookmarkModal);
    elements.cancelAddPageBookmarkBtn.addEventListener('click', closeAddPageBookmarkModal);
    elements.saveAddPageBookmarkBtn.addEventListener('click', savePageBookmark);

    // 页面类型切换时更新工作区和文件夹列表
    document.querySelectorAll('input[name="pageBookmarkType"]').forEach(radio => {
      radio.addEventListener('change', () => {
        updatePageBookmarkSelectors();
      });
    });

    // 工作区切换时更新文件夹列表
    elements.pageBookmarkPartition.addEventListener('change', () => {
      updatePageBookmarkFolders();
    });

    // ESC关闭弹窗和面板
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeShortcutModal();
        closeFolderModal();
        closeEngineModal();
        closePartitionModal();
        closeBackupPreviewModal();
        closeAddPageBookmarkModal();
        closePasswordManager();
        closePasswordModal();
        closeAccessSetModal();
        closeAccessVerifyModal();
        exitMultiSelectMode();
        elements.settingsPanel.classList.remove('show');
        elements.syncPanel.classList.remove('active');
        hideAllContextMenus();
      }
    });

    // ========== 密码管理事件 ==========
    // 打开密码管理
    if (elements.passwordManagerBtn) {
      elements.passwordManagerBtn.addEventListener('click', openPasswordManager);
    }
    if (elements.closePasswordManagerBtn) {
      elements.closePasswordManagerBtn.addEventListener('click', closePasswordManager);
    }
    
    // 访问密码设置弹窗事件
    if (elements.pwdAccessSetClose) {
      elements.pwdAccessSetClose.addEventListener('click', closeAccessSetModal);
    }
    if (elements.pwdAccessSetCancel) {
      elements.pwdAccessSetCancel.addEventListener('click', closeAccessSetModal);
    }
    if (elements.pwdAccessSetSave) {
      elements.pwdAccessSetSave.addEventListener('click', saveAccessPassword);
    }
    if (elements.pwdAccessNew) {
      elements.pwdAccessNew.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') elements.pwdAccessConfirm?.focus();
      });
    }
    if (elements.pwdAccessConfirm) {
      elements.pwdAccessConfirm.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveAccessPassword();
      });
    }
    
    // 访问密码验证弹窗事件
    if (elements.pwdAccessVerifyClose) {
      elements.pwdAccessVerifyClose.addEventListener('click', closeAccessVerifyModal);
    }
    if (elements.pwdAccessVerifyCancel) {
      elements.pwdAccessVerifyCancel.addEventListener('click', closeAccessVerifyModal);
    }
    if (elements.pwdAccessVerifyConfirm) {
      elements.pwdAccessVerifyConfirm.addEventListener('click', verifyAccessPassword);
    }
    if (elements.pwdAccessInput) {
      elements.pwdAccessInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') verifyAccessPassword();
      });
    }
    
    // 密码搜索
    if (elements.pwdSearchInput) {
      elements.pwdSearchInput.addEventListener('input', (e) => {
        state.pwdSearchQuery = e.target.value.trim();
        renderPasswordList();
      });
    }
    
    // 添加密码
    if (elements.pwdAddBtn) {
      elements.pwdAddBtn.addEventListener('click', () => openPasswordModal());
    }
    if (elements.closePasswordModalBtn) {
      elements.closePasswordModalBtn.addEventListener('click', closePasswordModal);
    }
    if (elements.cancelPasswordBtn) {
      elements.cancelPasswordBtn.addEventListener('click', closePasswordModal);
    }
    if (elements.savePasswordBtn) {
      elements.savePasswordBtn.addEventListener('click', savePassword);
    }
    
    // 密码可见性切换
    if (elements.togglePasswordVisibility) {
      elements.togglePasswordVisibility.addEventListener('click', () => {
        const input = elements.passwordValue;
        const eyeOpen = elements.togglePasswordVisibility.querySelector('.eye-open');
        const eyeClosed = elements.togglePasswordVisibility.querySelector('.eye-closed');
        if (input.type === 'password') {
          input.type = 'text';
          eyeOpen.style.display = 'none';
          eyeClosed.style.display = 'block';
        } else {
          input.type = 'password';
          eyeOpen.style.display = 'block';
          eyeClosed.style.display = 'none';
        }
      });
    }
    
    // 导入导出
    if (elements.pwdImportBtn && elements.pwdImportInput) {
      elements.pwdImportBtn.addEventListener('click', () => elements.pwdImportInput.click());
      elements.pwdImportInput.addEventListener('change', handlePasswordImport);
    }
    if (elements.pwdExportBtn) {
      elements.pwdExportBtn.addEventListener('click', exportPasswords);
    }
    
    // 多选删除
    if (elements.pwdSelectAll) {
      elements.pwdSelectAll.addEventListener('change', (e) => {
        const checkboxes = elements.pwdList.querySelectorAll('.pwd-item-checkbox');
        checkboxes.forEach(cb => {
          cb.checked = e.target.checked;
          const id = parseInt(cb.dataset.id);
          if (e.target.checked) {
            state.pwdSelectedIds.add(id);
          } else {
            state.pwdSelectedIds.delete(id);
          }
        });
        updatePwdDeleteBtn();
      });
    }
    if (elements.pwdDeleteSelectedBtn) {
      elements.pwdDeleteSelectedBtn.addEventListener('click', deleteSelectedPasswords);
    }
    
    // 隐藏加密/解密按钮（明文存储无需此功能）
    if (elements.pwdDecryptBtn) elements.pwdDecryptBtn.style.display = 'none';
    if (elements.pwdEncryptBtn) elements.pwdEncryptBtn.style.display = 'none';
  }

  // ========== 分区管理功能 ==========

  // 渲染分区标签栏
  // 创建分区标签栏元素
  function createPartitionsBar() {
    const bar = document.createElement('div');
    bar.className = 'partitions-bar';
    
    const inner = document.createElement('div');
    inner.className = 'partitions-bar-inner';
    
    // 确保分区数据存在
    ensureDefaultPartitions();
    
    // 只显示当前模式（普通/隐私）的分区
    const filteredPartitions = state.partitions.filter(p => !!p.isPrivate === state.privateMode);
    
    filteredPartitions.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    // 获取当前区域的活动工作区ID
    const currentId = getCurrentPartitionId();
    
    filteredPartitions.forEach(partition => {
      const tab = document.createElement('div');
      tab.className = 'partition-tab' + (partition.id === currentId ? ' active' : '');
      tab.dataset.id = partition.id;
      tab.textContent = partition.name;
      
      // 点击切换分区
      tab.addEventListener('click', () => switchPartition(partition.id));
      
      // 右键菜单
      tab.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showPartitionContextMenu(e.clientX, e.clientY, partition.id);
      });
      
      inner.appendChild(tab);
    });
    
    bar.appendChild(inner);
    return bar;
  }

  // 渲染分区标签栏（调用 renderShortcuts 刷新整体）
  function renderPartitions() {
    renderShortcuts();
  }

  // 切换分区
  async function switchPartition(partitionId) {
    await setCurrentPartitionId(partitionId);
    renderShortcuts();
  }

  // 打开分区弹窗
  function openPartitionModal(partitionToEdit = null) {
    state.editingPartitionId = partitionToEdit ? partitionToEdit.id : null;
    
    if (partitionToEdit) {
      elements.partitionModalTitle.textContent = '编辑分区';
      elements.partitionName.value = partitionToEdit.name;
    } else {
      elements.partitionModalTitle.textContent = '添加分区';
      elements.partitionName.value = '';
    }
    
    elements.partitionModal.classList.add('show');
    elements.partitionName.focus();
  }

  // 关闭分区弹窗
  function closePartitionModal() {
    elements.partitionModal.classList.remove('show');
    state.editingPartitionId = null;
    elements.partitionName.value = '';
  }

  // 保存分区
  async function savePartition() {
    const name = elements.partitionName.value.trim();
    
    if (!name) {
      showAlert('请填写分区名称', 'error');
      return;
    }

    const nameLower = name.toLowerCase();
    
    if (state.editingPartitionId) {
      // 编辑 - 检查同名分区（排除自己，不区分大小写）
      const existingPartition = state.partitions.find(p => 
        p.id !== state.editingPartitionId &&
        p.name.toLowerCase() === nameLower &&
        !!p.isPrivate === state.privateMode
      );
      if (existingPartition) {
        showAlert('当前区域已存在同名工作区', 'error');
        return;
      }
      
      const index = state.partitions.findIndex(p => p.id === state.editingPartitionId);
      if (index !== -1) {
        state.partitions[index].name = name;
      }
    } else {
      // 添加 - 检查当前区域是否已存在同名分区（不区分大小写）
      const existingPartition = state.partitions.find(p => 
        p.name.toLowerCase() === nameLower &&
        !!p.isPrivate === state.privateMode
      );
      if (existingPartition) {
        showAlert('当前区域已存在同名工作区', 'error');
        return;
      }
      
      // 添加 - 根据当前隐私模式设置 isPrivate 属性
      const maxId = state.partitions.reduce((max, p) => Math.max(max, p.id), 0);
      const maxOrder = state.partitions.reduce((max, p) => Math.max(max, p.order || 0), 0);
      state.partitions.push({
        id: maxId + 1,
        name,
        order: maxOrder + 1,
        isPrivate: state.privateMode
      });
    }
    
    await Storage.set('partitions', state.partitions);
    renderShortcuts();
    closePartitionModal();
  }

  // 删除分区
  async function deletePartition(id) {
    const partition = state.partitions.find(p => p.id === id);
    
    // 只检查当前模式下的分区数量
    const currentModePartitions = state.partitions.filter(p => !!p.isPrivate === state.privateMode);
    if (currentModePartitions.length <= 1) {
      showAlert('至少需要保留一个分区', 'error');
      return;
    }
    
    const foldersInPartition = state.folders.filter(f => (f.partitionId || 1) === id);
    
    let confirmMsg = `确定要删除分区"${partition.name}"吗？`;
    if (foldersInPartition.length > 0) {
      confirmMsg += `\n该分区中有 ${foldersInPartition.length} 个文件夹，它们将被移动到默认分区。`;
    }
    
    const confirmed = await showConfirm(confirmMsg);
    if (!confirmed) return;
    
    // 将该分区的文件夹移动到当前模式的第一个分区
    const defaultPartition = currentModePartitions.find(p => p.id !== id);
    state.folders.forEach(f => {
      if ((f.partitionId || 1) === id) {
        f.partitionId = defaultPartition.id;
      }
    });
    
    // 删除分区
    state.partitions = state.partitions.filter(p => p.id !== id);
    
    // 如果删除的是当前区域的活动分区，切换到当前模式的第一个分区
    const currentPartitionId = getCurrentPartitionId();
    if (currentPartitionId === id) {
      await setCurrentPartitionId(defaultPartition.id);
    }
    
    await Storage.set('partitions', state.partitions);
    await Storage.set('folders', state.folders);
    
    renderShortcuts();
  }

  // 显示分区右键菜单
  function showPartitionContextMenu(x, y, id) {
    hideAllContextMenus();
    state.partitionContextMenuTargetId = id;
    
    const menu = elements.partitionContextMenu;
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('show');
  }

  // ========== 页面右键添加书签功能 ==========

  // 检查是否有待添加的书签（从浏览器右键菜单添加）
  function checkPendingBookmark() {
    // 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') !== 'addBookmark') {
      return;
    }

    // 标记是从右键菜单打开的
    state.isAddBookmarkFromContextMenu = true;

    // 从background脚本获取待添加的书签信息
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.sendMessage({ type: 'getPendingBookmark' }, (pendingBookmark) => {
        if (pendingBookmark) {
          // 保存来源标签页ID
          state.sourceTabId = pendingBookmark.sourceTabId || null;

          // 填充书签信息
          elements.pageBookmarkName.value = pendingBookmark.title || '';
          elements.pageBookmarkUrl.value = pendingBookmark.url || '';
          
          // 设置页面类型
          const typeValue = pendingBookmark.isPrivate ? 'private' : 'normal';
          const typeRadio = document.querySelector(`input[name="pageBookmarkType"][value="${typeValue}"]`);
          if (typeRadio) {
            typeRadio.checked = true;
          }

          // 更新工作区和文件夹选择器
          updatePageBookmarkSelectors();

          // 打开弹窗
          elements.addPageBookmarkModal.classList.add('show');
          elements.pageBookmarkName.focus();

          // 清除URL参数，防止刷新后重复弹窗
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      });
    }
  }

  // 打开添加页面书签弹窗
  function openAddPageBookmarkModal() {
    // 获取当前页面信息（在扩展环境中）
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length > 0) {
          const currentTab = tabs[0];
          elements.pageBookmarkName.value = currentTab.title || '';
          elements.pageBookmarkUrl.value = currentTab.url || '';
        }
      });
    } else {
      // 普通网页环境，使用当前页面信息
      elements.pageBookmarkName.value = document.title || '';
      elements.pageBookmarkUrl.value = window.location.href || '';
    }

    // 默认选择普通页面
    document.querySelector('input[name="pageBookmarkType"][value="normal"]').checked = true;

    // 更新工作区和文件夹选择器
    updatePageBookmarkSelectors();

    elements.addPageBookmarkModal.classList.add('show');
    elements.pageBookmarkName.focus();
  }

  // 关闭添加页面书签弹窗
  function closeAddPageBookmarkModal() {
    elements.addPageBookmarkModal.classList.remove('show');
    elements.pageBookmarkName.value = '';
    elements.pageBookmarkUrl.value = '';

    // 如果是从右键菜单打开的，返回到来源页面并关闭当前标签页
    if (state.isAddBookmarkFromContextMenu) {
      state.isAddBookmarkFromContextMenu = false;
      goBackToSourceTab();
    }
  }

  // 返回到来源标签页并关闭当前标签页
  function goBackToSourceTab() {
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.tabs) {
      // 先激活来源标签页
      if (state.sourceTabId) {
        chrome.runtime.sendMessage({ type: 'activateTab', tabId: state.sourceTabId });
      }
      
      // 然后关闭当前标签页
      chrome.tabs.getCurrent((tab) => {
        if (tab) {
          chrome.tabs.remove(tab.id);
        }
      });
      
      state.sourceTabId = null;
    }
  }

  // 更新页面书签选择器（工作区和文件夹）
  function updatePageBookmarkSelectors() {
    const isPrivate = document.querySelector('input[name="pageBookmarkType"]:checked').value === 'private';
    
    // 更新工作区选择器
    const partitionSelect = elements.pageBookmarkPartition;
    partitionSelect.innerHTML = '';
    
    // 过滤出对应类型的分区
    const filteredPartitions = state.partitions.filter(p => !!p.isPrivate === isPrivate);
    filteredPartitions.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    filteredPartitions.forEach(partition => {
      const option = document.createElement('option');
      option.value = partition.id;
      option.textContent = partition.name;
      // 默认选中当前区域的活动工作区
      const currentId = isPrivate ? state.currentPrivatePartition : state.currentPartition;
      if (partition.id === currentId) {
        option.selected = true;
      }
      partitionSelect.appendChild(option);
    });

    // 更新文件夹选择器
    updatePageBookmarkFolders();
  }

  // 更新页面书签文件夹选择器
  function updatePageBookmarkFolders() {
    const isPrivate = document.querySelector('input[name="pageBookmarkType"]:checked').value === 'private';
    const partitionId = parseInt(elements.pageBookmarkPartition.value);
    
    const folderSelect = elements.pageBookmarkFolder;
    folderSelect.innerHTML = '<option value="">无（根目录）</option>';
    
    // 过滤出对应分区的文件夹
    const filteredFolders = state.folders.filter(f => 
      !!f.isPrivate === isPrivate && 
      (f.partitionId === partitionId || (!f.partitionId && partitionId === (isPrivate ? state.currentPrivatePartition : state.currentPartition)))
    );
    
    filteredFolders.forEach(folder => {
      const option = document.createElement('option');
      option.value = folder.id;
      option.textContent = folder.name;
      folderSelect.appendChild(option);
    });
  }

  // 保存页面书签
  async function savePageBookmark() {
    const name = elements.pageBookmarkName.value.trim();
    const url = elements.pageBookmarkUrl.value.trim();
    const isPrivate = document.querySelector('input[name="pageBookmarkType"]:checked').value === 'private';
    const partitionId = parseInt(elements.pageBookmarkPartition.value);
    const folderId = elements.pageBookmarkFolder.value ? parseInt(elements.pageBookmarkFolder.value) : null;

    if (!name) {
      showAlert('请填写书签名称', 'error');
      return;
    }

    if (!url) {
      showAlert('请填写网址', 'error');
      return;
    }

    // 生成新ID
    const maxId = state.shortcuts.reduce((max, s) => Math.max(max, s.id), 0);
    
    // 计算排序顺序
    let order = 0;
    if (folderId) {
      // 在文件夹内，获取该文件夹内最大的order
      const folderShortcuts = state.shortcuts.filter(s => s.folderId === folderId);
      order = folderShortcuts.reduce((max, s) => Math.max(max, s.order || 0), 0) + 1;
    } else {
      // 在根目录，获取根目录最大的order
      const rootShortcuts = state.shortcuts.filter(s => !s.folderId && s.partitionId === partitionId && !!s.isPrivate === isPrivate);
      order = rootShortcuts.reduce((max, s) => Math.max(max, s.order || 0), 0) + 1;
    }

    const newShortcut = {
      id: maxId + 1,
      name,
      url,
      icon: '',
      folderId,
      partitionId,
      isPrivate,
      order
    };

    state.shortcuts.push(newShortcut);
    await Storage.set('shortcuts', state.shortcuts);

    // 保存是否从右键菜单打开的状态，因为关闭弹窗后需要判断是否关闭标签页
    const shouldCloseTab = state.isAddBookmarkFromContextMenu;

    closeAddPageBookmarkModal();
    
    // 如果不是从右键菜单打开的，才渲染（因为标签页会关闭）
    if (!shouldCloseTab) {
      renderShortcuts();
    }

    // 提示成功
    const typeText = isPrivate ? '隐私' : '普通';
    const partition = state.partitions.find(p => p.id === partitionId);
    const folder = folderId ? state.folders.find(f => f.id === folderId) : null;
    const locationText = folder ? `"${folder.name}"文件夹` : '根目录';
    console.log(`书签已添加到${typeText}页面 > ${partition?.name || '默认工作区'} > ${locationText}`);
  }

  // ========== 云同步功能 ==========

  // 加载同步配置
  async function loadSyncConfig() {
    const config = await Storage.get('syncConfig');
    if (config && config.apiList) {
      elements.syncApiList.value = config.apiList || '';
      elements.syncApiUpload.value = config.apiUpload || '';
      elements.syncApiDownload.value = config.apiDownload || '';
      elements.syncAccessKey.value = config.accessKey || '';
      elements.syncSecretKey.value = config.secretKey || '';
      
      // 如果之前连接过，尝试自动连接
      if (config.connected) {
        state.syncConfig = config;
        state.syncConnected = true;
        showSyncActions();
        // 加载备份列表
        await loadBackupList();
      }
    }
  }

  // 保存同步配置
  async function saveSyncConfig(config) {
    await Storage.set('syncConfig', config);
  }

  // 连接同步服务（通过获取备份列表来验证连接）
  async function connectSync() {
    const apiList = elements.syncApiList.value.trim();
    const apiUpload = elements.syncApiUpload.value.trim();
    const apiDownload = elements.syncApiDownload.value.trim();
    const accessKey = elements.syncAccessKey.value.trim();
    const secretKey = elements.syncSecretKey.value.trim();

    if (!apiList || !apiUpload || !apiDownload) {
      showSyncStatus('请填写完整的接口地址', 'error');
      return;
    }

    if (!accessKey || !secretKey) {
      showSyncStatus('请输入 Access Key 和 Secret Key', 'error');
      return;
    }

    showSyncStatus('正在连接...', '');
    elements.syncConnectBtn.disabled = true;

    try {
      // 通过获取备份列表来验证连接
      const response = await fetch(apiList, {
        method: 'GET',
        headers: {
          'x-access-key': accessKey,
          'x-secret-key': secretKey
        }
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || `连接失败: ${response.status}`);
      }

      const result = await response.json();
      
      // 连接成功，保存三个接口地址
      state.syncConfig = { 
        apiList, 
        apiUpload, 
        apiDownload, 
        accessKey, 
        secretKey, 
        connected: true 
      };
      state.syncConnected = true;
      state.syncBackups = result.data || [];
      await saveSyncConfig(state.syncConfig);
      
      showSyncStatus('连接成功！', 'success');
      setTimeout(() => {
        showSyncActions();
        renderBackupList();
      }, 500);
    } catch (e) {
      console.error('同步连接失败:', e);
      showSyncStatus(e.message || '连接失败，请检查配置', 'error');
    } finally {
      elements.syncConnectBtn.disabled = false;
    }
  }

  // 加载备份列表
  async function loadBackupList() {
    if (!state.syncConnected || !state.syncConfig) return;

    elements.syncBackupItems.classList.add('loading');
    elements.syncBackupItems.innerHTML = '';

    try {
      const response = await fetch(state.syncConfig.apiList, {
        method: 'GET',
        headers: {
          'x-access-key': state.syncConfig.accessKey,
          'x-secret-key': state.syncConfig.secretKey
        }
      });

      if (!response.ok) {
        throw new Error('获取备份列表失败');
      }

      const result = await response.json();
      state.syncBackups = result.data || [];
      state.selectedBackupId = null;
      elements.syncDownloadBtn.disabled = true;
      renderBackupList();
    } catch (e) {
      console.error('加载备份列表失败:', e);
      showSyncInfo(`❌ 加载备份列表失败: ${e.message}`);
    } finally {
      elements.syncBackupItems.classList.remove('loading');
    }
  }

  // 渲染备份列表
  function renderBackupList() {
    elements.syncBackupItems.innerHTML = '';

    if (state.syncBackups.length === 0) {
      return; // CSS 会显示"暂无云端备份"
    }

    state.syncBackups.forEach(backup => {
      const item = document.createElement('div');
      item.className = 'sync-backup-item' + (backup.id === state.selectedBackupId ? ' selected' : '');
      item.innerHTML = `
        <div class="backup-icon">
          <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
        </div>
        <div class="backup-info">
          <div class="backup-name">${backup.name}</div>
          <div class="backup-meta">${formatFileSize(backup.size)} · 同步 ${backup.sync_count} 次 · ${formatDate(backup.updated_at)}</div>
        </div>
        <div class="backup-check">
          <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
      `;
      item.addEventListener('click', () => selectBackup(backup.id));
      elements.syncBackupItems.appendChild(item);
    });
  }

  // 选中备份
  function selectBackup(id) {
    state.selectedBackupId = state.selectedBackupId === id ? null : id;
    elements.syncDownloadBtn.disabled = !state.selectedBackupId;
    renderBackupList();
  }

  // 格式化文件大小
  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  // 格式化日期
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return Math.floor(diff / 60000) + ' 分钟前';
    if (diff < 86400000) return Math.floor(diff / 3600000) + ' 小时前';
    if (diff < 604800000) return Math.floor(diff / 86400000) + ' 天前';
    
    return date.toLocaleDateString('zh-CN');
  }

  // 断开连接
  async function disconnectSync() {
    state.syncConnected = false;
    state.syncConfig = { ...state.syncConfig, connected: false };
    state.syncBackups = [];
    state.selectedBackupId = null;
    await saveSyncConfig(state.syncConfig);
    
    elements.syncLogin.style.display = 'block';
    elements.syncActions.style.display = 'none';
    elements.syncStatus.className = 'sync-status';
    elements.syncStatus.textContent = '';
    elements.syncInfo.className = 'sync-info';
    elements.syncInfo.textContent = '';
  }

  // 显示同步操作界面
  function showSyncActions() {
    elements.syncLogin.style.display = 'none';
    elements.syncActions.style.display = 'block';
  }

  // 显示状态消息
  function showSyncStatus(message, type) {
    elements.syncStatus.textContent = message;
    elements.syncStatus.className = 'sync-status' + (type ? ' ' + type : '');
    if (message) {
      elements.syncStatus.style.display = 'block';
    }
  }

  // 显示同步信息
  function showSyncInfo(message) {
    elements.syncInfo.textContent = message;
    elements.syncInfo.className = 'sync-info show';
  }

  // 显示加密密钥输入弹窗
  // mode: 'upload' | 'export' | 'download' | 'import'
  function showEncryptKeyModal(mode = 'upload') {
    return new Promise((resolve, reject) => {
      state.encryptKeyResolve = resolve;
      state.encryptKeyReject = reject;
      elements.encryptKeyInput.value = '';
      elements.encryptKeyConfirm.value = '';
      elements.encryptKeyError.style.display = 'none';
      
      // 根据模式设置标题和提示文字
      const configs = {
        upload: {
          title: '输入加密密钥',
          tip: '密码数据将使用此密钥进行 AES 加密后上传，下载时需要使用相同密钥解密。',
          btn: '确认上传'
        },
        export: {
          title: '输入加密密钥',
          tip: '密码数据将使用此密钥进行 AES 加密后导出，导入时需要使用相同密钥解密。',
          btn: '确认导出'
        },
        download: {
          title: '输入解密密钥',
          tip: '请输入上传时使用的加密密钥，用于解密密码数据。',
          btn: '确认下载'
        },
        import: {
          title: '输入解密密钥',
          tip: '检测到备份文件中的密码已加密，请输入导出时使用的密钥进行解密。',
          btn: '确认导入'
        }
      };
      
      const config = configs[mode] || configs.upload;
      elements.encryptKeyTitle.textContent = config.title;
      elements.encryptKeyTipText.textContent = config.tip;
      elements.confirmEncryptKey.textContent = config.btn;
      
      // 解密模式不需要确认密钥
      const isDecrypt = mode === 'download' || mode === 'import';
      const confirmFormGroup = elements.encryptKeyConfirm.closest('.form-group');
      if (confirmFormGroup) {
        confirmFormGroup.style.display = isDecrypt ? 'none' : 'block';
      }
      
      elements.encryptKeyModal.classList.add('active');
      elements.encryptKeyInput.focus();
    });
  }

  // 隐藏加密密钥输入弹窗
  function hideEncryptKeyModal() {
    elements.encryptKeyModal.classList.remove('active');
    state.encryptKeyResolve = null;
    state.encryptKeyReject = null;
  }

  // 上传数据到服务器
  async function uploadData() {
    if (!state.syncConnected || !state.syncConfig) {
      showAlert('请先连接同步服务', 'error');
      return;
    }

    // 弹出输入框让用户输入备份名称
    const backupName = await showPrompt('请输入备份名称：', '我的导航备份');
    if (!backupName) return;

    // 重新从 Storage 加载最新数据，确保多标签页场景下数据是最新的
    const latestData = await Storage.getAll();
    state.partitions = latestData.partitions || state.partitions;
    state.folders = latestData.folders || state.folders;
    state.shortcuts = latestData.shortcuts || state.shortcuts;
    state.searchEngines = latestData.searchEngines || state.searchEngines;
    state.currentEngine = latestData.currentEngine || state.currentEngine;
    state.settings = latestData.settings || state.settings;
    state.currentPartition = latestData.currentPartition || state.currentPartition;
    state.currentPrivatePartition = latestData.currentPrivatePartition || state.currentPrivatePartition;

    // 获取密码数据
    const passwords = await PasswordManager.getAll();
    
    // 如果有密码数据，需要输入加密密钥
    let encryptedPasswords = [];
    if (passwords && passwords.length > 0) {
      try {
        const encryptKey = await showEncryptKeyModal('upload');
        if (!encryptKey) {
          showAlert('已取消上传', 'info');
          return;
        }
        // 加密密码数据
        encryptedPasswords = await encryptPasswords(passwords, encryptKey);
      } catch (e) {
        if (e === 'cancelled') {
          return;
        }
        showAlert('加密失败: ' + e.message, 'error');
        return;
      }
    }

    elements.syncUploadBtn.disabled = true;
    showSyncInfo('正在上传...');

    try {
      const uploadData = {
        partitions: state.partitions,
        folders: state.folders,
        shortcuts: state.shortcuts,
        searchEngines: state.searchEngines,
        currentEngine: state.currentEngine,
        settings: state.settings,
        currentPartition: state.currentPartition,
        currentPrivatePartition: state.currentPrivatePartition
      };
      
      // 只有当有密码数据时才添加 passwords 字段
      const hasEncryptedPasswords = encryptedPasswords.length > 0;
      if (hasEncryptedPasswords) {
        uploadData.passwords = encryptedPasswords;
      }

      const response = await fetch(state.syncConfig.apiUpload, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-key': state.syncConfig.accessKey,
          'x-secret-key': state.syncConfig.secretKey
        },
        body: JSON.stringify({
          name: backupName.trim(),
          passwordsEncrypted: hasEncryptedPasswords,
          data: uploadData
        })
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || `上传失败: ${response.status}`);
      }

      const result = await response.json();
      const passwordInfo = encryptedPasswords.length > 0 ? `\n密码: ${encryptedPasswords.length} 个（已加密）` : '';
      showSyncInfo(`✅ ${result.message}\n时间: ${new Date().toLocaleString()}\n书签: ${state.shortcuts.length} 个\n文件夹: ${state.folders.length} 个${passwordInfo}`);
      
      // 刷新备份列表
      await loadBackupList();
    } catch (e) {
      console.error('上传失败:', e);
      showSyncInfo(`❌ 上传失败: ${e.message}`);
    } finally {
      elements.syncUploadBtn.disabled = false;
    }
  }

  // 从服务器下载数据
  async function downloadData() {
    if (!state.syncConnected || !state.syncConfig) {
      showAlert('请先连接同步服务', 'error');
      return;
    }

    if (!state.selectedBackupId) {
      showAlert('请先选择要下载的备份', 'error');
      return;
    }

    const selectedBackup = state.syncBackups.find(b => b.id === state.selectedBackupId);
    const confirmed = await showConfirm(`确定要下载备份"${selectedBackup?.name}"吗？\n这将覆盖本地数据。`);
    if (!confirmed) {
      return;
    }

    elements.syncDownloadBtn.disabled = true;
    showSyncInfo('正在下载...');

    try {
      // 下载接口需要拼接备份ID
      const downloadUrl = `${state.syncConfig.apiDownload}/${state.selectedBackupId}`;
      const response = await fetch(downloadUrl, {
        method: 'GET',
        headers: {
          'x-access-key': state.syncConfig.accessKey,
          'x-secret-key': state.syncConfig.secretKey
        }
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || `下载失败: ${response.status}`);
      }

      const responseData = await response.json();
      
      // 新接口格式：{ version, exportDate, passwordsEncrypted, data: {...} }
      const data = responseData.data || responseData;
      const passwordsEncrypted = responseData.passwordsEncrypted || false;

      // 导入分区
      if (data.partitions && Array.isArray(data.partitions) && data.partitions.length > 0) {
        state.partitions = data.partitions;
        await Storage.set('partitions', state.partitions);
      }

      // 导入文件夹
      if (data.folders && Array.isArray(data.folders)) {
        state.folders = data.folders;
        await Storage.set('folders', state.folders);
      }

      // 导入书签
      if (data.shortcuts && Array.isArray(data.shortcuts)) {
        state.shortcuts = data.shortcuts;
        await Storage.set('shortcuts', state.shortcuts);
      }

      // 导入搜索引擎
      if (data.searchEngines && Array.isArray(data.searchEngines)) {
        state.searchEngines = data.searchEngines;
        await Storage.set('searchEngines', state.searchEngines);
      }

      // 导入当前搜索引擎
      if (data.currentEngine) {
        state.currentEngine = data.currentEngine;
        await Storage.set('currentEngine', state.currentEngine);
      }

      // 导入设置
      if (data.settings && typeof data.settings === 'object') {
        state.settings = {
          bgType: data.settings.bgType || 'gradient',
          gradientColor1: data.settings.gradientColor1 || '#667eea',
          gradientColor2: data.settings.gradientColor2 || '#764ba2',
          gradientAngle: data.settings.gradientAngle ?? 135,
          solidColor: data.settings.solidColor || '#1a1a2e',
          bgImage: data.settings.bgImage || '',
          iconSize: data.settings.iconSize ?? 57,
          folderSize: data.settings.folderSize ?? 65,
          iconGap: data.settings.iconGap ?? 15,
          folderGap: data.settings.folderGap ?? 20,
          iconRadius: data.settings.iconRadius ?? 11,
          searchRadius: data.settings.searchRadius ?? 16,
          btnRadius: data.settings.btnRadius ?? 12
        };
        await Storage.set('settings', state.settings);
      }

      // 导入当前分区
      if (data.currentPartition) {
        state.currentPartition = data.currentPartition;
        await Storage.set('currentPartition', state.currentPartition);
      }
      if (data.currentPrivatePartition) {
        state.currentPrivatePartition = data.currentPrivatePartition;
        await Storage.set('currentPrivatePartition', state.currentPrivatePartition);
      }
      
      // 导入密码
      let importedPasswordCount = 0;
      if (data.passwords && Array.isArray(data.passwords) && data.passwords.length > 0) {
        let passwordsToSave = data.passwords;
        
        // 如果密码已加密，需要用户输入解密密钥
        if (passwordsEncrypted) {
          try {
            const decryptKey = await showEncryptKeyModal('download');
            if (!decryptKey) {
              showAlert('已跳过密码导入', 'info');
            } else {
              const decryptedPasswords = await decryptPasswords(data.passwords, decryptKey);
              if (decryptedPasswords === null) {
                showAlert('解密失败，密钥可能不正确，已跳过密码导入', 'error');
              } else {
                passwordsToSave = decryptedPasswords;
                await PasswordManager.saveAll(passwordsToSave);
                importedPasswordCount = passwordsToSave.length;
              }
            }
          } catch (e) {
            if (e !== 'cancelled') {
              showAlert('解密失败: ' + e.message, 'error');
            }
          }
        } else {
          // 密码未加密，直接保存
          await PasswordManager.saveAll(passwordsToSave);
          importedPasswordCount = passwordsToSave.length;
        }
      }
      
      // 确保两个区域都有默认工作区
      ensureDefaultPartitions();

      // 应用设置和重新渲染
      applySettings();
      applyBackground();
      renderShortcuts();
      renderEngines();
      renderEngineSelector();

      const passwordInfo = importedPasswordCount > 0 ? `\n密码: ${importedPasswordCount} 个` : '';
      showSyncInfo(`✅ 下载成功！\n时间: ${new Date().toLocaleString()}\n分区: ${state.partitions.length} 个\n书签: ${state.shortcuts.length} 个\n文件夹: ${state.folders.length} 个${passwordInfo}`);
    } catch (e) {
      console.error('下载失败:', e);
      showSyncInfo(`❌ 下载失败: ${e.message}`);
    } finally {
      elements.syncDownloadBtn.disabled = !state.selectedBackupId;
    }
  }

  // ========== 密码管理功能 ==========

  // 打开密码管理弹窗（带访问密码验证）
  async function openPasswordManager() {
    if (!elements.passwordManagerModal) return;
    
    // 检查是否已设置访问密码
    const hasPassword = await PasswordManager.hasAccessPassword();
    
    if (!hasPassword) {
      // 未设置访问密码，显示设置弹窗
      showAccessSetModal();
    } else {
      // 已设置访问密码，显示验证弹窗
      showAccessVerifyModal();
    }
  }

  // 实际打开密码管理器（验证通过后调用）
  async function doOpenPasswordManager() {
    if (!elements.passwordManagerModal) return;
    elements.passwordManagerModal.classList.add('active');
    state.pwdSearchQuery = '';
    if (elements.pwdSearchInput) elements.pwdSearchInput.value = '';
    state.pwdSelectedIds.clear();
    state.pwdMultiSelectMode = false;
    await renderPasswordList();
  }

  // 显示设置访问密码弹窗
  function showAccessSetModal() {
    if (!elements.pwdAccessSetModal) return;
    elements.pwdAccessSetModal.classList.add('active');
    if (elements.pwdAccessNew) elements.pwdAccessNew.value = '';
    if (elements.pwdAccessConfirm) elements.pwdAccessConfirm.value = '';
    if (elements.pwdAccessNew) elements.pwdAccessNew.focus();
  }

  // 关闭设置访问密码弹窗
  function closeAccessSetModal() {
    if (!elements.pwdAccessSetModal) return;
    elements.pwdAccessSetModal.classList.remove('active');
  }

  // 保存访问密码
  async function saveAccessPassword() {
    const pwd = elements.pwdAccessNew?.value || '';
    const confirmPwd = elements.pwdAccessConfirm?.value || '';
    
    if (!pwd) {
      showAlert('请输入访问密码', 'error');
      return;
    }
    if (pwd.length < 4) {
      showAlert('访问密码至少需要4个字符', 'error');
      return;
    }
    if (pwd !== confirmPwd) {
      showAlert('两次输入的密码不一致', 'error');
      return;
    }
    
    await PasswordManager.setAccessPassword(pwd);
    closeAccessSetModal();
    showToast('访问密码设置成功');
    await doOpenPasswordManager();
  }
  // 显示验证访问密码弹窗
  function showAccessVerifyModal() {
    if (!elements.pwdAccessVerifyModal) return;
    elements.pwdAccessVerifyModal.classList.add('active');
    if (elements.pwdAccessInput) elements.pwdAccessInput.value = '';
    if (elements.pwdAccessError) elements.pwdAccessError.style.display = 'none';
    if (elements.pwdAccessInput) elements.pwdAccessInput.focus();
  }

  // 关闭验证访问密码弹窗
  function closeAccessVerifyModal() {
    if (!elements.pwdAccessVerifyModal) return;
    elements.pwdAccessVerifyModal.classList.remove('active');
  }

  // 验证访问密码
  async function verifyAccessPassword() {
    const pwd = elements.pwdAccessInput?.value || '';
    
    if (!pwd) {
      if (elements.pwdAccessError) {
        elements.pwdAccessError.textContent = '请输入访问密码';
        elements.pwdAccessError.style.display = 'block';
      }
      return;
    }
    
    const isValid = await PasswordManager.verifyAccessPassword(pwd);
    
    if (isValid) {
      closeAccessVerifyModal();
      await doOpenPasswordManager();
    } else {
      if (elements.pwdAccessError) {
        elements.pwdAccessError.textContent = '密码错误，请重试';
        elements.pwdAccessError.style.display = 'block';
      }
      if (elements.pwdAccessInput) elements.pwdAccessInput.select();
    }
  }

  // 关闭密码管理弹窗
  function closePasswordManager() {
    if (!elements.passwordManagerModal) return;
    elements.passwordManagerModal.classList.remove('active');
    state.pwdSearchQuery = '';
    state.pwdSelectedIds.clear();
    state.pwdMultiSelectMode = false;
  }

  // 渲染密码列表
  async function renderPasswordList() {
    if (!elements.pwdList) return;
    
    const passwords = await PasswordManager.getAll();
    const query = state.pwdSearchQuery.toLowerCase();
    
    // 过滤密码
    const filtered = passwords.filter(p => {
      if (!query) return true;
      return (p.name && p.name.toLowerCase().includes(query)) ||
             (p.url && p.url.toLowerCase().includes(query)) ||
             (p.username && p.username.toLowerCase().includes(query));
    });
    
    // 显示/隐藏空状态
    if (filtered.length === 0) {
      if (elements.pwdEmpty) {
        elements.pwdEmpty.style.display = 'flex';
        elements.pwdList.innerHTML = '';
        elements.pwdList.appendChild(elements.pwdEmpty);
      }
      return;
    }
    
    if (elements.pwdEmpty) elements.pwdEmpty.style.display = 'none';
    
    // 渲染列表
    elements.pwdList.innerHTML = filtered.map(p => {
      const hostname = PasswordManager.getHostname(p.url);
      
      return `
        <div class="password-item" data-id="${p.id}">
          <div class="password-item-checkbox-area">
            <input type="checkbox" class="pwd-item-checkbox" data-id="${p.id}" 
                   ${state.pwdSelectedIds.has(p.id) ? 'checked' : ''}>
          </div>
          <div class="password-item-info">
            <div class="password-item-name">${escapeHtml(p.name || hostname || '未命名')}</div>
            <div class="password-item-url">${escapeHtml(p.url || '')}</div>
            <div class="password-item-username">${escapeHtml(p.username || '')}</div>
          </div>
          <div class="password-item-actions">
            <button class="pwd-action-btn pwd-copy-user" title="复制用户名" data-id="${p.id}">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>
            <button class="pwd-action-btn pwd-copy-pwd" title="复制密码" data-id="${p.id}">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </button>
            <button class="pwd-action-btn pwd-edit" title="编辑" data-id="${p.id}">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </button>
            <button class="pwd-action-btn pwd-delete" title="删除" data-id="${p.id}">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
    
    // 绑定列表项事件
    bindPasswordItemEvents();
    updatePwdDeleteBtn();
  }

  // 绑定密码列表项事件
  function bindPasswordItemEvents() {
    // 复制用户名
    elements.pwdList.querySelectorAll('.pwd-copy-user').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const passwords = await PasswordManager.getAll();
        const p = passwords.find(pwd => pwd.id === id);
        if (p && p.username) {
          await navigator.clipboard.writeText(p.username);
          showToast('用户名已复制');
        }
      });
    });
    
    // 复制密码
    elements.pwdList.querySelectorAll('.pwd-copy-pwd').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const passwords = await PasswordManager.getAll();
        const p = passwords.find(pwd => pwd.id === id);
        if (p && p.password) {
          await navigator.clipboard.writeText(p.password);
          showToast('密码已复制');
        }
      });
    });
    
    // 编辑
    elements.pwdList.querySelectorAll('.pwd-edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        openPasswordModal(id);
      });
    });
    
    // 删除
    elements.pwdList.querySelectorAll('.pwd-delete').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const confirmed = await showConfirm('确定要删除这个密码吗？');
        if (confirmed) {
          await PasswordManager.remove(id);
          await renderPasswordList();
          showToast('密码已删除');
        }
      });
    });
    
    // 多选复选框
    elements.pwdList.querySelectorAll('.pwd-item-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = parseInt(cb.dataset.id);
        if (e.target.checked) {
          state.pwdSelectedIds.add(id);
        } else {
          state.pwdSelectedIds.delete(id);
        }
        updatePwdDeleteBtn();
      });
    });
  }

  // 更新删除按钮状态
  function updatePwdDeleteBtn() {
    if (!elements.pwdDeleteSelectedBtn) return;
    const count = state.pwdSelectedIds.size;
    if (count > 0) {
      elements.pwdDeleteSelectedBtn.disabled = false;
      elements.pwdDeleteSelectedBtn.title = `删除选中 (${count})`;
    } else {
      elements.pwdDeleteSelectedBtn.disabled = true;
      elements.pwdDeleteSelectedBtn.title = '删除选中';
    }
  }

  // 打开密码编辑弹窗
  async function openPasswordModal(id = null) {
    if (!elements.passwordModal) return;
    state.pwdEditingId = id;
    
    // 重置表单
    if (elements.passwordSiteName) elements.passwordSiteName.value = '';
    if (elements.passwordSiteUrl) elements.passwordSiteUrl.value = '';
    if (elements.passwordUsername) elements.passwordUsername.value = '';
    if (elements.passwordValue) {
      elements.passwordValue.value = '';
      elements.passwordValue.type = 'password';
    }
    if (elements.passwordNotes) elements.passwordNotes.value = '';
    
    // 隐藏加密密钥输入框（明文存储不需要）
    const encryptKeyGroup = document.querySelector('#passwordEncryptKey')?.closest('.form-group');
    if (encryptKeyGroup) encryptKeyGroup.style.display = 'none';
    
    if (id) {
      // 编辑模式
      if (elements.passwordModalTitle) elements.passwordModalTitle.textContent = '编辑密码';
      const passwords = await PasswordManager.getAll();
      const p = passwords.find(pwd => pwd.id === id);
      if (p) {
        if (elements.passwordSiteName) elements.passwordSiteName.value = p.name || '';
        if (elements.passwordSiteUrl) elements.passwordSiteUrl.value = p.url || '';
        if (elements.passwordUsername) elements.passwordUsername.value = p.username || '';
        if (elements.passwordValue) elements.passwordValue.value = p.password || '';
        if (elements.passwordNotes) elements.passwordNotes.value = p.notes || '';
      }
    } else {
      // 新增模式
      if (elements.passwordModalTitle) elements.passwordModalTitle.textContent = '添加密码';
    }
    
    elements.passwordModal.classList.add('show');
  }

  // 关闭密码编辑弹窗
  function closePasswordModal() {
    if (elements.passwordModal) elements.passwordModal.classList.remove('show');
    state.pwdEditingId = null;
  }

  // 保存密码
  async function savePassword() {
    const name = elements.passwordSiteName?.value.trim() || '';
    const url = elements.passwordSiteUrl?.value.trim() || '';
    const username = elements.passwordUsername?.value.trim() || '';
    const password = elements.passwordValue?.value || '';
    const notes = elements.passwordNotes?.value.trim() || '';
    
    if (!url && !username) {
      showAlert('请至少填写网址或用户名', 'error');
      return;
    }
    
    if (!password) {
      showAlert('请填写密码', 'error');
      return;
    }
    
    const entry = { name, url, username, password, notes };
    
    if (state.pwdEditingId) {
      await PasswordManager.update(state.pwdEditingId, entry);
      showToast('密码已更新');
    } else {
      await PasswordManager.add(entry);
      showToast('密码已保存');
    }
    
    closePasswordModal();
    await renderPasswordList();
  }

  // 删除选中的密码
  async function deleteSelectedPasswords() {
    const count = state.pwdSelectedIds.size;
    if (count === 0) return;
    
    const confirmed = await showConfirm(`确定要删除选中的 ${count} 个密码吗？`);
    if (!confirmed) return;
    
    await PasswordManager.removeMultiple(Array.from(state.pwdSelectedIds));
    state.pwdSelectedIds.clear();
    elements.pwdSelectAll.checked = false;
    await renderPasswordList();
    showToast(`已删除 ${count} 个密码`);
  }

  // 导入密码
  async function handlePasswordImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const content = await file.text();
      const result = await PasswordManager.importPasswords(content);
      showToast(`成功导入 ${result.imported} 个密码`);
      await renderPasswordList();
    } catch (err) {
      showAlert('导入失败: ' + err.message, 'error');
    }
    
    e.target.value = '';
  }

  // 导出密码
  async function exportPasswords() {
    try {
      const data = await PasswordManager.exportPasswords();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `passwords-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('密码已导出');
    } catch (err) {
      showAlert('导出失败: ' + err.message, 'error');
    }
  }

  // 显示Toast提示
  function showToast(message) {
    // 移除已有的toast
    const existing = document.querySelector('.toast-message');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      animation: fadeInUp 0.3s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  // 自定义 Alert 弹窗
  function showAlert(message, type = 'success') {
    const overlay = document.getElementById('customAlertOverlay');
    const messageEl = document.getElementById('customAlertMessage');
    const iconEl = document.getElementById('customAlertIcon');
    const btn = document.getElementById('customAlertBtn');
    
    if (!overlay || !messageEl) return;
    
    messageEl.textContent = message;
    
    // 设置图标类型
    iconEl.className = 'custom-alert-icon';
    if (type === 'error') {
      iconEl.classList.add('error-icon');
      iconEl.innerHTML = `<svg viewBox="0 0 24 24" width="48" height="48">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>`;
    } else if (type === 'info') {
      iconEl.classList.add('info-icon');
      iconEl.innerHTML = `<svg viewBox="0 0 24 24" width="48" height="48">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>`;
    } else {
      iconEl.innerHTML = `<svg viewBox="0 0 24 24" width="48" height="48">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>`;
    }
    
    overlay.classList.add('active');
    
    // 点击确定关闭
    const closeHandler = () => {
      overlay.classList.remove('active');
      btn.removeEventListener('click', closeHandler);
    };
    btn.addEventListener('click', closeHandler);
    
    // ESC 关闭
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        overlay.classList.remove('active');
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  // 自定义 Confirm 弹窗
  function showConfirm(message) {
    return new Promise((resolve) => {
      const overlay = document.getElementById('customConfirmOverlay');
      const messageEl = document.getElementById('customConfirmMessage');
      const cancelBtn = document.getElementById('customConfirmCancel');
      const okBtn = document.getElementById('customConfirmOk');
      
      if (!overlay || !messageEl) {
        resolve(confirm(message));
        return;
      }
      
      messageEl.textContent = message;
      overlay.classList.add('active');
      
      const cleanup = () => {
        overlay.classList.remove('active');
        cancelBtn.removeEventListener('click', handleCancel);
        okBtn.removeEventListener('click', handleOk);
        document.removeEventListener('keydown', handleEsc);
      };
      
      const handleCancel = () => {
        cleanup();
        resolve(false);
      };
      
      const handleOk = () => {
        cleanup();
        resolve(true);
      };
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          cleanup();
          resolve(false);
        }
      };
      
      cancelBtn.addEventListener('click', handleCancel);
      okBtn.addEventListener('click', handleOk);
      document.addEventListener('keydown', handleEsc);
    });
  }

  // 自定义 Prompt 输入弹窗
  function showPrompt(message, defaultValue = '') {
    return new Promise((resolve) => {
      const overlay = document.getElementById('customPromptOverlay');
      const messageEl = document.getElementById('customPromptMessage');
      const inputEl = document.getElementById('customPromptInput');
      const cancelBtn = document.getElementById('customPromptCancel');
      const okBtn = document.getElementById('customPromptOk');
      
      if (!overlay || !messageEl || !inputEl) {
        resolve(prompt(message, defaultValue));
        return;
      }
      
      messageEl.textContent = message;
      inputEl.value = defaultValue;
      overlay.classList.add('active');
      
      // 自动聚焦并选中输入框内容
      setTimeout(() => {
        inputEl.focus();
        inputEl.select();
      }, 100);
      
      const cleanup = () => {
        overlay.classList.remove('active');
        cancelBtn.removeEventListener('click', handleCancel);
        okBtn.removeEventListener('click', handleOk);
        inputEl.removeEventListener('keydown', handleKeydown);
        document.removeEventListener('keydown', handleEsc);
      };
      
      const handleCancel = () => {
        cleanup();
        resolve(null);
      };
      
      const handleOk = () => {
        const value = inputEl.value.trim();
        cleanup();
        resolve(value || null);
      };
      
      const handleKeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleOk();
        }
      };
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          cleanup();
          resolve(null);
        }
      };
      
      cancelBtn.addEventListener('click', handleCancel);
      okBtn.addEventListener('click', handleOk);
      inputEl.addEventListener('keydown', handleKeydown);
      document.addEventListener('keydown', handleEsc);
    });
  }

  // 导出选择弹窗（三选项：加密导出、不加密导出、取消）
  function showExportChoice() {
    return new Promise((resolve) => {
      const overlay = elements.exportChoiceOverlay;
      const encryptBtn = elements.exportChoiceEncrypt;
      const plainBtn = elements.exportChoicePlain;
      const cancelBtn = elements.exportChoiceCancel;
      
      if (!overlay) {
        // 降级为直接不加密导出
        resolve('plain');
        return;
      }
      
      overlay.classList.add('active');
      
      const cleanup = () => {
        overlay.classList.remove('active');
        encryptBtn.removeEventListener('click', handleEncrypt);
        plainBtn.removeEventListener('click', handlePlain);
        cancelBtn.removeEventListener('click', handleCancel);
        document.removeEventListener('keydown', handleEsc);
      };
      
      const handleEncrypt = () => {
        cleanup();
        resolve('encrypt');
      };
      
      const handlePlain = () => {
        cleanup();
        resolve('plain');
      };
      
      const handleCancel = () => {
        cleanup();
        resolve('cancel');
      };
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          cleanup();
          resolve('cancel');
        }
      };
      
      encryptBtn.addEventListener('click', handleEncrypt);
      plainBtn.addEventListener('click', handlePlain);
      cancelBtn.addEventListener('click', handleCancel);
      document.addEventListener('keydown', handleEsc);
    });
  }

  // HTML转义
  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 启动应用
  init();
})();
