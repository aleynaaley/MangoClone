<template>
  <div class="product-detail-page">
    
    <div v-if="product" class="detail-container">
      <div class="image-section">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="info-section">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">{{ product.formattedPrice }}</p>
        <p class="product-desc">{{ product.description }}</p>

        <button @click="handleAddToCart" class="add-to-cart-btn">
          SEPETE EKLE
        </button>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Ürün bulunamadı</h2>
      <NuxtLink to="/">Ana Sayfaya Dön</NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProducts } from '@/composables/useProducts'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const route = useRoute()
const { getProductById } = useProducts()

// ID'yi güvenli bir şekilde al
// Bazen route.params.id dizi olarak gelebilir, onu kontrol ediyoruz.
const rawId = route.params.id
const productId = Array.isArray(rawId) ? rawId[0] : rawId

console.log("Sayfa ID'si:", productId) // Konsoldan kontrol et

// Ürünü bul
const product = getProductById(productId)

const handleAddToCart = () => {
  if (product) {
    cartStore.addToCart(product)
    alert('Ürün sepete eklendi!')
  }
}
</script>

<style scoped>
/* Tasarım kodların aynen kalabilir */
.product-detail-page { padding: 40px; max-width: 1200px; margin: 0 auto; }
.detail-container { display: flex; gap: 50px; }
.image-section img { width: 100%; max-width: 500px; object-fit: cover; }
.info-section { flex: 1; padding-top: 20px; }
.product-title { font-size: 24px; font-weight: 400; text-transform: uppercase; }
.product-price { font-size: 18px; font-weight: 600; margin: 20px 0; }
.add-to-cart-btn {
  width: 100%; background-color: black; color: white; padding: 16px;
  font-weight: 700; border: none; cursor: pointer; margin-top: 20px;
}
.not-found { text-align: center; padding: 50px; }
</style>