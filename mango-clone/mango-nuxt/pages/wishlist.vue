<template>
  <div class="wishlist-page">
    <h1 class="page-title">FAVORİLERİM ({{ wishlistStore.totalItems }})</h1>

    <div v-if="wishlistStore.items.length > 0" class="wishlist-grid">
      <div v-for="product in wishlistStore.items" :key="product.id" class="wishlist-item">
        
        <NuxtLink :to="`/product/${product.id}`" class="image-wrapper">
          <img :src="product.image" :alt="product.title" />
          <button @click.prevent="wishlistStore.removeFromWishlist(product.id)" class="remove-btn">✕</button>
        </NuxtLink>

        <div class="item-info">
          <h3 class="title">{{ product.title }}</h3>
          <p class="price">{{ product.formattedPrice }}</p>
          <button @click="addToCart(product)" class="add-btn">SEPETE EKLE</button>
        </div>

      </div>
    </div>

    <div v-else class="empty-state">
      <p>Henüz favori ürününüz yok.</p>
      <NuxtLink to="/" class="start-shopping">Alışverişe Başla</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart'

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

const addToCart = (product: any) => {
  cartStore.addToCart(product)
  alert('Ürün sepete eklendi')
}
</script>

<style scoped>
.wishlist-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.page-title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
}

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4'lü yan yana */
  gap: 30px;
}

.wishlist-item {
  position: relative;
}

.image-wrapper {
  position: relative;
  display: block;
  margin-bottom: 15px;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
}

.title {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.price {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
}

.add-btn {
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.empty-state {
  text-align: center;
  margin-top: 50px;
}

.start-shopping {
  text-decoration: underline;
  color: black;
  font-weight: bold;
}

@media (max-width: 768px) {
  .wishlist-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>