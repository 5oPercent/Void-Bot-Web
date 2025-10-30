/**
 * ThemeToggle 组件类型定义
 */

export interface ThemeToggleProps {
  /** 是否显示文字标签 */
  showLabel?: boolean
  /** 按钮尺寸 */
  size?: 'normal' | 'small'
  /** 自定义样式类名 */
  customClass?: string
}

export interface ThemeToggleEmits {
  /** 主题切换事件 */
  toggle: [theme: 'light' | 'dark']
}

export type ThemeType = 'light' | 'dark'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    ThemeToggle: import('vue').DefineComponent<ThemeToggleProps>
  }
}

export {}
