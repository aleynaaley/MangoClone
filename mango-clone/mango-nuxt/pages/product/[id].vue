<template>
  <div class="product-detail-page">

    <div v-if="product" class="detail-container">

      <div class="image-gallery">
        <img v-for="(img, index) in product.images" :key="index" :src="img"
          :alt="`${product.title} - Görsel ${index + 1}`" class="gallery-image" />
      </div>

      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">{{ product.formattedPrice }}</p>

        <div class="selection-area">
          <span class="selected-color-label">{{ product.colors[0] }}</span>
          <div class="color-options">
            <div class="color-box selected"></div>
          </div>
        </div>

        <div class="selection-area">
          <div class="size-options">

            <span v-for="size in product.sizes" :key="size" class="size-item">
              {{ size }}
            </span>

          </div>
          <a href="#" class="size-guide-link">Beden Rehberi</a>
        </div>

        <div class="actions">
          <button @click="handleAddToCart" class="add-to-cart-btn">
            EKLE
          </button>

          <button class="favorite-btn" @click="wishlistStore.toggleWishlist(product)">
            <svg width="20" height="20" viewBox="0 0 24 24"
              :fill="wishlistStore.isInWishlist(product.id) ? 'white' : 'none'" stroke="white" stroke-width="2">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
          </button>

        </div>

        <button class="view-look-btn">GÖRÜNÜMÜ GÖRÜNTÜLE</button>

        <div class="extra-info">
          <p>Mağazaya ücretsiz gönderim</p>
          <p>MAĞAZADAKİ STOK DURUMUNU GÖRÜNTÜLE</p>
        </div>

        <div class="description">
          <h3 class="desc-title">AÇIKLAMA</h3>
          <p class="product-desc">{{ product.description }}</p>
        </div>

      </div>
    </div>

    <div v-else class="not-found">
      <h2>Ürün bulunamadı</h2>
      <NuxtLink to="/" style="text-decoration: underline;">Ana Sayfaya Dön</NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '@/composables/useProducts'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'

const route = useRoute()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const { getProductById } = useProducts()

const routeId = computed(() => {
  const rawId = route.params.id
  return Array.isArray(rawId) ? rawId[0] : (rawId || '')
})

const product = computed(() => {
  return getProductById(routeId.value)
})

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    alert('Ürün sepete eklendi!')
  }
}
</script>

<style scoped>
/* ANA SAYFA DÜZENİ */
.product-detail-page {
  max-width: 2000px;
  /* Eskiden 1200px idi, şimdi ekranı kaplasın */
  margin: 0 auto;
  padding: 10px 0;
  /* Üstten alttan boşluk kalsın, yanları sıfırladık */
}

.detail-container {
  display: flex;
  gap: 40px;
  /* İki ana sütun arası boşluk (Resimler ve Bilgi Yazıları) */
  align-items: flex-start;
  padding-left: 10px;
  /* Sola iyice yaklaştırdık */
}

/* --- SOL SÜTUN (Galler) --- */
.image-gallery {
  flex: 1.75;
  /* Sol tarafın genişlik oranı */

  /* Flex yerine GRID kullanıyoruz */
  display: grid;
  /* İki eşit kolon oluştur (yan yana iki resim) */
  grid-template-columns: 1fr 1fr;
  /* Resimler arası boşluk (hem yatay hem dikey) */
  gap: 4px;
}


.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  /* Resimlerin altında boşluk kalmaması için */
}

/* --- SAĞ SÜTUN (Bilgiler ) --- */
.product-info {
  flex: 1;
  /* Sağ taraf daha dar (yaklaşık %40) */

  /* İŞTE SİHİR BURADA: Yapışkan Özellik */
  position: sticky;
  top: 80px;
  /* Header'ın yüksekliğine göre ayarla (Header'ın altında kalsın) */
  height: fit-content;
  /* İçeriği kadar yer kaplasın */

  padding-right: 20px;
  /* Sağdan biraz boşluk */
}

/* Ürün Başlık ve Fiyat */
.product-title {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

.product-price {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
}

/* Seçim Alanları (Renk, Beden) */
.selection-area {
  margin-bottom: 30px;
}

.selected-color-label {
  font-size: 12px;
  display: block;
  margin-bottom: 10px;
}

.color-box {
  width: 24px;
  height: 24px;
  background-color: #666;
  /* Örnek gri renk */
  border: 1px solid transparent;
  cursor: pointer;
}

.color-box.selected {
  border-color: black;
  /* Seçili olunca siyah çerçeve */
}

.size-options {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.size-options {
  display: flex;
  flex-direction: column;
  /* ALT ALTA YAPAR */
  gap: 8px;
  /* Aralarında boşluk */
}

.size-item {
  font-size: 14px;
  cursor: pointer;
  padding: 2px 0;
  display: inline-block;
  font-weight: 600;
}

.size-item:hover {
  text-decoration: underline;
}

.size-guide-link {
  font-size: 11px;
  color: #666;
  text-decoration: underline;
}

/* Butonlar */
.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  flex: 1;
  /* Kalan tüm alanı kapla */
  background-color: black;
  color: white;
  padding: 14px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.add-to-cart-btn:hover {
  opacity: 0.9;
}

.favorite-btn {
  width: 45px;
  /* Butonla aynı yükseklikte kare */
  border: 1px solid black;
  background: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-look-btn {
  width: 100%;
  padding: 14px;
  background: white;
  border: 1px solid black;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 30px;
}

/* Ekstra Bilgiler */
.extra-info p {
  font-size: 11px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;
}

/* Açıklama */
.desc-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
}

.product-desc {
  font-size: 12px;
  color: #333;
  line-height: 1.6;
}

/* MOBİL UYUM (Ekran küçülünce alt alta geçsinler) */
@media (max-width: 768px) {
  .detail-container {
    flex-direction: column;
  }

  .image-gallery,
  .product-info {
    flex: auto;
    width: 100%;
  }

  .product-info {
    position: static;
    /* Mobilde yapışkanlık kapansın */
    padding-right: 0;
    margin-top: 30px;
  }
}

.not-found {
  text-align: center;
  padding: 50px;
}
</style>