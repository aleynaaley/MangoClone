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
      <NuxtLink 
        v-for="product in products" 
        :key="product.id"
        :to="`/product/${product.id}`" 
        style="text-decoration: none; color: inherit;"
      >
        <MoleculesProductCard 
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :has-large-size="product.hasLargeSize"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from '@/composables/useProducts'

// Ürünleri artık elle yazmıyoruz, merkezden çekiyoruz!
const { products } = useProducts()
</script>

<style scoped>
.new-now-page {
  padding: 20px 40px; 
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
  grid-template-columns: repeat(4, 1fr); 
  gap: 10px; 
}

/* Mobil uyumu */
@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>