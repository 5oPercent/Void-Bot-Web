/**
 * 认证中间件示例
 * 可以在需要认证的页面使用
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // 这里可以添加认证逻辑
  // 例如检查用户是否已登录
  
  // 示例：如果用户未登录，重定向到登录页
  // if (!isAuthenticated()) {
  //   return navigateTo('/login')
  // }
  
  console.log(`从 ${from.path} 导航到 ${to.path}`)
})
