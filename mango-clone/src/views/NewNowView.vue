<template>
  <div class="new-now-page">
    <div class="page-header">
      <h1 class="page-title">WHAT'S NEW</h1>
      
      <div class="toolbar">
        <span class="filter-text">FİLTRELE VE SIRALA</span>
        <div class="view-options">
          <span class="icon">☐</span>
          <span class="icon">⚏</span>
        </div>
      </div>
    </div>

    <div class="product-grid">
      <router-link 
        v-for="product in products" 
        :key="product.id"
        :to="`/product/${product.id}`" 
        style="text-decoration: none; color: inherit;"
      >
        <ProductCard 
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :has-large-size="product.hasLargeSize"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/molecules/ProductCard.vue'


const products = ref([
  { id: 1, title: 'Çizgili triko kazak', price: '2.299,99', hasLargeSize: false, image: '/images/kadın5.jpeg' },
  { id: 2, title: 'Düşük belli barrel jean', price: '2.299,99', hasLargeSize: false, image: '/images/kadın6.jpeg'},
  { id: 3, title: 'Geniş kesimli cepli gömlek', price: '2.299,99', hasLargeSize: false, image: '/images/kadın7.jpeg' },
  { id: 4, title: 'Kemerli Manteco yünlü palto', price: '8.999,99', hasLargeSize: true, image: '/images/kadın8.jpeg' },
])
</script>

<style scoped>
.new-now-page {
  padding: 20px 40px; /* Sayfa kenar boşlukları */
}

.page-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 500;
}

.product-grid {
  display: grid;
  /* 4 Sütunlu Grid yapısı */
  grid-template-columns: repeat(4, 1fr); 
  gap: 10px; /* Kartlar arası boşluk */
}

/* Mobil uyumu için */
@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>