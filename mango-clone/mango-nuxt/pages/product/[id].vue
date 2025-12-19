<template>
  <div class="product-detail-page">

    <div v-if="productStore.loading" class="loading-state">
      <div class="spinner"></div>
      <p>Ürün detayları yükleniyor...</p>
    </div>

    <div v-else-if="product" class="detail-container">

      <div class="image-gallery">
        <img 
          v-for="(img, index) in (product.images && product.images.length ? product.images : [product.image])" 
          :key="index" 
          :src="img"
          :alt="`${product.title} - Görsel ${index + 1}`" 
          class="gallery-image" 
        />
      </div>

      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">{{ product.formattedPrice }}</p>

        <div class="selection-area">
          <span v-if="product.colors && product.colors.length" class="selected-color-label">
            Renk: {{ product.colors[0] }}
          </span>
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
            SEPETE EKLE
          </button>

          <button class="favorite-btn" @click="handleToggleWishlist">
            <svg 
              width="24" height="24" viewBox="0 0 24 24" 
              :fill="isFavorite ? 'white' : 'none'" 
              stroke="white" 
              stroke-width="1.5"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

// --- YENİ STORE IMPORTLARI ---
import { useProductStore } from '@/stores/products' // Dosya adın products.ts ise böyle kalsın
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'

const route = useRoute()

// Store'ları çağırıyoruz
const productStore = useProductStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

// --- KRİTİK NOKTA: Reactivity Bağlantısı ---
// Template içinde "product" diye kullandığımız değişkeni
// Store'daki "selectedProduct" verisine bağlıyoruz.
const product = computed(() => productStore.selectedProduct)

// Favori kontrolü (Store üzerinden)
const isFavorite = computed(() => {
  if (!product.value) return false;
  return wishlistStore.isInWishlist(product.value.id)
})

// Favoriye Ekle / Çıkar
const handleToggleWishlist = () => {
  if (product.value) {
    wishlistStore.toggleWishlist(product.value)
  }
}

// Sepete Ekle
const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    alert("Ürün sepete eklendi!") 
  }
}

// Sayfa açılınca veriyi Store'dan iste
onMounted(async () => {
  const productId = route.params.id as string
  await productStore.fetchProductById(productId)
})
</script>

<style scoped>
/* YÜKLEME EKRANI */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 20px;
}
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* CSS'in geri kalanı aynen sende olduğu gibi kalabilir */
.product-detail-page { max-width: 2000px; margin: 0 auto; padding: 10px 0; }
.detail-container { display: flex; gap: 40px; align-items: flex-start; padding-left: 10px; }
.image-gallery { flex: 1.75; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.gallery-image { width: 100%; height: auto; object-fit: cover; display: block; }
.product-info { flex: 1; position: sticky; top: 80px; height: fit-content; padding-right: 20px; }
.product-title { font-size: 16px; font-weight: 600; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px; }
.product-price { font-size: 14px; font-weight: 400; margin-bottom: 30px; }
.selection-area { margin-bottom: 30px; }
.selected-color-label { font-size: 12px; display: block; margin-bottom: 10px; }
.color-box { width: 24px; height: 24px; background-color: #666; border: 1px solid transparent; cursor: pointer; }
.color-box.selected { border-color: black; }
.size-options { display: flex; flex-direction: column; gap: 8px; }
.size-item { font-size: 14px; cursor: pointer; padding: 2px 0; display: inline-block; font-weight: 600; }
.size-item:hover { text-decoration: underline; }
.size-guide-link { font-size: 11px; color: #666; text-decoration: underline; }
.actions { display: flex; gap: 10px; margin-bottom: 10px; }
.add-to-cart-btn { flex: 1; background-color: black; color: white; padding: 14px; font-size: 12px; font-weight: 600; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; }
.add-to-cart-btn:hover { opacity: 0.9; }
.favorite-btn { width: 50px; background-color: black; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.view-look-btn { width: 100%; padding: 14px; background: white; border: 1px solid black; font-size: 12px; font-weight: 600; cursor: pointer; text-transform: uppercase; margin-bottom: 30px; }
.extra-info p { font-size: 11px; margin-bottom: 10px; text-transform: uppercase; font-weight: 500; }
.desc-title { font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 10px; border-top: 1px solid #e5e5e5; padding-top: 20px; }
.product-desc { font-size: 12px; color: #333; line-height: 1.6; }
.not-found { text-align: center; padding: 50px; }
@media (max-width: 768px) {
  .detail-container { flex-direction: column; }
  .image-gallery, .product-info { flex: auto; width: 100%; }
  .product-info { position: static; padding-right: 0; margin-top: 30px; }
}
</style>