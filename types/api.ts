/**
 * API 响应类型定义
 */

export interface ApiResponse<T = any> {
  data: T
  code: number
  message: string
}

export interface LoginData {
  accessToken: string
  refreshToken: string
}

export interface LoginApiResponse extends ApiResponse<LoginData> {
  data: LoginData
}

export interface RegisterUserData {
  id: string
  name: string
  suffix: string
  displayName: string
  level: number
  source: number
  createdAt: string
  updatedAt: string
  thirdParties: any[]
}

export interface RegisterApiResponse extends ApiResponse<RegisterUserData> {
  data: RegisterUserData
}
