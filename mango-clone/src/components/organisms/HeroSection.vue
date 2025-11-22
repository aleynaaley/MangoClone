<template>
  <section class="hero-section" :style="{ backgroundImage: `url(${backgroundImage})` }">
    
    <div class="hero-content" :class="{ 'text-white': isTextWhite }">
      <h2 class="hero-title">{{ title }}</h2>
      
      <p class="hero-subtitle">{{ subtitle }}</p>
      
      <BaseButton v-if="buttonText" class="hero-button">
        {{ buttonText }}
      </BaseButton>
    </div>

  </section>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'

// İŞTE HOCANIN İSTEDİĞİ KISIM: PROPS TANIMLAMASI
// Bu bileşen dışarıdan bu verileri bekliyor.
defineProps({
  backgroundImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'DAHA FAZLASINI KEŞFET'
  },
  isTextWhite: { // Yazılar beyaz mı olsun siyah mı?
    type: Boolean,
    default: true 
  }
})
</script>

<style scoped>
.hero-section {
  width: 100%;
  height: 90vh; /* Ekranın %90'ını kapla (Mango tarzı) */
  background-size: cover; /* Resmi kutuya sığdır */
  background-position: center;
  display: flex;
  align-items: center; /* İçeriği dikey ortala */
  justify-content: center; /* İçeriği yatay ortala */
  position: relative;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero-title {
  font-size: 56px; /* Büyük başlık */
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

/* Eğer metin beyaz olsun denirse bu class çalışacak */
.text-white {
  color: white;
}

/* BaseButton'a özel stil eklemesi */
.hero-button {
  background-color: transparent; /* Şeffaf arka plan */
  color: inherit; /* Yazı rengini ebeveyninden al */
  border: 1px solid currentColor; /* Kenarlığı yazı rengiyle aynı yap */
  padding: 12px 30px;
  font-size: 13px;
}

.hero-button:hover {
  background-color: white;
  color: black;
}
</style>