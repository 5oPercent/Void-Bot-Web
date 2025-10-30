# 颜色变量使用指南

本项目使用 CSS 自定义属性 (CSS Variables) 来管理颜色系统，所有颜色变量都定义在 `app/assets/css/variables/colors.css` 文件中。

## 颜色系统结构

### 1. 基础颜色
- **白色系**: `--color-white`, `--color-white-95`, `--color-white-10`
- **黑色系**: `--color-black`, `--color-black-alpha`

### 2. 灰度系统
- **浅灰色**: `--color-gray-50` 到 `--color-gray-500`
- **深灰色**: `--color-gray-600` 到 `--color-gray-900`
- **Slate 系列**: `--color-slate-50` 到 `--color-slate-900` (偏蓝灰色)

### 3. 品牌色系
- **主品牌色**: `--color-primary-start`, `--color-primary-end`, `--color-primary-gradient`
- **品牌蓝色**: `--color-brand-blue-light`, `--color-brand-blue`, `--color-brand-blue-dark`
- **品牌紫色**: `--color-brand-purple-light`, `--color-brand-purple`, `--color-brand-purple-dark`

### 4. 语义化颜色
- **成功色**: `--color-success-light`, `--color-success`, `--color-success-dark`
- **警告色**: `--color-warning-light`, `--color-warning`, `--color-warning-dark`
- **错误色**: `--color-error-light`, `--color-error`, `--color-error-dark`
- **信息色**: `--color-info-light`, `--color-info`, `--color-info-dark`

### 5. 主题相关颜色
- **背景色**: `--color-bg-light`, `--color-bg-dark`
- **表面色**: `--color-surface-light`, `--color-surface-dark`
- **文字色**: `--color-text-primary-light/dark`, `--color-text-secondary-light/dark`
- **边框色**: `--color-border-light`, `--color-border-dark`

### 6. 交互状态颜色
- **悬停效果**: `--color-hover-light`, `--color-hover-dark`
- **激活状态**: `--color-active-light`, `--color-active-dark`
- **焦点状态**: `--color-focus`, `--color-focus-ring`

### 7. 阴影
- **阴影变量**: `--shadow-sm`, `--shadow`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

## 使用方法

### 基本用法
```css
.my-element {
  background-color: var(--color-bg-light);
  color: var(--color-text-primary-light);
  border: 1px solid var(--color-border-light);
}
```

### 主题适配
```css
/* 亮色主题 */
.my-element {
  background-color: var(--color-bg-light);
  color: var(--color-text-primary-light);
}

/* 暗色主题 */
.dark .my-element {
  background-color: var(--color-bg-dark);
  color: var(--color-text-primary-dark);
}
```

### 渐变使用
```css
.hero-section {
  background: var(--color-primary-gradient);
}
```

### 阴影使用
```css
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

## 最佳实践

1. **优先使用语义化颜色**: 使用 `--color-text-primary-light` 而不是 `--color-gray-900`
2. **主题适配**: 总是提供亮色和暗色主题的支持
3. **一致性**: 在整个项目中使用相同的颜色变量
4. **可维护性**: 避免硬编码颜色值，始终使用变量

## 在不同文件中引入

### 方式1: CSS @import (推荐)
```css
@import url('./variables/colors.css');
```

### 方式2: 在 Nuxt.js 中全局引入
在 `nuxt.config.ts` 中配置：
```typescript
export default defineNuxtConfig({
  css: [
    '~/assets/css/variables/colors.css',
    '~/assets/css/main.css'
  ]
})
```

## 扩展颜色系统

如需添加新颜色，请在 `colors.css` 文件的相应分类中添加：

```css
:root {
  /* 新的品牌色 */
  --color-brand-green: #10b981;
  --color-brand-green-light: #34d399;
  --color-brand-green-dark: #059669;
}
```

## 兼容性

CSS 变量在所有现代浏览器中都得到支持。对于旧版浏览器，可以提供回退值：

```css
.element {
  background-color: #ffffff; /* 回退值 */
  background-color: var(--color-bg-light);
}
```
