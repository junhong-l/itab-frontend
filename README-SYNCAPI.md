# 远程同步接口文档

## 概述

远程同步接口用于 iTab 导航页扩展与后端服务器进行数据同步，支持备份的上传、下载和列表查询。

## 认证方式

所有同步接口使用 Header 认证，需要在请求头中携带访问密钥：

| Header | 说明 | 示例 |
|--------|------|------|
| `x-access-key` | 访问密钥 Access Key | `AK1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o` |
| `x-secret-key` | 密钥 Secret Key | `SK1a2b3c4d5e6f...（64位）` |

> **获取密钥**：登录管理后台 → 密钥管理 → 创建密钥

---

## 接口列表

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/sync/list` | 获取备份列表 |
| GET | `/api/sync/download/:id` | 下载备份数据 |
| POST | `/api/sync/upload` | 上传备份数据 |

---

## 1. 获取备份列表

获取当前用户的所有备份数据列表。

### 请求

```
GET /api/sync/list
```

### 请求头

```
x-access-key: AKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
x-secret-key: SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 响应

#### 成功 (200)

```json
{
    "data": [
        {
            "id": 1,
            "name": "我的导航备份",
            "size": 15360,
            "sync_count": 5,
            "created_at": "2025-11-28T10:00:00Z",
            "updated_at": "2025-11-28T15:30:00Z"
        },
        {
            "id": 2,
            "name": "工作导航",
            "size": 8192,
            "sync_count": 3,
            "created_at": "2025-11-27T09:00:00Z",
            "updated_at": "2025-11-28T12:00:00Z"
        }
    ]
}
```

#### 响应字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| id | number | 备份ID |
| name | string | 备份名称（同用户下唯一） |
| size | number | 备份大小（字节） |
| sync_count | number | 同步次数（上传+下载） |
| created_at | string | 创建时间 (ISO 8601) |
| updated_at | string | 最后更新时间 (ISO 8601) |

---

## 2. 下载备份数据

根据备份ID下载完整的备份JSON数据。

### 请求

```
GET /api/sync/download/:id
```

### 路径参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 备份ID |

### 请求头

```
x-access-key: AKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
x-secret-key: SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 响应

#### 成功 (200)

返回 `Content-Type: application/json`，响应体为完整的导出格式：

```json
{
    "version": "2.0",
    "exportDate": "2025-11-28T15:30:00Z",
    "passwordsEncrypted": true,
    "data": {
        "partitions": [
            {
                "id": 1,
                "name": "Home",
                "order": 0,
                "isPrivate": false
            },
            {
                "id": 2,
                "name": "Home",
                "order": 0,
                "isPrivate": true
            }
        ],
        "folders": [
            {
                "id": 1,
                "name": "常用网站",
                "collapsed": false,
                "partitionId": 1,
                "isPrivate": false
            }
        ],
        "shortcuts": [
            {
                "id": 1,
                "name": "GitHub",
                "url": "https://github.com",
                "icon": "",
                "folderId": 1,
                "partitionId": 1,
                "isPrivate": false,
                "isPinned": true,
                "order": 0
            }
        ],
        "searchEngines": [
            {
                "id": 1,
                "name": "Google",
                "url": "https://www.google.com/search?q=%s",
                "icon": "https://www.google.com/favicon.ico"
            }
        ],
        "settings": {
            "bgType": "gradient",
            "gradientColor1": "#667eea",
            "gradientColor2": "#764ba2",
            "gradientAngle": 135,
            "solidColor": "#1a1a2e",
            "bgImage": "",
            "iconSize": 57,
            "folderSize": 65,
            "iconGap": 15,
            "folderGap": 20,
            "iconRadius": 11,
            "searchRadius": 16,
            "btnRadius": 12
        },
        "passwords": [
            {
                "id": 1764420176148,
                "name": "GitHub",
                "url": "github.com",
                "username": "encrypted_username",
                "password": "encrypted_password",
                "notes": "",
                "createdAt": 1764420176148,
                "_encrypted": true
            }
        ],
        "currentEngine": 1,
        "currentPartition": 1,
        "currentPrivatePartition": 2
    }
}
```

#### 响应字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| version | string | 导出格式版本号 |
| exportDate | string | 最后更新时间 (ISO 8601) |
| passwordsEncrypted | boolean | 密码数据是否已加密 |
| data | object | 备份数据对象 |

---

## 3. 上传备份数据

上传或更新备份数据。如果同名备份已存在则更新，否则创建新备份。

### 请求

```
POST /api/sync/upload
```

### 请求头

```
Content-Type: application/json
x-access-key: AKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
x-secret-key: SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 请求体

