<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">欢迎使用 Void Bot 程序</h1>
      <p class="hero-subtitle">这里是配置管理平台</p>
      
      <div class="navigation-cards">
        <NuxtLink to="/dashboard" class="nav-card">
          <div class="card-icon">
            <img src="/icon.svg" alt="控制台" width="40" height="40" />
          </div>
          <h3>控制台</h3>
          <p>查看系统概览和关键指标</p>
          <span class="card-arrow">→</span>
        </NuxtLink>
        
        <div class="nav-card coming-soon">
          <div class="card-icon">🛠️</div>
          <h3>系统设置</h3>
          <p>自定义系统配置和偏好</p>
          <span class="card-badge">即将推出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入页面样式
import '~/assets/css/pages/index.css'

// 设置页面元数据
useHead({
  title: '首页 - Void Bot Web',
  meta: [
    { name: 'description', content: 'Void Bot Web ' }
  ]
})
</script>
