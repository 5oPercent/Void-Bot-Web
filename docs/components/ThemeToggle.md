# ThemeToggle 组件使用文档

## 概述

`ThemeToggle` 是一个可复用的主题切换按钮组件，支持在应用的任何地方快速实现亮色/暗色主题的切换功能。

## 功能特性

- ✅ 支持亮色/暗色主题切换
- ✅ 可配置显示文字标签
- ✅ 支持不同尺寸（normal/small）
- ✅ 响应式设计，移动端友好
- ✅ 支持键盘访问和屏幕阅读器
- ✅ 支持动画效果（可关闭）
- ✅ 自动根据用户偏好调整样式

## 基本使用

### 最简单的用法

```vue
<template>
  <ThemeToggle />
</template>
```

### 带标签的按钮

```vue
<template>
  <ThemeToggle :show-label="true" />
</template>
```

### 小尺寸按钮

```vue
<template>
  <ThemeToggle size="small" />
</template>
```

### 监听主题切换事件

```vue
<template>
  <ThemeToggle @toggle="onThemeChange" />
</template>

<script setup lang="ts">
const onThemeChange = (theme: 'light' | 'dark') => {
  console.log('当前主题:', theme)
  // 可以在这里执行其他操作，比如埋点统计
}
</script>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `showLabel` | `boolean` | `false` | 是否显示主题名称文字标签 |
| `size` | `'normal' \| 'small'` | `'normal'` | 按钮尺寸大小 |
| `customClass` | `string` | `''` | 自定义CSS类名 |

## Events 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `toggle` | `theme: 'light' \| 'dark'` | 主题切换后触发，返回新的主题类型 |

## 样式定制

组件使用 CSS 变量进行样式定制，支持以下变量：

```css
.theme-toggle {
  /* 边框颜色 */
  --border-color: #e2e8f0;
  --border-hover: #cbd5e1;
  --border-focus: #3b82f6;
  
  /* 背景颜色 */
  --bg-secondary: #f8fafc;
  --bg-secondary-dark: #1e293b;
  
  /* 文字颜色 */
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  
  /* 焦点环颜色 */
  --focus-ring: rgba(59, 130, 246, 0.5);
}
```

## 使用场景示例

### 1. 在导航栏中使用

```vue
<template>
  <nav class="navigation">
    <div class="nav-left">
      <!-- Logo -->
    </div>
    <div class="nav-right">
      <ThemeToggle size="small" />
    </div>
  </nav>
</template>
```

### 2. 在用户设置页面使用

```vue
<template>
  <div class="settings-section">
    <h3>外观设置</h3>
    <div class="setting-item">
      <label>主题模式</label>
      <ThemeToggle 
        :show-label="true" 
        @toggle="saveThemePreference" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const saveThemePreference = (theme: 'light' | 'dark') => {
  // 保存用户偏好到服务器
  console.log('保存主题偏好:', theme)
}
</script>
```

### 3. 在移动端侧边栏使用

```vue
<template>
  <div class="mobile-sidebar">
    <div class="sidebar-header">
      <h2>设置</h2>
    </div>
    <div class="sidebar-content">
      <div class="setting-group">
        <ThemeToggle 
          :show-label="true" 
          size="small" 
        />
      </div>
    </div>
  </div>
</template>
```

## 可访问性支持

组件已内置以下可访问性功能：

- ✅ 支持键盘导航（Tab、Enter、Space）
- ✅ 提供有意义的 `title` 属性
- ✅ 支持屏幕阅读器
- ✅ 符合 WCAG 对比度要求
- ✅ 支持高对比度模式
- ✅ 支持减少动画偏好

## 注意事项

1. **组件依赖**: 确保已正确配置 `useTheme` composable
2. **样式覆盖**: 如需自定义样式，建议使用 CSS 变量而非直接覆盖类名
3. **响应式**: 组件在移动端会自动隐藏文字标签，只显示图标
4. **性能**: 组件内部已优化，切换主题时不会导致页面重新渲染

## 技术实现

组件基于以下技术栈：

- Vue 3 Composition API
- TypeScript 类型支持
- Nuxt 3 可组合函数
- CSS 变量和现代 CSS 特性
- 无障碍访问标准

## 版本历史

- `v1.0.0` - 初始版本，支持基本主题切换功能
