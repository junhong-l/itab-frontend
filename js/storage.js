/**
 * 存储管理模块
 * 处理数据的持久化存储
 */

const Storage = (function() {
  // 默认数据
  const defaults = {
    partitions: [
      { id: 1, name: 'Home', order: 0, isPrivate: false },  // 非隐私区域默认工作区
      { id: 2, name: 'Home', order: 0, isPrivate: true }    // 隐私区域默认工作区
    ],
    currentPartition: 1,        // 非隐私区域当前工作区
    currentPrivatePartition: 2, // 隐私区域当前工作区
    folders: [
      { id: 1, name: '常用网站', collapsed: false, partitionId: 1 },
      { id: 2, name: '社交媒体', collapsed: false, partitionId: 1 }
    ],
    shortcuts: [
      { id: 1, name: '百度', url: 'https://www.baidu.com', icon: '', folderId: 1, partitionId: 1 },
      { id: 2, name: 'Google', url: 'https://www.google.com', icon: '', folderId: 1, partitionId: 1 },
      { id: 3, name: 'GitHub', url: 'https://github.com', icon: '', folderId: 1, partitionId: 1 },
      { id: 4, name: '知乎', url: 'https://www.zhihu.com', icon: '', folderId: 2, partitionId: 1 },
      { id: 5, name: '哔哩哔哩', url: 'https://www.bilibili.com', icon: '', folderId: 2, partitionId: 1 },
      { id: 6, name: '微博', url: 'https://weibo.com', icon: '', folderId: 2, partitionId: 1 }
    ],
    searchEngines: [
      { id: 1, name: '百度', url: 'https://www.baidu.com/s?wd=%s', icon: 'https://www.baidu.com/favicon.ico' },
      { id: 2, name: 'Google', url: 'https://www.google.com/search?q=%s', icon: 'https://www.google.com/favicon.ico' },
      { id: 3, name: '必应', url: 'https://www.bing.com/search?q=%s', icon: 'https://www.bing.com/favicon.ico' },
      { id: 4, name: '搜狗', url: 'https://www.sogou.com/web?query=%s', icon: 'https://www.sogou.com/favicon.ico' },
      { id: 5, name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s', icon: 'https://duckduckgo.com/favicon.ico' }
    ],
    currentEngine: 1,
    settings: {
      bgType: 'gradient',
      gradientColor1: '#667eea',
      gradientColor2: '#764ba2',
      gradientAngle: 135,
      solidColor: '#1a1a2e',
      bgImage: '',
      iconSize: 57,
      folderSize: 65,
      iconGap: 15,
      folderGap: 20,
      iconRadius: 11,
      searchRadius: 16,
      btnRadius: 12
    }
  };

  // 检测是否为扩展环境
  function isExtension() {
    return typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;
  }

  // 获取数据
  async function get(key) {
    if (isExtension()) {
      return new Promise((resolve) => {
        chrome.storage.local.get([key], (result) => {
          if (result[key] !== undefined) {
            resolve(result[key]);
          } else {
            resolve(defaults[key]);
          }
        });
      });
    } else {
      const data = localStorage.getItem(key);
      if (data) {
        try {
          return JSON.parse(data);
        } catch {
          return defaults[key];
        }
      }
      return defaults[key];
    }
  }

  // 设置数据
  async function set(key, value) {
    if (isExtension()) {
      return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: value }, resolve);
      });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      return Promise.resolve();
    }
  }

  // 获取所有数据
  async function getAll() {
    const partitions = await get('partitions');
    const currentPartition = await get('currentPartition');
    const currentPrivatePartition = await get('currentPrivatePartition');
    const folders = await get('folders');
    const shortcuts = await get('shortcuts');
    const searchEngines = await get('searchEngines');
    const currentEngine = await get('currentEngine');
    const settings = await get('settings');

    return {
      partitions,
      currentPartition,
      currentPrivatePartition,
      folders,
      shortcuts,
      searchEngines,
      currentEngine,
      settings
    };
  }

  // 重置为默认数据
  async function reset() {
    for (const key in defaults) {
      await set(key, defaults[key]);
    }
  }

  return {
    get,
    set,
    getAll,
    reset,
    defaults
  };
})();
