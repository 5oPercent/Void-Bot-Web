/**
 * 主题初始化插件
 * 在应用启动时初始化主题设置
 */
export default defineNuxtPlugin(() => {
  if (process.client) {
    // 从本地存储获取主题设置
    const savedTheme = localStorage.getItem('theme')
    
    // 应用主题 - 默认为暗色模式
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.classList.remove('dark')
    } else {
      // 任何其他情况都使用暗色主题（包括 'dark' 或无设置）
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
})
