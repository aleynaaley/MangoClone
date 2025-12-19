<template>
  <div class="new-now-page">
    <div class="page-header">
      <h2 class="page-title">WHAT'S NEW</h2>
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
          :price="product.formattedPrice" 
          :has-large-size="product.hasLargeSize"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProducts } from '@/composables/useProducts'

const { products, fetchProducts } = useProducts()

onMounted(() => {
  // Sadece "NEW NOW" etiketli olanları getir diyoruz
  fetchProducts('NEW NOW') 
})
</script>

<style scoped>
.new-now-page { padding: 20px 40px; }
.product-grid { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
}
@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>