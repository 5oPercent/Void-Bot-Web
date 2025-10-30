/**
 * 主题相关的文本工具函数
 * 用于获取主题切换按钮的提示文本和相关文本内容
 */

/**
 * 获取主题切换按钮的提示文本
 * @param currentTheme 当前主题类型
 * @returns 提示文本字符串
 */
export const getThemeTitle = (currentTheme: 'light' | 'dark'): string => {
  switch (currentTheme) {
    case 'light':
      return '当前：亮色主题，点击切换到暗色主题'
    case 'dark':
      return '当前：暗色主题，点击切换到亮色主题'
    default:
      return '点击切换主题'
  }
}

/**
 * 获取主题显示名称
 * @param theme 主题类型
 * @returns 主题的中文显示名称
 */
export const getThemeDisplayName = (theme: 'light' | 'dark'): string => {
  switch (theme) {
    case 'light':
      return '亮色主题'
    case 'dark':
      return '暗色主题'
    default:
      return '未知主题'
  }
}

/**
 * 获取主题描述文本
 * @param theme 主题类型
 * @returns 主题的描述文本
 */
export const getThemeDescription = (theme: 'light' | 'dark'): string => {
  switch (theme) {
    case 'light':
      return '适合光线充足的环境使用'
    case 'dark':
      return '适合光线较暗的环境使用，减少眼部疲劳'
    default:
      return ''
  }
}
