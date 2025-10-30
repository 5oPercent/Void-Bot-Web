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
        <h1 class="auth-title">注册</h1>
        <p class="auth-subtitle">加入 Void Bot 社区</p>
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="username" class="form-label">用户名</label>
          <input
            id="username"
            v-model="registerForm.username"
            type="text"
            class="form-input"
            placeholder="请输入用户名"
            required
            minlength="3"
            maxlength="20"
          />
          <small class="form-hint">用户名长度为 3-20 个字符</small>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">密码</label>
          <div class="password-input-wrapper">
            <input
              id="password"
              v-model="registerForm.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="请输入密码"
              required
              minlength="8"
              :class="{ 'error': passwordValidationErrors.length > 0 && registerForm.password }"
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
          
          <!-- 密码要求提示 -->
          <div class="password-requirements">
            <small class="form-hint">密码要求：</small>
            <ul class="requirements-list">
              <li :class="{ 'valid': passwordChecks.minLength, 'invalid': !passwordChecks.minLength && registerForm.password }">
                <span class="check-icon">{{ passwordChecks.minLength ? '✓' : '✗' }}</span>
                至少 8 个字符
              </li>
              <li :class="{ 'valid': passwordChecks.hasUppercase, 'invalid': !passwordChecks.hasUppercase && registerForm.password }">
                <span class="check-icon">{{ passwordChecks.hasUppercase ? '✓' : '✗' }}</span>
                包含大写字母
              </li>
              <li :class="{ 'valid': passwordChecks.hasLowercase, 'invalid': !passwordChecks.hasLowercase && registerForm.password }">
                <span class="check-icon">{{ passwordChecks.hasLowercase ? '✓' : '✗' }}</span>
                包含小写字母
              </li>
              <li :class="{ 'valid': passwordChecks.hasDigit, 'invalid': !passwordChecks.hasDigit && registerForm.password }">
                <span class="check-icon">{{ passwordChecks.hasDigit ? '✓' : '✗' }}</span>
                包含数字
              </li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label for="confirmPassword" class="form-label">确认密码</label>
          <div class="password-input-wrapper">
            <input
              id="confirmPassword"
              v-model="registerForm.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="请再次输入密码"
              required
              :class="{ 'error': passwordMismatch }"
            />
            <button
              type="button"
              @click="toggleConfirmPassword"
              class="password-toggle"
              :title="showConfirmPassword ? '隐藏密码' : '显示密码'"
            >
              <span v-if="showConfirmPassword">👁️</span>
              <span v-else>👁️‍🗨️</span>
            </button>
          </div>
          <small v-if="passwordMismatch" class="form-error">密码不一致</small>
        </div>

        <div class="form-group">
          <label class="checkbox-wrapper">
            <input v-model="registerForm.agreeTerms" type="checkbox" class="checkbox" required />
            <span class="checkbox-text">
              我已阅读并同意
              <NuxtLink to="/terms" class="terms-link">用户协议</NuxtLink>
              和
              <NuxtLink to="/privacy" class="terms-link">隐私政策</NuxtLink>
            </span>
          </label>
        </div>

        <!-- 成功消息 -->
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>

        <!-- 错误提示 -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <button 
          type="submit" 
          class="auth-button" 
          :disabled="isLoading || !isFormValid"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '注册中...' : '立即注册' }}
        </button>
      </form>

      <div class="auth-footer">
        <p class="auth-switch">
          已有账户？
          <NuxtLink to="/login" class="auth-switch-link">立即登录</NuxtLink>
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
  title: '注册 - Void Bot Web',
  meta: [
    { name: 'description', content: '注册 Void Bot Web 账户' }
  ]
})

// 使用认证 composable
const { register } = useAuth()

// 响应式数据
const registerForm = ref({
  username: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// 主题切换回调函数
const onThemeToggle = (theme: 'light' | 'dark') => {
  console.log('主题已切换到:', theme)
}

// 密码验证规则
const passwordChecks = computed(() => {
  const password = registerForm.value.password
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasDigit: /\d/.test(password)
  }
})

// 密码验证错误列表
const passwordValidationErrors = computed(() => {
  const errors = []
  const checks = passwordChecks.value
  
  if (registerForm.value.password) {
    if (!checks.minLength) errors.push('密码至少需要8个字符')
    if (!checks.hasUppercase) errors.push('密码必须包含大写字母')
    if (!checks.hasLowercase) errors.push('密码必须包含小写字母') 
    if (!checks.hasDigit) errors.push('密码必须包含数字')
  }
  
  return errors
})

// 密码是否有效
const isPasswordValid = computed(() => {
  const checks = passwordChecks.value
  return checks.minLength && checks.hasUppercase && checks.hasLowercase && checks.hasDigit
})

// 计算属性
const passwordMismatch = computed(() => {
  return registerForm.value.confirmPassword && 
         registerForm.value.password !== registerForm.value.confirmPassword
})

const isFormValid = computed(() => {
  return registerForm.value.username &&
         registerForm.value.password &&
         registerForm.value.confirmPassword &&
         isPasswordValid.value &&
         !passwordMismatch.value &&
         registerForm.value.agreeTerms
})

// 方法
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleRegister = async () => {
  if (!isFormValid.value) {
    return
  }

  try {
    isLoading.value = true
    errorMessage.value = ''
    
    // 使用认证 composable 进行注册
    const result = await register({
      username: registerForm.value.username,
      password: registerForm.value.password
    })
    
    if (result.success) {
      // 显示成功消息，包含完整的用户名和后缀
      successMessage.value = `注册成功, 您的完整用户名是：${result.data?.displayName}，稍后跳转到登录页面。`
      
      // 等待用户看到消息后再重定向
      setTimeout(async () => {
        await navigateTo('/login?registered=true&username=' + encodeURIComponent(result.data?.displayName || ''))
      }, 3000) // 3秒后重定向
      
    } else {
      // 处理特定的密码错误消息
      let errorMsg = result.error || '注册失败'
      
      // 如果是密码相关错误，显示友好提示
      if (errorMsg.includes('Password must')) {
        errorMsg = '密码必须包含大写字母、小写字母和数字'
      }
      
      errorMessage.value = errorMsg
    }
    
  } catch (error) {
    console.error('注册失败:', error)
    errorMessage.value = '注册失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}

// 在页面卸载时清除敏感信息
onBeforeUnmount(() => {
  registerForm.value.password = ''
  registerForm.value.confirmPassword = ''
})
</script>

<style scoped>
@import '~/assets/css/pages/auth.css';
</style>
