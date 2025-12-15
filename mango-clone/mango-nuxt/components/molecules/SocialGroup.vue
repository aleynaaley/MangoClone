<template>
  <div class="social-links">
    <a 
      v-for="network in networks" 
      :key="network" 
      href="#" 
      class="social-link"
    >
      {{ network }}
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Verileri burada tutuyoruz, Footer'ı kirletmiyoruz
const networks = ref([
  'INSTAGRAM', 
  'FACEBOOK', 
  'YOUTUBE', 
  'TIKTOK', 
  'SPOTIFY', 
  'PINTEREST', 
  'X', 
  'LINKEDIN'
])
</script>

<style scoped>
.social-links {
  display: flex;
  justify-content: center; /* Ortala */
  flex-wrap: wrap; /* Mobilde sığmazsa aşağı geçsin */
  gap: 20px; /* Linkler arası boşluk */
  margin-top: 10px;
}

.social-link {
  color: black;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500; /* Biraz kalın */
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.social-link:hover {
  opacity: 0.6; /* Üzerine gelince hafif soluklaşsın */
}
</style>