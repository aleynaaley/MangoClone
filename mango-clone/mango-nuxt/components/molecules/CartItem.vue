<template>
  <div class="cart-item">

    <div class="image-container">
      <NuxtLink :to="`/product/${item.id}`">
        <img :src="item.image" :alt="item.title" class="product-image" />
      </NuxtLink>
      <button class="remove-btn" @click="$emit('remove')">✕</button>
    </div>

    <div class="product-info">

      <div class="info-top">
        <h3 class="product-title">{{ item.title }}</h3>

        <button class="wishlist-icon" @click="wishlistStore.toggleWishlist(item)">
          {{ wishlistStore.isInWishlist(item.id) ? '♥' : '♡' }}
        </button>

      </div>

      <p class="product-price">{{ item.formattedPrice }}</p>

      <div class="controls">
        <div class="quantity-selector">
          <button class="qty-btn" @click="$emit('decrease')">−</button>

          <span class="qty-val">{{ item.quantity }}</span>

          <button class="qty-btn" @click="$emit('increase')">+</button>
        </div>

        <span class="separator">|</span>
        <span class="option">{{ item.sizes && item.sizes[0] ? item.sizes[0] : 'Std' }}</span>
        <span class="separator">|</span>
        <span class="option">{{ item.colors && item.colors[0] ? item.colors[0] : 'Std' }}</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '@/types'
import { useWishlistStore } from '@/stores/wishlist'
const wishlistStore = useWishlistStore()

defineProps<{
  item: CartItem
}>()

// 'remove' vardı, yanına 'increase' ve 'decrease' ekledik
defineEmits(['remove', 'increase', 'decrease'])
</script>

<style scoped>
/* SENİN CSS KODLARIN AYNEN KORUNDU */
.cart-item {
  width: 100%;
  margin-bottom: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
}

.image-container {
  position: relative;
  width: 50%;
  margin-bottom: 15px;
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  z-index: 2;
}

.product-info {
  width: 50%;
  padding-right: 5px;
}

.info-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
}

.product-title {
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.wishlist-icon {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  line-height: 1;
}

.product-price {
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 20px 0;
}

.controls {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #333;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0 5px;
}

.qty-val {
  min-width: 15px;
  text-align: center;
}

.separator {
  margin: 0 12px;
  color: #ddd;
  font-weight: 300;
}
</style>