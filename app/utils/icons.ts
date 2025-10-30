/**
 * 图标常量定义
 * 定义项目中使用的所有 SVG 图标
 */

// 主题相关图标
export const THEME_ICONS = {
  // 太阳图标 - 亮色主题
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 月亮图标 - 暗色主题
  moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
  </svg>`,

  // 自动图标 - 字母A样式
  auto: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L3 21h4l2-4.5h6L17 21h4L12 3zM10.1 13.5L12 9.6l1.9 3.9h-3.8z" fill="currentColor"/>
  </svg>`
} as const

// 导航相关图标
export const NAVIGATION_ICONS = {
  // 首页图标
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/>
    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 关于图标
  about: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="2"/>
    <path d="M12 17h.01" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 文档图标
  docs: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/>
    <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/>
    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/>
    <polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 博客图标
  blog: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 联系图标
  contact: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 外链图标
  external: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2"/>
    <polyline points="15,3 21,3 21,9" stroke="currentColor" stroke-width="2"/>
    <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 箭头图标
  arrow: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" stroke-width="2"/>
    <polyline points="7,7 17,7 17,17" stroke="currentColor" stroke-width="2"/>
  </svg>`
} as const

// 用户相关图标
export const USER_ICONS = {
  // 用户头像图标
  avatar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 设置图标
  settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 登出图标
  logout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" stroke-width="2"/>
    <polyline points="16,17 21,12 16,7" stroke="currentColor" stroke-width="2"/>
    <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2"/>
  </svg>`
} as const

// 状态图标
export const STATUS_ICONS = {
  // 成功图标
  success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/>
    <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 警告图标
  warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 错误图标
  error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 信息图标
  info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <path d="M12 16v-4" stroke="currentColor" stroke-width="2"/>
    <path d="M12 8h.01" stroke="currentColor" stroke-width="2"/>
  </svg>`
} as const

// 导出所有图标类型
export type ThemeIconType = keyof typeof THEME_ICONS
export type NavigationIconType = keyof typeof NAVIGATION_ICONS
export type UserIconType = keyof typeof USER_ICONS
export type StatusIconType = keyof typeof STATUS_ICONS

// 便捷函数：根据主题类型获取图标
export const getThemeIcon = (theme: string): string => {
  switch (theme) {
    case 'light':
      return THEME_ICONS.sun
    case 'dark':
    default:
      return THEME_ICONS.moon
  }
}

// 便捷函数：根据图标名称获取导航图标
export const getNavigationIcon = (iconName: NavigationIconType): string => {
  return NAVIGATION_ICONS[iconName] || ''
}

// 便捷函数：根据图标名称获取用户图标
export const getUserIcon = (iconName: UserIconType): string => {
  return USER_ICONS[iconName] || ''
}

// 便捷函数：根据图标名称获取状态图标
export const getStatusIcon = (iconName: StatusIconType): string => {
  return STATUS_ICONS[iconName] || ''
}
