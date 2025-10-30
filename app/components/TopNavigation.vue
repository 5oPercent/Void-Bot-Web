<template>
  <nav class="top-navigation">
    <div class="nav-container">
      <!-- 左侧 Logo -->
      <div class="nav-logo">
        <NuxtLink :to="appConfig.navigation.logo.url" class="logo-link">
          <span class="logo-text">{{ appConfig.navigation.logo.text }}</span>
        </NuxtLink>
      </div>

      <!-- 中间菜单项 -->
      <div class="nav-menu">
        <template v-for="item in appConfig.navigation.menuItems" :key="item.name">
          <NuxtLink 
            v-if="item.path.startsWith('/')" 
            :to="item.path" 
            class="nav-item" 
            :class="{ active: $route.path === item.path }"
          >
            <span v-if="item.icon && item.icon.trim()" class="nav-icon">{{ item.icon }}</span>
            {{ item.name }}
          </NuxtLink>
          <a 
            v-else 
            :href="item.path" 
            class="nav-item"
          >
            <span v-if="item.icon && item.icon.trim()" class="nav-icon">{{ item.icon }}</span>
            {{ item.name }}
          </a>
        </template>
      </div>

      <!-- 右侧操作区 -->
      <div class="nav-actions">
        <!-- 主题切换按钮 -->
        <ThemeToggle size="small" @toggle="onThemeToggle" />
        
        <!-- 认证状态显示 -->
        <div v-if="isAuthenticated" class="user-info">
          <div class="user-avatar">
            <span class="avatar-text">{{ userName.charAt(0).toUpperCase() }}</span>
          </div>
          <span class="user-name">{{ userName }}</span>
          <button @click="handleLogout" class="logout-btn" title="退出登录">
            <span>退出</span>
          </button>
        </div>
        
        <!-- 未登录时显示登录注册链接 -->
        <div v-else class="auth-links">
          <NuxtLink to="/login" class="auth-link">登录</NuxtLink>
          <NuxtLink to="/register" class="auth-link register">注册</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// 导入应用配置
import { appConfig } from '~/utils/config'

// 使用认证状态管理
const { isAuthenticated, user, logout } = useAuth()

// 计算属性
const userName = computed(() => user.value?.username || '用户')

// 主题切换回调函数
const onThemeToggle = (theme: 'light' | 'dark') => {
  console.log('导航栏主题已切换到:', theme)
}

// 处理退出登录
const handleLogout = () => {
  logout()
  // 重定向到首页
  navigateTo('/')
}
</script>

<style scoped>
@import '~/assets/css/components/TopNavigation.css';
</style>
