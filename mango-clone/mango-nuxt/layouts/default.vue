<template>
  <div class="default-layout">
    <OrganismsHeaderComponent />
    
    <slot />
    
    <OrganismsFooterComponent />
  </div>
</template>

<script setup>
// Nuxt 3'te components klasöründeki bileşenler otomatik import edilir.
// Şimdilik boş bırakıyorum çünkü auto-import çalışacaktır.
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>