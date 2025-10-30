<template>
  <div class="app-layout">
    <TopNavigation />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
// 初始化主题
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.main-content {
  padding-top: 64px; /* 为固定的顶部导航留出空间 */
  min-height: calc(100vh - 64px);
}
</style>
