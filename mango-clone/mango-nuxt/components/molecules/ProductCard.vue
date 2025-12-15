<template>
  <div class="product-card">
    
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="product-image" />
    </div>

    <div class="info-wrapper">
      
      <div v-if="tag" class="product-tag">{{ tag }}</div>

      <div class="title-row">
        <h3 class="product-title">{{ title }}</h3>
        
        <button class="wishlist-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div class="product-price">{{ price }}</div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  price: String,
  tag: String 
})
</script>

<style scoped>
.product-card {
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  padding-bottom: 20px;
}

/* --- RESİM --- */
.image-wrapper {
  width: 100%;
  margin-bottom: 10px; /* Resim ile yazılar arası boşluk */
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.02);
}

/* --- BİLGİ ALANI --- */
.info-wrapper {
  display: flex;
  flex-direction: column;
  padding-right: 5px; /* Sağdan hafif boşluk */
}

/* Etiket (NEW NOW) */
.product-tag {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2px;
  color: #333;
}

/* --- KRİTİK NOKTA: BAŞLIK VE KALP SATIRI --- */
.title-row {
  display: flex;
  justify-content: space-between; /* Biri en sola, biri en sağa */
  align-items: flex-start; /* Üstten hizala (Başlık 2 satır olursa kalp yukarıda kalsın) */
  margin-bottom: 5px; /* Fiyatla arayı aç */
}

.product-title {
  font-size: 13px;
  font-weight: 400; /* İnce font */
  color: #000;
  margin: 0;
  line-height: 1.4;
  flex: 1; /* Boş alanı kapla */
  padding-right: 15px; /* Kalp ile yazı birbirine girmesin */
}

.wishlist-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #000;
  flex-shrink: 0; /* Kalp sıkışıp küçülmesin */
  display: flex;
  align-items: center;
}

.wishlist-btn:hover {
  opacity: 0.6;
}

/* --- FİYAT --- */
.product-price {
  font-size: 13px;
  font-weight: 400;
  color: #000;
}
</style>