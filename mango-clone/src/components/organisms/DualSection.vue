<template>
  <section class="dual-section">
    <div 
      v-for="(item, index) in items"  
      :key="index" 
      class="dual-column"
      :style="{ backgroundImage: `url(${item.image})` }"
    >
      <div class="content-overlay">
        <span class="column-title">{{ item.title }}</span>
        
        <a href="#" class="column-link">{{ item.linkText }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Dışarıdan 2'li veri listesi bekliyoruz
defineProps({
  items: {
    type: Array,
    required: true
    // Beklenen yapı: [{ title: '...', linkText: '...', image: '...' }, { ... }]
  }
})
</script>

<style scoped>
.dual-section {
  display: flex; /* Yan yana diz */
  width: 100%;
  height: 90vh; /* Hero section ile aynı yükseklikte olsun */
}

.dual-column {
  flex: 1; /* Mevcut alanı eşit paylaş (50% - 50%) */
  background-size: cover;
  background-position: center;
  position: relative; /* İçindeki yazıları hizalamak için referans */
  cursor: pointer;
}

.content-overlay {
  position: absolute;
  bottom: 30px; /* Alttan boşluk */
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between; /* Başlık sola, link sağa */
  align-items: flex-end;
  color: white; /* Resim koyuysa yazı beyaz olsun */
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.column-title {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.column-link {
  color: white;
  text-decoration: none;
  font-size: 11px;
  font-weight: 500;
}

/* Küçük ekranlarda (Mobil) alt alta geçsin */
@media (max-width: 768px) {
  .dual-section {
    flex-direction: column;
  }
}
</style>