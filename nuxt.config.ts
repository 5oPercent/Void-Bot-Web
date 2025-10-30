// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  
  // 运行时配置
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_URL_BASE
    }
  },
  
  nitro: {
    experimental: {
      wasm: false
    }
  },
  
  app: {
    head: {
      htmlAttrs: {
        class: 'dark'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'apple-touch-icon', href: '/icon.svg' }
      ]
    }
  }
})