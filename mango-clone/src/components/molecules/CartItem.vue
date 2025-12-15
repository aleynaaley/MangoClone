<template>
  <div class="cart-item">
    
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      <button class="remove-btn" @click="$emit('remove')">✕</button>
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
  width: 100%;
  margin-bottom: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
}

/* --- RESİM AYARLARI --- */
.image-container {
  position: relative;
  /* DÜZELTME 1: Kapsayıcının genişliğini %50 yapıyoruz */
  width: 50%; 
  margin-bottom: 15px;
}

.product-image {
  /* DÜZELTME 2: Resim kendi kapsayıcısının (%50'lik alanın) tamamını kaplasın */
  width: 100%; 
  height: auto;
  display: block;
}

/* --- SİLME BUTONU --- */
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

/* --- YAZI ALANI --- */
.product-info {
  /* DÜZELTME 3: Bilgi alanının genişliğini de resimle aynı (%50) yapıyoruz */
  width: 50%;
  padding-right: 5px; /* Sağdaki boşluk */
}

.info-top {
  display: flex;
  /* Başlık sola, Kalp sağa yaslanır. Alan %50 olduğu için kalp resmin sağ kenarında durur */
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

/* --- SEÇENEKLER --- */
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