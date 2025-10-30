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
        <h1 class="auth-title">重置密码</h1>
        <p class="auth-subtitle">输入你的邮箱地址，我们将发送重置链接</p>
      </div>

      <form @submit.prevent="handleForgotPassword" class="auth-form">
        <div class="form-group">
          <label for="email" class="form-label">邮箱地址</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input"
            placeholder="请输入注册时使用的邮箱"
            required
          />
        </div>

        <!-- 成功消息 -->
        <div v-if="message" class="success-message">
          {{ message }}
        </div>

        <!-- 错误提示 -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <button type="submit" class="auth-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '发送中...' : '发送重置链接' }}
        </button>
      </form>

      <div class="auth-footer">
        <p class="auth-switch">
          记起密码了？
          <NuxtLink to="/login" class="auth-switch-link">返回登录</NuxtLink>
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
  title: '忘记密码 - Void Bot Web',
  meta: [
    { name: 'description', content: '重置 Void Bot Web 账户密码' }
  ]
})

// 使用认证 composable
const { forgotPassword } = useAuth()

// 响应式数据
// 响应式数据
const email = ref('')
const isLoading = ref(false)
const message = ref('')
const errorMessage = ref('')

// 主题切换回调函数
const onThemeToggle = (theme: 'light' | 'dark') => {
  console.log('主题已切换到:', theme)
}

// 方法
const handleForgotPassword = async () => {
  try {
    isLoading.value = true
    message.value = ''
    errorMessage.value = ''
    
    // 使用认证 composable 发送重置邮件
    const result = await forgotPassword(email.value)
    
    if (result.success) {
      message.value = result.message || `重置链接已发送到 ${email.value}，请检查您的邮箱`
    } else {
      errorMessage.value = result.error || '发送失败'
    }
    
  } catch (error) {
    console.error('发送重置邮件失败:', error)
    errorMessage.value = '发送失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@import '~/assets/css/pages/auth.css';
</style>
