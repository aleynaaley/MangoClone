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

        <div class="selection-area">
          <p class="label">Renk:</p>
          <div class="options">
            <button v-for="color in product.colors" :key="color" class="opt-btn">{{ color }}</button>
          </div>
        </div>

        <div class="selection-area">
          <p class="label">Beden:</p>
          <div class="options">
            <button v-for="size in product.sizes" :key="size" class="opt-btn">{{ size }}</button>
          </div>
        </div>

        <button class="add-to-cart-btn">SEPETE EKLE</button>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Ürün bulunamadı</h2>
      <NuxtLink to="/">Ana Sayfaya Dön</NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

// 1. URL'deki ID'yi al (Örn: /product/2 ise id = 2)
const route = useRoute()
const productId = route.params.id

// 2. Composable'dan veriyi çek
// (Nuxt useProducts'ı otomatik import eder, import yazmana gerek yok)
const { getProductById } = useProducts()

// 3. İlgili ürünü bul
const product = getProductById(productId)

</script>

<style scoped>
.product-detail-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.detail-container {
  display: flex;
  gap: 50px;
}

.image-section img {
  width: 100%;
  max-width: 500px;
  object-fit: cover;
}

.info-section {
  flex: 1;
  padding-top: 20px;
}

.product-title {
  font-size: 24px;
  font-weight: 400; /* Mango stili ince başlık */
  margin-bottom: 10px;
  text-transform: uppercase;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.product-desc {
  font-size: 13px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.selection-area {
  margin-bottom: 20px;
}

.label {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.options {
  display: flex;
  gap: 10px;
}

.opt-btn {
  border: 1px solid #ccc;
  background: white;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.opt-btn:hover {
  border-color: black;
}

.add-to-cart-btn {
  width: 100%;
  background-color: black;
  color: white;
  padding: 16px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.add-to-cart-btn:hover {
  opacity: 0.9;
}

/* MOBİL UYUM */
@media (max-width: 768px) {
  .detail-container {
    flex-direction: column;
  }
  
  .image-section img {
    max-width: 100%;
  }
}
</style>