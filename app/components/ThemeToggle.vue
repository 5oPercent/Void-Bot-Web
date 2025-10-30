<template>
  <button 
    @click="handleToggle" 
    class="theme-toggle" 
    :title="getThemeTitleText()"
    :class="{ 'compact': size === 'small' }"
  >
    <span class="theme-icon" v-html="getThemeIconSvg()"></span>
    <span v-if="showLabel" class="theme-label">{{ getThemeDisplayName(currentTheme) }}</span>
  </button>
</template>

<script setup lang="ts">
/**
 * ThemeToggle 主题切换组件
 * 可复用的主题切换按钮组件
 */

// 组件 Props
interface Props {
  /** 是否显示文字标签 */
  showLabel?: boolean
  /** 按钮尺寸 */
  size?: 'normal' | 'small'
  /** 自定义样式类名 */
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  showLabel: false,
  size: 'normal',
  customClass: ''
})

// 组件 Emits
const emit = defineEmits<{
  toggle: [theme: 'light' | 'dark']
}>()

// 使用主题管理 composable
const { currentTheme, toggleTheme } = useTheme()

// 导入工具函数
const { getThemeIcon } = await import('~/utils/icons')
const { getThemeTitle, getThemeDisplayName } = await import('~/utils/theme')

// 获取主题图标
const getThemeIconSvg = () => {
  return getThemeIcon(currentTheme.value)
}

// 获取主题提示文本
const getThemeTitleText = () => {
  return getThemeTitle(currentTheme.value)
}

// 处理主题切换
const handleToggle = () => {
  toggleTheme()
  emit('toggle', currentTheme.value)
}
</script>

<style scoped>
@import '~/assets/css/components/ThemeToggle.css';
</style>
