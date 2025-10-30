# 图标系统使用指南

本项目使用统一的图标系统来管理所有 SVG 图标，所有图标都定义在 `app/utils/icons.ts` 文件中。

## 图标分类

### 1. 主题图标 (THEME_ICONS)
用于主题切换功能的图标：
- `sun`: 太阳图标 (亮色主题)
- `moon`: 月亮图标 (暗色主题)  
- `auto`: 字母A图标 (自动主题)

### 2. 导航图标 (NAVIGATION_ICONS)
用于导航菜单的图标：
- `home`: 首页图标
- `about`: 关于图标
- `docs`: 文档图标
- `blog`: 博客图标
- `contact`: 联系图标
- `external`: 外链图标
- `arrow`: 箭头图标

### 3. 用户图标 (USER_ICONS)
用于用户相关功能的图标：
- `avatar`: 用户头像图标
- `settings`: 设置图标
- `logout`: 登出图标

### 4. 状态图标 (STATUS_ICONS)
用于显示状态的图标：
- `success`: 成功图标
- `warning`: 警告图标
- `error`: 错误图标
- `info`: 信息图标

## 使用方法

### 1. 基本用法

```typescript
// 导入图标常量
import { THEME_ICONS, NAVIGATION_ICONS, USER_ICONS, STATUS_ICONS } from '~/utils/icons'

// 直接使用图标
const sunIcon = THEME_ICONS.sun
const homeIcon = NAVIGATION_ICONS.home
```

### 2. 使用便捷函数

```typescript
// 导入便捷函数
import { getThemeIcon, getNavigationIcon, getUserIcon, getStatusIcon } from '~/utils/icons'

// 获取主题图标
const themeIcon = getThemeIcon('light') // 返回太阳图标
const themeIcon2 = getThemeIcon('dark') // 返回月亮图标

// 获取导航图标
const homeIcon = getNavigationIcon('home')
const aboutIcon = getNavigationIcon('about')

// 获取用户图标
const avatarIcon = getUserIcon('avatar')
const settingsIcon = getUserIcon('settings')

// 获取状态图标
const successIcon = getStatusIcon('success')
const errorIcon = getStatusIcon('error')
```

### 3. 在 Vue 组件中使用

```vue
<template>
  <div>
    <!-- 直接在模板中使用 -->
    <span v-html="getThemeIcon(currentTheme)"></span>
    
    <!-- 使用响应式数据 -->
    <button @click="handleClick">
      <span v-html="iconData"></span>
      Click me
    </button>
  </div>
</template>

<script setup>
import { getThemeIcon, getStatusIcon } from '~/utils/icons'

// 响应式图标数据
const iconData = ref(getStatusIcon('success'))

// 函数中使用
const handleClick = () => {
  iconData.value = getStatusIcon('error')
}
</script>
```

### 4. 在 CSS 中使用 (通过 CSS 变量)

虽然图标是 SVG 字符串，但可以通过 JavaScript 动态设置：

```vue
<script setup>
import { getNavigationIcon } from '~/utils/icons'

// 设置 CSS 变量
onMounted(() => {
  document.documentElement.style.setProperty('--home-icon', `url("data:image/svg+xml,${encodeURIComponent(getNavigationIcon('home'))}")`)
})
</script>
```

## 自定义图标

### 添加新图标

在 `app/utils/icons.ts` 中添加新的图标：

```typescript
export const CUSTOM_ICONS = {
  // 新的自定义图标
  customIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- 你的 SVG 路径 -->
  </svg>`
} as const
```

### 图标设计规范

1. **尺寸**: 统一使用 `width="20" height="20"`
2. **视图框**: 使用 `viewBox="0 0 24 24"`
3. **填充**: 使用 `fill="none"` 作为默认值
4. **描边**: 使用 `stroke="currentColor"` 以便继承文字颜色
5. **描边宽度**: 统一使用 `stroke-width="2"`

### 图标命名规范

1. 使用小写字母和连字符：`home`, `user-settings`
2. 使用动作性词汇：`add`, `delete`, `edit`
3. 使用描述性词汇：`arrow-right`, `chevron-down`

## 最佳实践

1. **统一管理**: 所有图标都应该定义在 `icons.ts` 文件中
2. **类型安全**: 使用 TypeScript 类型来确保图标名称的正确性
3. **可重用性**: 避免在组件中直接写 SVG，使用图标常量
4. **一致性**: 保持图标的视觉风格统一
5. **性能**: 图标作为常量存储，避免重复创建

## 示例：更新 TopNavigation 组件

```vue
<script setup>
import { getThemeIcon } from '~/utils/icons'

const getThemeIconSvg = () => {
  return getThemeIcon(currentTheme.value)
}
</script>
```