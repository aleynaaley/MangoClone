
<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      <button class="heart-btn">♡</button>
      <div class="size-badge" v-if="hasLargeSize">BÜYÜK BEDEN MEVCUT</div>
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <span class="product-price">{{ price }} TL</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  price: String,
  hasLargeSize: Boolean
})
</script>

<style scoped>
.product-card {
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.image-container {
  position: relative;
  margin-bottom: 12px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: auto; /* Resmin oranını koru */
  display: block;
  transition: transform 0.3s;
}

.product-card:hover .product-image {
  transform: scale(1.02); /* Üzerine gelince hafif büyüme efekti */
}

.heart-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;
}

.size-badge {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: white;
  font-size: 10px;
  padding: 4px 8px;
  font-weight: 600;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 11px; /* Mango font boyutu */
  color: #333;
}

.product-title {
  font-weight: 400;
  margin: 0;
  max-width: 70%;
}

.product-price {
  font-weight: 400;
}
</style>