> **🤖 AI-Powered Project**  
> 该项目由 AI 驱动开发和维护，采用智能化的代码生成、文档更新和项目优化。结合人工审查确保代码质量和项目稳定性。

# Void Bot Web

[![Nuxt](https://img.shields.io/badge/Nuxt-4.1.2-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Vue](https://img.shields.io/badge/Vue-3.5.18-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![AI-Powered](https://img.shields.io/badge/AI-Powered-FF6B35?style=flat&logo=openai)](https://github.com/5oPercent/Void-Bot-Web)

Void Bot 的现代化 Web 管理界面，基于 Nuxt 3 构建的响应式单页应用。提供完整的用户认证系统、主题管理和组件化架构。

## ✨ 特性

- 🎨 **现代化设计** - 响应式布局，支持移动端和桌面端
- 🌓 **主题系统** - 完整的亮色/暗色主题切换，支持自动检测
- 🔐 **用户认证** - 完整的登录、注册、忘记密码流程
- 🧩 **组件化** - 可复用的 UI 组件和 Composables
- 📱 **无障碍** - 遵循 WCAG 标准，支持键盘导航和屏幕阅读器
- 🛡️ **类型安全** - 完整的 TypeScript 支持
- 🎯 **API 代理** - 内置 API 代理服务，解决跨域问题
- ⚡ **性能优化** - 基于 Nuxt 3 的 SSR/SPA 模式

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

#### 环境变量配置

创建 `.env.local` 文件并配置 API 基础 URL：

```bash
NUXT_PUBLIC_API_URL_BASE=http://localhost:3001/api
```

#### 运行本地服务

```bash
npm run dev --dotenv .env.local
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
# 构建应用
npm run build

# 预览生产版本
npm run preview

# 生成静态站点
npm run generate
```

## 📁 项目结构

```
void-bot-web/
├── app/                          # 应用源码
│   ├── components/               # Vue 组件
│   │   ├── ThemeToggle.vue      # 主题切换组件
│   │   └── TopNavigation.vue    # 顶部导航组件
│   ├── composables/             # 组合式函数
│   │   ├── useAuth.ts          # 用户认证管理
│   │   └── useTheme.ts         # 主题管理
│   ├── pages/                   # 路由页面
│   │   ├── index.vue           # 首页
│   │   ├── login.vue           # 登录页
│   │   ├── register.vue        # 注册页
│   │   └── forgot-password.vue # 忘记密码页
│   ├── layouts/                # 布局模板
│   │   └── default.vue         # 默认布局
│   ├── middleware/             # 路由中间件
│   │   └── auth.ts            # 认证中间件
│   ├── plugins/                # Nuxt 插件
│   │   ├── auth.client.ts     # 认证插件
│   │   └── theme.client.ts    # 主题插件
│   ├── assets/css/             # 样式文件
│   │   ├── main.css           # 主样式文件
│   │   ├── variables/         # CSS 变量
│   │   ├── components/        # 组件样式
│   │   └── pages/            # 页面样式
│   └── utils/                  # 工具函数
│       ├── config.ts          # 应用配置
│       ├── icons.ts           # 图标系统
│       └── theme.ts           # 主题工具
├── server/                     # 服务器端代码
│   └── api/proxy/             # API 代理
│       └── [...path].ts       # 通用代理路由
├── types/                      # TypeScript 类型定义
│   ├── api.ts                 # API 类型
│   └── components.d.ts        # 组件类型
├── docs/                       # 项目文档
│   ├── color-system.md        # 颜色系统文档
│   ├── icon-system.md         # 图标系统文档
│   └── components/            # 组件文档
│       └── ThemeToggle.md     # 主题切换组件文档
└── public/                     # 静态资源
    ├── icon.svg               # 应用图标
    └── robots.txt             # SEO 配置
```

## 🎯 核心功能

### 🔐 认证系统

完整的用户认证流程，包含：

- **登录** - 支持用户名/密码登录，自动 Token 管理
- **注册** - 新用户注册，实时表单验证
- **忘记密码** - 密码重置功能
- **自动登出** - Token 过期自动处理
- **路由守卫** - 保护需要认证的页面

```typescript
// 使用认证 Composable
const { login, logout, user, isAuthenticated } = useAuth()

// 登录用户
await login({ username: 'user', password: 'password' })

// 获取当前用户状态
console.log(isAuthenticated.value) // true
console.log(user.value) // { username: 'user', avatar: '...' }
```

### 🌓 主题系统

智能主题管理系统，支持：

- **亮色主题** - 明亮清爽的视觉体验
- **暗色主题** - 护眼的深色界面
- **自动主题** - 根据系统设置自动切换
- **持久化** - 主题选择自动保存
- **平滑过渡** - 主题切换动画效果

```typescript
// 使用主题 Composable
const { currentTheme, setTheme, toggleTheme } = useTheme()

// 设置主题
setTheme('dark') // 'light' | 'dark' | 'auto'

// 切换主题
toggleTheme()
```

### 🧩 组件系统

模块化的组件架构：

#### ThemeToggle 组件

可复用的主题切换按钮，支持多种样式和布局。

```vue
<template>
  <!-- 基础用法 -->
  <ThemeToggle />
  
  <!-- 自定义样式 -->
  <ThemeToggle variant="compact" />
</template>
```

#### TopNavigation 组件

响应式顶部导航栏，集成用户状态和主题切换。

```vue
<template>
  <TopNavigation 
    :logo="appLogo"
    :user="currentUser"
    @logout="handleLogout"
  />
</template>
```

## 🎨 设计系统

### 颜色系统

基于 CSS 自定义属性的完整颜色系统：

- **基础色彩** - 黑白灰度系统
- **品牌色彩** - 主品牌色和辅助色
- **语义色彩** - 成功、警告、错误等状态色
- **主题适配** - 自动适应亮色/暗色主题

详细文档：[颜色系统指南](docs/color-system.md)

### 图标系统

统一的 SVG 图标管理：

- **主题图标** - 太阳、月亮、自动图标
- **导航图标** - 首页、文档、外链等
- **表单图标** - 输入框、按钮状态图标
- **可访问性** - 支持屏幕阅读器

详细文档：[图标系统指南](docs/icon-system.md)

## 🔧 开发指南

### 添加新页面

1. 在 `app/pages/` 目录创建 Vue 文件
2. 文件名即为路由路径（遵循 Nuxt 约定）
3. 可选择添加页面级样式到 `app/assets/css/pages/`

```vue
<!-- app/pages/example.vue -->
<template>
  <div class="example-page">
    <h1>示例页面</h1>
  </div>
</template>
```

### 创建新组件

1. 在 `app/components/` 目录创建组件
2. 添加组件样式到 `app/assets/css/components/`
3. 更新类型定义（如需要）

```vue
<!-- app/components/ExampleComponent.vue -->
<template>
  <div class="example-component">
    <!-- 组件内容 -->
  </div>
</template>
```

### API 集成

使用内置的 API 代理系统：

```typescript
// 发送 API 请求
const response = await $fetch('/api/proxy/users', {
  method: 'POST',
  body: { username: 'newuser' }
})
```

API 代理会自动转发请求到配置的后端服务器，解决跨域问题。

### 环境变量

支持的环境变量：

```bash
# API 配置
NUXT_PUBLIC_API_URL_BASE=http://localhost:3001
```

## 🧪 测试

```bash
# 运行 ESLint 检查
npm run lint

# 修复 ESLint 问题
npm run lint:fix
```

## 📚 文档

- [ThemeToggle 组件](docs/components/ThemeToggle.md) - 主题切换组件详细文档
- [颜色系统](docs/color-system.md) - CSS 变量和颜色使用指南
- [图标系统](docs/icon-system.md) - SVG 图标管理和使用

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Nuxt 4 文档](https://nuxt.com/docs)
- [Vue 3 文档](https://vuejs.org/guide/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)