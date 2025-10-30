/**
 * 主题管理 Composable
 * 用于管理应用的亮色/暗色主题切换
 */
export const useTheme = () => {
  const isDark = ref(true) // 默认为暗色主题
  const currentTheme = ref<'light' | 'dark'>('dark') // 默认为暗色主题

  // 切换主题
  const toggleTheme = () => {
    if (currentTheme.value === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  // 设置主题
  const setTheme = (theme: 'light' | 'dark') => {
    currentTheme.value = theme
    
    // 设置数据属性
    document.documentElement.setAttribute('data-theme', theme)
    
    isDark.value = theme === 'dark'
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }

  // 初始化主题
  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme)
      } else {
        // 默认使用暗色主题
        setTheme('dark')
      }
    }
  }

  return {
    isDark: readonly(isDark),
    currentTheme: readonly(currentTheme),
    toggleTheme,
    setTheme,
    initTheme
  }
}
