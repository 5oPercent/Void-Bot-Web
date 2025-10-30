/**
 * 应用配置
 */
export const appConfig = {
  name: 'Void Bot Web',
  version: '1.0.0',
  description: 'Void Bot 的 Web 管理界面',
  author: 'Void Bot Team',
  
  // 主题配置
  theme: {
    defaultMode: 'dark' as 'light' | 'dark',
    enableSystemPreference: false,
  },
  
  // 导航配置
  navigation: {
    logo: {
      text: 'Void Bot',
      url: '/'
    },
    menuItems: [
      { name: '首页', path: '/', icon: '' },
      { name: '控制台', path: '/dashboard', icon: '' },
      { name: '文档', path: '#', icon: '' },
      { name: '关于', path: '/error', icon: '' }
    ],
    authItems: [
      { name: '登录', path: '/login', icon: '' },
      { name: '注册', path: '/register', icon: '' }
    ]
  },
  
  // API 配置 - 统一使用服务器端代理
  api: {
    baseUrl: '/api/proxy',  // 使用服务器端代理路由
    timeout: 15000,
    endpoints: {
      login: '/api/Identity/login',
      register: '/api/Identity/register',
      logout: '/api/Identity/logout',
      forgotPassword: '/api/Identity/forgot-password'
    }
  }
}
