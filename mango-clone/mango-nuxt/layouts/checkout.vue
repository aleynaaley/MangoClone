<template>
  <div class="checkout-layout">
    
    <header class="simple-header">
      <NuxtLink to="/" class="logo-area">
        <AtomsSiteLogo /> 
      </NuxtLink>
    </header>

    <div class="content">
      <slot />
    </div>

    <footer class="simple-footer">
      <p>Tüm hakları saklıdır © 2025 Mango Clone</p>
    </footer>

  </div>
</template>

<script setup>
// Nuxt otomatik bulacaktır ama bulamazsa burayı açabilirsin:
// import SiteLogo from '@/components/atoms/SiteLogo.vue'
</script>

<style scoped>
.checkout-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.simple-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
}

/* Nuxt otomatik importta isimlendirmeye göre AtomsSiteLogo veya SiteLogo olabilir. 
   Eğer logo görünmezse <SiteLogo /> olarak değiştir. */

.content {
  flex: 1; /* İçeriği yay */
}

.simple-footer {
  text-align: center;
  padding: 20px;
  font-size: 11px;
  color: #999;
  border-top: 1px solid #eee;
}
</style>