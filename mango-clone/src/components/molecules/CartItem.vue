<template>
  <div class="cart-item">
    
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      
      <button class="remove-btn">✕</button>
    </div>

    <div class="product-info">
      <div class="info-top">
        <h3 class="product-title">{{ title }}</h3>
        <button class="wishlist-icon">♡</button>
      </div>
      
      <p class="product-price">{{ price }}</p>

      <div class="controls">
        <div class="quantity-selector">
          <button class="qty-btn">−</button>
          <span class="qty-val">{{ quantity }}</span>
          <button class="qty-btn">+</button>
        </div>

        <span class="separator">|</span>
        <span class="option">{{ size }}</span>
        <span class="separator">|</span>
        <span class="option">{{ color }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  price: String,
  size: String,
  color: String,
  quantity: {
    type: Number,
    default: 1
  }
})
</script>

<style scoped>
.cart-item {
  margin-bottom: 40px;
}

.image-container {
  position: relative;
  margin-bottom: 15px;
}

.product-image {
  width: 100%; /* Kapsayıcısına sığsın */
  height: auto;
  display: block;
}

/* Resmin üzerindeki X butonu */
.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.product-info {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
}

.info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.product-title {
  font-size: 13px;
  font-weight: 400;
  margin: 0;
}

.wishlist-icon {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.product-price {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  align-items: center;
  font-size: 12px;
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

.separator {
  margin: 0 15px;
  color: #ccc;
}
</style>