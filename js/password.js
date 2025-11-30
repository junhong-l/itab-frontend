/**
 * 密码管理模块
 * 密码明文存储（为支持自动填充功能）
 */

const PasswordManager = (function() {

  // 获取所有密码条目
  async function getAll() {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.get(['passwords'], (result) => {
          resolve(result.passwords || []);
        });
      } else {
        const data = localStorage.getItem('passwords');
        resolve(data ? JSON.parse(data) : []);
      }
    });
  }

  // 保存所有密码条目
  async function saveAll(passwords) {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.set({ passwords }, resolve);
      } else {
        localStorage.setItem('passwords', JSON.stringify(passwords));
        resolve();
      }
    });
  }

  // 添加密码
  async function add(entry) {
    const passwords = await getAll();
    const maxId = passwords.reduce((max, p) => Math.max(max, p.id || 0), 0);
    
    const newEntry = {
      id: maxId + 1,
      name: entry.name || '',
      url: entry.url || '',
      username: entry.username || '',
      password: entry.password || '',
      notes: entry.notes || '',
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    
    passwords.push(newEntry);
    await saveAll(passwords);
    return newEntry;
  }

  // 更新密码
  async function update(id, entry) {
    const passwords = await getAll();
    const index = passwords.findIndex(p => p.id === id);
    
    if (index !== -1) {
      passwords[index] = {
        ...passwords[index],
        name: entry.name !== undefined ? entry.name : passwords[index].name,
        url: entry.url !== undefined ? entry.url : passwords[index].url,
        username: entry.username !== undefined ? entry.username : passwords[index].username,
        password: entry.password !== undefined ? entry.password : passwords[index].password,
        notes: entry.notes !== undefined ? entry.notes : passwords[index].notes,
        updatedAt: Date.now()
      };
      await saveAll(passwords);
      return passwords[index];
    }
    return null;
  }

  // 删除密码
  async function remove(id) {
    const passwords = await getAll();
    const filtered = passwords.filter(p => p.id !== id);
    await saveAll(filtered);
  }

  // 批量删除密码
  async function removeMultiple(ids) {
    const passwords = await getAll();
    const filtered = passwords.filter(p => !ids.includes(p.id));
    await saveAll(filtered);
  }

  // 根据URL查找匹配的密码
  async function findByUrl(url) {
    if (!url) return [];
    
    const passwords = await getAll();
    const hostname = getHostname(url);
    
    return passwords.filter(p => {
      const entryHostname = getHostname(p.url);
      return entryHostname && hostname && 
             (hostname.includes(entryHostname) || entryHostname.includes(hostname));
    });
  }

  // 从URL提取主机名（包含端口）
  function getHostname(url) {
    if (!url) return '';
    try {
      if (!url.includes('://')) {
        url = 'https://' + url;
      }
      const urlObj = new URL(url);
      const host = urlObj.hostname.replace(/^www\./, '');
      const port = urlObj.port;
      return port ? `${host}:${port}` : host;
    } catch {
      return url.replace(/^(https?:\/\/)?/, '').replace(/^www\./, '').split('/')[0];
    }
  }

  // 导出密码（用于备份）
  async function exportPasswords() {
    const passwords = await getAll();
    
    const exportData = {
      version: '1.0',
      source: 'itab-nav',
      exportTime: Date.now(),
      passwords: passwords.map(p => ({
        name: p.name,
        url: p.url,
        username: p.username,
        password: p.password,
        notes: p.notes
      }))
    };
    
    return JSON.stringify(exportData, null, 2);
  }

  // 解析 CSV 字符串
  function parseCSV(csvStr) {
    const lines = csvStr.trim().split('\n');
    if (lines.length < 2) {
      throw new Error('CSV 文件为空或格式错误');
    }
    
    const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().trim());
    
    const fieldMap = {
      name: ['name', 'title', '名称', '标题'],
      url: ['url', 'website', 'origin', 'login_uri', '网址', '网站'],
      username: ['username', 'login', 'email', 'user', 'login_username', '用户名', '账号'],
      password: ['password', 'pwd', 'pass', 'login_password', '密码'],
      notes: ['notes', 'note', 'comment', 'memo', '备注', '说明']
    };
    
    const columnIndex = {};
    for (const [field, aliases] of Object.entries(fieldMap)) {
      for (let i = 0; i < headers.length; i++) {
        if (aliases.some(alias => headers[i].includes(alias))) {
          columnIndex[field] = i;
          break;
        }
      }
    }
    
    if (columnIndex.password === undefined) {
      throw new Error('找不到密码列，请确保 CSV 文件包含 password 列');
    }
    
    const entries = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const values = parseCSVLine(line);
      const entry = {
        name: values[columnIndex.name] || values[columnIndex.url] || '',
        url: values[columnIndex.url] || '',
        username: values[columnIndex.username] || '',
        password: values[columnIndex.password] || '',
        notes: values[columnIndex.notes] || ''
      };
      
      if (entry.password) {
        entries.push(entry);
      }
    }
    
    return entries;
  }

  // 解析单行 CSV
  function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    
    return result;
  }

  // 检查导入文件类型
  function checkImportFile(content) {
    const trimmed = content.trim();
    
    if (trimmed.startsWith('{')) {
      try {
        const data = JSON.parse(trimmed);
        if (data.passwords && Array.isArray(data.passwords)) {
          return { type: 'json', data };
        }
        if (Array.isArray(data)) {
          return { type: 'json-array', data };
        }
      } catch {}
    }
    
    if (trimmed.includes(',') && trimmed.includes('\n')) {
      const firstLine = trimmed.split('\n')[0].toLowerCase();
      if (firstLine.includes('password') || firstLine.includes('密码')) {
        return { type: 'csv' };
      }
    }
    
    return { type: 'unknown' };
  }

  // 导入密码
  async function importPasswords(content) {
    const fileInfo = checkImportFile(content);
    
    if (fileInfo.type === 'json') {
      return importFromJSON(fileInfo.data);
    } else if (fileInfo.type === 'json-array') {
      return importFromJSONArray(fileInfo.data);
    } else if (fileInfo.type === 'csv') {
      return importFromCSV(content);
    } else {
      throw new Error('不支持的文件格式');
    }
  }

  // 从 JSON 导入
  async function importFromJSON(data) {
    const passwords = await getAll();
    let maxId = passwords.reduce((max, p) => Math.max(max, p.id || 0), 0);
    let importedCount = 0;
    
    for (const p of data.passwords) {
      const existing = passwords.find(e => 
        e.url === p.url && e.username === p.username
      );
      
      if (!existing) {
        maxId++;
        passwords.push({
          id: maxId,
          name: p.name || '',
          url: p.url || '',
          username: p.username || '',
          password: p.password || '',
          notes: p.notes || '',
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
        importedCount++;
      }
    }
    
    await saveAll(passwords);
    return { imported: importedCount };
  }

  // 从 JSON 数组导入
  async function importFromJSONArray(data) {
    const passwords = await getAll();
    let maxId = passwords.reduce((max, p) => Math.max(max, p.id || 0), 0);
    let importedCount = 0;
    
    for (const p of data) {
      const existing = passwords.find(e => 
        e.url === (p.url || p.origin) && e.username === (p.username || p.login)
      );
      
      if (!existing) {
        maxId++;
        passwords.push({
          id: maxId,
          name: p.name || p.title || '',
          url: p.url || p.origin || '',
          username: p.username || p.login || '',
          password: p.password || '',
          notes: p.notes || '',
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
        importedCount++;
      }
    }
    
    await saveAll(passwords);
    return { imported: importedCount };
  }

  // 从 CSV 导入
  async function importFromCSV(content) {
    const entries = parseCSV(content);
    const passwords = await getAll();
    let maxId = passwords.reduce((max, p) => Math.max(max, p.id || 0), 0);
    let importedCount = 0;
    
    for (const entry of entries) {
      const existing = passwords.find(e => 
        e.url === entry.url && e.username === entry.username
      );
      
      if (!existing) {
        maxId++;
        passwords.push({
          id: maxId,
          name: entry.name || '',
          url: entry.url || '',
          username: entry.username || '',
          password: entry.password || '',
          notes: entry.notes || '',
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
        importedCount++;
      }
    }
    
    await saveAll(passwords);
    return { imported: importedCount };
  }

  // 获取访问密码（已哈希）
  async function getAccessPassword() {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.get(['pwdAccessKey'], (result) => {
          resolve(result.pwdAccessKey || null);
        });
      } else {
        resolve(localStorage.getItem('pwdAccessKey') || null);
      }
    });
  }

  // 设置访问密码
  async function setAccessPassword(password) {
    const hashed = await hashPassword(password);
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.set({ pwdAccessKey: hashed }, resolve);
      } else {
        localStorage.setItem('pwdAccessKey', hashed);
        resolve();
      }
    });
  }

  // 验证访问密码
  async function verifyAccessPassword(password) {
    const stored = await getAccessPassword();
    if (!stored) return false;
    const hashed = await hashPassword(password);
    return hashed === stored;
  }

  // 检查是否已设置访问密码
  async function hasAccessPassword() {
    const stored = await getAccessPassword();
    return !!stored;
  }

  // 简单的密码哈希（使用 SHA-256）
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'itab-salt-2024');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  return {
    getAll,
    saveAll,
    add,
    update,
    remove,
    removeMultiple,
    findByUrl,
    getHostname,
    exportPasswords,
    importPasswords,
    checkImportFile,
    getAccessPassword,
    setAccessPassword,
    verifyAccessPassword,
    hasAccessPassword
  };
})();
