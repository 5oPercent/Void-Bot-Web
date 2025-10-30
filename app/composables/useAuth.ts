/**
 * 用户认证状态管理
 */

import type { LoginApiResponse, RegisterApiResponse } from '../../types/api'
import { appConfig } from '../utils/config'

export interface User {
  username: string
  avatar?: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  refreshToken?: string | null
}

const useAuth = () => {
  // 使用 useState 来管理全局认证状态
  const authState = useState<AuthState>('auth.state', () => ({
    isAuthenticated: false,
    user: null,
    token: null,
    refreshToken: null
  }))

  // 登录
  const login = async (credentials: { name: string; suffix: string; password: string; rememberMe?: boolean }) => {
    try {
      // 构建API URL
      const apiUrl = `${appConfig.api.baseUrl}${appConfig.api.endpoints.login}`
      
      const result: LoginApiResponse = await $fetch(apiUrl, {
        method: 'GET',
        query: {
          Name: credentials.name,
          Suffix: credentials.suffix,
          Password: credentials.password
        },
        server: true
      })
      
      // 检查 API 返回的状态码
      if (result.code === 200 && result.data && result.data.accessToken) {
        const user: User = {
          username: credentials.name + '#' + credentials.suffix,
          avatar: ''
        }
        
        const token = result.data.accessToken
        const refreshToken = result.data.refreshToken
        
        // 更新认证状态
        authState.value = {
          isAuthenticated: true,
          user: user,
          token: token,
          refreshToken: refreshToken
        }
        
        // 如果选择记住我，保存到 localStorage
        if (credentials.rememberMe && process.client) {
          const authData = {
            user: user,
            token: token,
            refreshToken: refreshToken,
            timestamp: Date.now()
          }
          localStorage.setItem('voidbot_auth', JSON.stringify(authData))
        }
        
        return { success: true, user: user }
      } else {
        // 根据返回的消息显示错误
        const errorMessage = result.message || '登录失败，请检查用户名、后缀和密码'
        return { success: false, error: errorMessage }
      }
      
    } catch (error: any) {
      console.error('登录失败:', error)
      
      // 处理不同类型的错误
      if (error?.message?.includes('CORS') || error?.message?.includes('Network')) {
        return { success: false, error: '网络连接错误，请检查服务器状态' }
      } else if (error?.status === 401) {
        return { success: false, error: '用户名、后缀或密码错误' }
      } else if (error?.status === 403) {
        return { success: false, error: '访问被拒绝，请联系管理员' }
      } else if (error?.status >= 500) {
        return { success: false, error: '服务器内部错误，请稍后重试' }
      }
      
      return { success: false, error: error?.message || '登录失败，请检查网络连接或稍后重试' }
    }
  }

  // 注册
  const register = async (userData: { username: string; password: string }) => {
    try {
      // 构建API URL - 使用服务器端代理路由
      const apiUrl = `${appConfig.api.baseUrl}${appConfig.api.endpoints.register}`
      
      const result: RegisterApiResponse = await $fetch(apiUrl, {
        method: 'POST',
        body: {
          name: userData.username,
          password: userData.password
        },
        server: true
      })
      
      // 注册成功处理
      if (result && result.code === 200 && result.data) {
        const userData = result.data
        const fullDisplayName = userData.displayName || `${userData.name}#${userData.suffix}`
        
        return { 
          success: true,
          data: {
            id: userData.id,
            name: userData.name,
            suffix: userData.suffix,
            displayName: fullDisplayName
          }
        }
      } else {
        return { 
          success: false, 
          error: result?.message || '注册失败，请检查输入信息' 
        }
      }
      
    } catch (error: any) {
      console.error('注册失败:', error)
      
      // 处理不同类型的错误
      if (error?.status === 400) {
        return { success: false, error: '用户名或密码格式不正确' }
      } else if (error?.status === 409) {
        return { success: false, error: '用户名已存在，请选择其他用户名' }
      } else if (error?.status >= 500) {
        return { success: false, error: '服务器内部错误，请稍后重试' }
      }
      
      return { 
        success: false, 
        error: error?.message || error?.data?.message || '注册失败，请稍后重试' 
      }
    }
  }

  // 退出登录
  const logout = () => {
    authState.value = {
      isAuthenticated: false,
      user: null,
      token: null,
      refreshToken: null
    }
    
    // 清除本地存储
    if (process.client) {
      localStorage.removeItem('voidbot_auth')
    }
  }

  // 检查认证状态
  const checkAuth = () => {
    if (process.client) {
      const savedAuth = localStorage.getItem('voidbot_auth')
      if (savedAuth) {
        try {
          const authData = JSON.parse(savedAuth)
          const isExpired = Date.now() - authData.timestamp > 7 * 24 * 60 * 60 * 1000 // 7天过期
          
          if (!isExpired && authData.user && authData.token) {
            authState.value = {
              isAuthenticated: true,
              user: authData.user,
              token: authData.token,
              refreshToken: authData.refreshToken || null
            }
          } else {
            localStorage.removeItem('voidbot_auth')
          }
        } catch (error) {
          console.error('解析认证数据失败:', error)
          localStorage.removeItem('voidbot_auth')
        }
      }
    }
  }

  return {
    // 状态
    authState: readonly(authState),
    
    // 计算属性
    isAuthenticated: computed(() => authState.value.isAuthenticated),
    user: computed(() => authState.value.user),
    token: computed(() => authState.value.token),
    refreshToken: computed(() => authState.value.refreshToken),
    
    // 方法
    login,
    register,
    logout,
    checkAuth
  }
}

export default useAuth