```json
{
    "name": "我的导航备份",
    "passwordsEncrypted": true,
    "data": {
        "partitions": [...],
        "folders": [...],
        "shortcuts": [...],
        "searchEngines": [...],
        "settings": {...},
        "passwords": [...],
        "currentEngine": 1,
        "currentPartition": 1,
        "currentPrivatePartition": 2
    }
}
```

#### 请求参数说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | 是 | 备份名称，用于标识备份（同用户下唯一） |
| passwordsEncrypted | boolean | 否 | 密码数据是否已加密（默认 false） |
| data | object | 是 | 备份数据对象 |

### 响应

#### 创建成功 (200)

```json
{
    "message": "备份创建成功",
    "backup_id": 1
}
```

#### 更新成功 (200)

```json
{
    "message": "备份更新成功",
    "backup_id": 1
}
```

---

## 数据结构详解

### data 对象

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| partitions | array | 是 | 工作区/分区列表 |
| folders | array | 是 | 文件夹列表 |
| shortcuts | array | 是 | 书签列表 |
| searchEngines | array | 是 | 搜索引擎列表 |
| settings | object | 是 | 外观设置 |
| passwords | array | 否 | 密码管理数据 |
| currentEngine | number | 否 | 当前使用的搜索引擎ID |
| currentPartition | number | 否 | 当前公开分区ID |
| currentPrivatePartition | number | 否 | 当前私密分区ID |

### partitions (分区)

| 字段 | 类型 | 说明 |
|------|------|------|
| id | number | 分区ID |
| name | string | 分区名称 |
| order | number | 排序顺序 |
| isPrivate | boolean | 是否为私密分区 |

### folders (文件夹)

| 字段 | 类型 | 说明 |
|------|------|------|
| id | number | 文件夹ID |
| name | string | 文件夹名称 |
| collapsed | boolean | 是否折叠 |
| partitionId | number | 所属分区ID |
| isPrivate | boolean | 是否私密 |

### shortcuts (书签)

| 字段 | 类型 | 说明 |
|------|------|------|
| id | number | 书签ID |
| name | string | 书签名称 |
| url | string | 书签URL |
| icon | string | 图标URL |
| folderId | number/null | 所属文件夹ID（null表示不在文件夹内） |
| partitionId | number | 所属分区ID |
| isPrivate | boolean | 是否私密 |
| isPinned | boolean | 是否置顶 |
| order | number | 排序顺序 |

### searchEngines (搜索引擎)

| 字段 | 类型 | 说明 |
|------|------|------|
| id | number | 搜索引擎ID |
| name | string | 搜索引擎名称 |
| url | string | 搜索URL模板（%s为搜索词占位符） |
| icon | string | 图标URL |

### settings (外观设置)

| 字段 | 类型 | 说明 |
|------|------|------|
| bgType | string | 背景类型：gradient/solid/image |
| gradientColor1 | string | 渐变色1 |
| gradientColor2 | string | 渐变色2 |
| gradientAngle | number | 渐变角度 |
| solidColor | string | 纯色背景 |
| bgImage | string | 背景图片URL |
| iconSize | number | 图标大小 |
| folderSize | number | 文件夹大小 |
| iconGap | number | 图标间距 |
| folderGap | number | 文件夹间距 |
| iconRadius | number | 图标圆角 |
| searchRadius | number | 搜索框圆角 |
| btnRadius | number | 按钮圆角 |

### passwords (密码)

| 字段 | 类型 | 说明 |
|------|------|------|
| id | number | 密码条目ID（时间戳） |
| name | string | 名称/标题 |
| url | string | 网站域名 |
| username | string | 用户名（可能已加密） |
| password | string | 密码（可能已加密） |
| notes | string | 备注 |
| createdAt | number | 创建时间戳（毫秒） |
| _encrypted | boolean | 标记该条目是否已加密 |

