// https://nuxt.com/docs/api/configuration/nuxt-config

// State Management (Veri Yönetimi) için Pinia kütüphanesini kullanıyoruz.

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true } //şu sitedeki vue devtool'u aktifleştirmek için 
  
})
