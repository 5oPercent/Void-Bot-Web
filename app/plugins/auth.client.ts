/**
 * 认证状态检查插件
 */
export default defineNuxtPlugin(async () => {
  const { checkAuth } = useAuth()
  
  // 在客户端启动时检查认证状态
  if (process.client) {
    checkAuth()
  }
})
