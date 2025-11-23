<template>
  <div class="product-detail-view">
    
    <div class="product-gallery">
      <div class="image-wrapper" v-for="(img, index) in productImages" :key="index">
        <img :src="img" alt="Ürün Görseli" />
      </div>
    </div>

    <div class="product-info-panel">
      <div class="info-content">
        
        <h1 class="product-title">ÇİZGİLİ TRİKO KAZAK</h1>
        <p class="product-price">2.299,99 TL</p>

        <div class="color-selector">
          <span class="color-label">Gri</span>
          <div class="color-box selected"></div>
        </div>

        <div class="size-selector">
          <div class="size-option">S</div>
          <div class="size-option">M</div>
          <div class="size-option">L</div>
        </div>
        
        <div class="size-guide">BEDEN REHBERİ</div>

        <div class="action-buttons">
          <BaseButton class="add-btn">EKLE</BaseButton>
          
          <button class="wishlist-btn">♡</button>
        </div>

        <button class="look-btn">GÖRÜNÜMÜ GÖRÜNTÜLE</button>

        <div class="extra-info">
          <p>Mağazaya ücretsiz gönderim</p>
          <p>MAĞAZADAKİ STOK DURUMUNU GÖRÜNTÜLE</p>
        </div>

        <div class="description">
          <h3>AÇIKLAMA</h3>
          <p>Orta kalınlıkta çizgili triko kumaştan üretilmiş bu tasarım, kutu yaka ve uzun kollu olarak sunulmaktadır.</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../components/atoms/BaseButton.vue'

// Bu sayfada gösterilecek resimler
// (Senin elindeki resmi 4 kere kullandım, grid yapısını görmek için)
const productImages = ref([
  '/images/kadın5.jpeg',
  '/images/kadın9.jpeg',
  '/images/kadın10.jpeg',
  '/images/kadın11.jpeg'
])
</script>

<style scoped>
.product-detail-view {
  display: flex;
  padding: 0 20px; /* Mobilde kenar boşluğu */
  margin-top: 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* --- SOL TARAF (GALERİ) --- */
.product-gallery {
  width: 65%; /* Ekranın %65'i resimler olsun */
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 Sütun */
  gap: 4px; /* Resimler arası ince boşluk */
  padding-right: 40px;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

/* --- SAĞ TARAF (BİLGİLER) --- */
.product-info-panel {
  width: 35%; /* Ekranın %35'i bilgi olsun */
  position: relative;
}

.info-content {
  position: sticky; /* Sayfa kayarken burası sabit kalsın */
  top: 80px; /* Header'ın altından başla */
  padding-right: 40px;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
}

.product-price {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
}

/* Renk Seçimi */
.color-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 12px;
}
.color-box {
  width: 15px;
  height: 15px;
  background-color: #555; /* Gri */
  border: 1px solid #ccc;
}

/* Beden Seçimi */
.size-selector {
  border-top: 1px solid #ddd;
}

.size-option {
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  cursor: pointer;
}

.size-option:hover {
  background-color: #f9f9f9;
}

.size-guide {
  font-size: 10px;
  text-decoration: underline;
  margin: 15px 0 25px 0;
  cursor: pointer;
}

/* Butonlar */
.action-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

/* BaseButton'u özelleştiriyoruz (Siyah yapıyoruz) */
.add-btn {
  flex: 1;
  background-color: black !important;
  color: white !important;
  font-weight: 600;
  padding: 12px;
}

.wishlist-btn {
  width: 45px;
  background: white;
  border: 1px solid black;
  font-size: 20px;
  cursor: pointer;
}

.look-btn {
  width: 100%;
  padding: 12px;
  background: white;
  border: 1px solid black;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
}

.extra-info p {
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.description {
  margin-top: 30px;
}

.description h3 {
  font-size: 11px;
  margin-bottom: 10px;
}

.description p {
  font-size: 11px;
  line-height: 1.6;
  color: #333;
}

/* Mobil Uyumluluk */
@media (max-width: 768px) {
  .product-detail-view {
    flex-direction: column;
  }
  .product-gallery, .product-info-panel {
    width: 100%;
    padding: 0;
  }
  .product-gallery {
    margin-bottom: 20px;
  }
}
</style>