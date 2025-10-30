/**
 * 服务器端API代理路由
 * 处理所有 /api/proxy/* 的请求，转发到实际的API服务器
 * 解决跨域问题，支持开发和生产环境
 */

export default defineEventHandler(async (event) => {
  // 获取动态路径参数
  const path = getRouterParam(event, 'path') || ''
  const query = getQuery(event)
  const method = getMethod(event)
  
  // 读取请求体（仅对非GET请求）
  let body = null
  if (method !== 'GET' && method !== 'HEAD') {
    try {
      body = await readBody(event)
    } catch (error) {
      console.warn('Failed to read request body:', error)
    }
  }
  
  // 从运行时配置获取目标API服务器地址
  const config = useRuntimeConfig()

  if (!config.public.apiBaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'API base URL not configured in runtime config'
    })
  }
  
  // 构建目标URL
  const targetUrl = `${config.public.apiBaseUrl}/${path}`
  
  console.log(`[API Proxy] ${method} ${event.node.req.url} -> ${targetUrl}`)
  
  try {
    // 获取原始请求头
    const headers = getHeaders(event)
    
    // 准备转发的请求头，移除一些不必要的头部
    const forwardHeaders = {
      'Content-Type': headers['content-type'] || 'application/json',
      'Accept': headers.accept || 'application/json',
      'User-Agent': headers['user-agent'] || 'Nuxt-Proxy/1.0',
      // 如果有授权头部，也要转发
      ...(headers.authorization && { 'Authorization': headers.authorization }),
      // 转发其他可能需要的头部
      ...(headers['x-requested-with'] && { 'X-Requested-With': headers['x-requested-with'] })
    }
    
    // 发起代理请求
    const response = await $fetch(targetUrl, {
      method,
      query,
      body,
      headers: forwardHeaders,
      // 设置超时时间
      timeout: 30000,
      // 处理错误响应
      onResponseError({ response }) {
        console.error(`[API Proxy Error] ${response.status} ${response.statusText}`)
      }
    })
    
    // 记录成功的请求
    console.log(`[API Proxy Success] ${method} ${targetUrl} - 200`)
    
    return response
    
  } catch (error: any) {
    // 记录错误信息
    console.error(`[API Proxy Error] ${method} ${targetUrl}:`, {
      status: error.status || error.statusCode,
      message: error.message,
      data: error.data
    })
    
    // 返回适当的错误响应
    throw createError({
      statusCode: error.status || error.statusCode || 500,
      statusMessage: error.statusText || error.message || 'Proxy request failed',
      data: error.data || null
    })
  }
})