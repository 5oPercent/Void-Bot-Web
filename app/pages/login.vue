<template>
  <div class="auth-container">
    <div class="auth-card">
      <!-- Logo 和主题切换 -->
      <div class="auth-logo">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">Void Bot</span>
        </NuxtLink>
        <!-- 主题切换按钮 -->
        <ThemeToggle @toggle="onThemeToggle" />
      </div>

      <div class="auth-header">
        <h1 class="auth-title">登录</h1>
        <p class="auth-subtitle">欢迎回来</p>
      </div>

      <!-- 注册成功消息 -->
      <div v-if="registrationSuccessMessage" class="success-message">
        {{ registrationSuccessMessage }}
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="username" class="form-label">用户名</label>
          <div class="username-input-wrapper">
            <input
              id="username"
              v-model="loginForm.name"
              type="text"
              class="form-input username-input"
              placeholder="请输入用户名"
              required
            />
            <span class="username-separator">#</span>
            <input
              id="suffix"
              v-model="loginForm.suffix"
              type="text"
              class="form-input suffix-input"
              placeholder="0000"
              pattern="[0-9]{4}"
              maxlength="4"
              @input="formatSuffix"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">密码</label>
          <div class="password-input-wrapper">
            <input
              id="password"
              v-model="loginForm.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="请输入密码"
              required
            />
            <button
              type="button"
              @click="togglePassword"
              class="password-toggle"
              :title="showPassword ? '隐藏密码' : '显示密码'"
            >
              <span v-if="showPassword">👁️</span>
              <span v-else>👁️‍🗨️</span>
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="checkbox-wrapper">
            <input v-model="loginForm.rememberMe" type="checkbox" class="checkbox" />
            <span class="checkbox-text">记住我</span>
          </label>
          <NuxtLink to="/forgot-password" class="forgot-link">忘记密码？</NuxtLink>
        </div>

        <!-- 错误提示 -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <button type="submit" class="auth-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '登录中...' : '登录' }}
        </button>
      </form>

      <div class="auth-footer">
        <p class="auth-switch">
          还没有账户？
          <NuxtLink to="/register" class="auth-switch-link">立即注册</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 禁用默认布局
definePageMeta({
  layout: false
})

// 设置页面元数据
useHead({
  title: '登录 - Void Bot Web',
  meta: [
    { name: 'description', content: '登录到 Void Bot Web 管理界面' }
  ]
})

// 使用认证 composable
const { login } = useAuth()

// 响应式数据
const loginForm = ref({
  name: '',
  suffix: '',
  password: '',
  rememberMe: false
})

// 获取路由参数
const route = useRoute()
const registrationSuccessMessage = ref('')

// 检查是否从注册页面跳转过来
if (route.query.registered === 'true' && route.query.username) {
  const fullUsername = route.query.username as string
  if (fullUsername.includes('#')) {
    const parts = fullUsername.split('#')
    if (parts[0]) loginForm.value.name = parts[0]
    if (parts[1]) loginForm.value.suffix = parts[1]
  }
}

const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

// 主题切换回调函数
const onThemeToggle = (theme: 'light' | 'dark') => {
  console.log('主题已切换到:', theme)
}

// 方法
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const formatSuffix = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value.replace(/\D/g, '') // 只保留数字
  loginForm.value.suffix = value.slice(0, 4) // 限制为4位
}

const handleLogin = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    
    // 使用认证 composable 进行登录
    const result = await login(loginForm.value)
    
    if (result.success) {
      // 登录成功，重定向到控制台
      await navigateTo('/dashboard')
    } else {
      errorMessage.value = result.error || '登录失败'
    }
    
  } catch (error) {
    console.error('登录失败:', error)
    errorMessage.value = '登录失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}

// 在页面卸载时清除敏感信息
onBeforeUnmount(() => {
  loginForm.value.password = ''
})
</script>

<style scoped>
@import '~/assets/css/pages/auth.css';
</style>
