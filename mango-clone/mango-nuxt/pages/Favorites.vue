<template>
  <div class="fav-page">
    
    <div class="page-header">
      <h1 class="page-title">FAVORİ ÜRÜNLERİM</h1>
      <p class="page-subtitle">En beğendiğiniz ürünler</p>
    </div>

    <div class="product-grid">
      <ProductCard 
        v-for="product in favProducts" 
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :has-large-size="product.hasLargeSize"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/molecules/ProductCard.vue'

// Sanki veritabanından gelmiş gibi
const favProducts = ref([
  { 
    id: 1, 
    title: 'Kadife detaylı kürk yakalı parka', 
    price: '4.799,99 TL', 
    hasLargeSize: false, 
    image: '/images/kadın1.jpeg' 
  },
  { 
    id: 2, 
    title: 'Çizgili triko kazak', 
    price: '2.299,99 TL', 
    hasLargeSize: false, 
    image: '/images/kadın9.jpeg' 
  },

])
</script>

<style scoped>
.fav-page {
  padding: 40px; /* Kenar boşlukları */
  min-height: 60vh; /* Sayfa boşsa bile biraz yükseklik olsun */
}

.page-header {
  margin-bottom: 40px;
}

.page-title {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

.page-subtitle {
  font-size: 12px;
  color: #666;
}

/* Ürün Izgarası (Grid) */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 Sütunlu yapı */
  gap: 20px; /* Kartlar arası boşluk */
}

/* Mobil için ayar (Ekran küçülürse 2 sütuna düşsün) */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>