> **注意**：当 `passwordsEncrypted` 为 `true` 时，`username` 和 `password` 字段为加密后的密文，每条记录的 `_encrypted` 字段也会标记为 `true`。

---

## 错误响应

所有接口的错误响应格式统一：

```json
{
    "error": "错误信息"
}
```

### 错误码说明

| HTTP 状态码 | 错误信息 | 说明 |
|-------------|----------|------|
| 400 | 无效的备份ID | 路径参数格式错误 |
| 400 | 参数错误: ... | 请求体参数验证失败 |
| 401 | 未提供访问密钥 | 缺少 x-access-key 或 x-secret-key |
| 401 | invalid access key | 密钥不存在或不匹配 |
| 401 | access key has expired | 密钥已过期 |
| 401 | access key has been expired | 密钥已被手动禁用 |
| 404 | 备份不存在 | 指定ID的备份不存在或无权访问 |
| 500 | 创建备份失败 | 服务器内部错误 |
| 500 | 更新备份失败 | 服务器内部错误 |

---

## 完整示例

### cURL 示例

#### 获取备份列表

```bash
curl -X GET "http://localhost:8445/api/sync/list" \
  -H "x-access-key: AK1234567890abcdef1234567890ab" \
  -H "x-secret-key: SK1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd"
```

#### 下载备份

```bash
curl -X GET "http://localhost:8445/api/sync/download/1" \
  -H "x-access-key: AK1234567890abcdef1234567890ab" \
  -H "x-secret-key: SK1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd" \
  -o backup.json
```

#### 上传备份

```bash
curl -X POST "http://localhost:8445/api/sync/upload" \
  -H "Content-Type: application/json" \
  -H "x-access-key: AK1234567890abcdef1234567890ab" \
  -H "x-secret-key: SK1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd" \
  -d @backup.json
```

### JavaScript 示例

```javascript
class SyncAPI {
  constructor(baseUrl, accessKey, secretKey) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      'x-access-key': accessKey,
      'x-secret-key': secretKey
    };
  }

  // 获取备份列表
  async getBackupList() {
    const response = await fetch(`${this.baseUrl}/api/sync/list`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error((await response.json()).error);
    return response.json();
  }

  // 下载备份
  async downloadBackup(id) {
    const response = await fetch(`${this.baseUrl}/api/sync/download/${id}`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error((await response.json()).error);
    return response.json();
  }

  // 上传备份
  async uploadBackup(name, data, passwordsEncrypted = false) {
    const response = await fetch(`${this.baseUrl}/api/sync/upload`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, data, passwordsEncrypted })
    });
    if (!response.ok) throw new Error((await response.json()).error);
    return response.json();
  }
}

// 使用示例
const api = new SyncAPI(
  'http://localhost:8445',
  'AK1234567890abcdef1234567890ab',
  'SK1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd'
);

// 上传当前数据
const backupData = {
  partitions: [...],
  folders: [...],
  shortcuts: [...],
  searchEngines: [...],
  settings: {...},
  passwords: [...],
  currentEngine: 1,
  currentPartition: 1
};
await api.uploadBackup('我的导航', backupData, true); // 第三个参数表示密码已加密

// 获取列表并下载最新备份
const { data: list } = await api.getBackupList();
if (list.length > 0) {
  const backup = await api.downloadBackup(list[0].id);
  console.log('下载的备份数据:', backup);
  console.log('密码是否加密:', backup.passwordsEncrypted);
  console.log('实际数据:', backup.data);
}
```

---

## 注意事项

1. **密码安全**：`passwords` 字段包含敏感信息，建议在客户端加密后再上传，并设置 `passwordsEncrypted: true`
2. **加密标识**：上传时设置 `passwordsEncrypted` 字段，下载时会原样返回，便于客户端判断是否需要解密
3. **备份命名**：同一用户下备份名称唯一，上传同名备份会覆盖更新
4. **密钥管理**：密钥支持设置过期时间，过期后需要重新创建
5. **数据大小**：单个备份数据没有硬性大小限制，但建议控制在合理范围内
