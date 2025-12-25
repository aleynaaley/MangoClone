<template>
  <div class="cart-view">
    
    <h1 class="page-title">SEPET ({{ cartStore.totalItems }})</h1>

    <div v-if="cartStore.items.length > 0" class="cart-layout">
      
      <div class="cart-items-column">
        <CartItem 
          v-for="item in cartStore.items"
          :key="item.id"
          :item="item"
          @remove="cartStore.removeFromCart(item.id)"
          @increase="cartStore.increaseQuantity(item.id)"
          @decrease="cartStore.decreaseQuantity(item.id)"
        />
      </div>

      <div class="cart-summary-column">
        
        <div class="summary-row">
          <span>Ara toplam</span>
          <span>{{ cartStore.totalPrice.toFixed(2) }} TL</span>
        </div>
        <div class="summary-row">
          <span>Teslimat</span>
          <span>Ücretsiz</span>
        </div>
        
        <div class="summary-total">
          <span>TOPLAM</span>
          <span>{{ cartStore.totalPrice.toFixed(2) }} TL</span>
        </div>
        <p class="tax-info">Vergiler dahildir</p>

        <BaseButton @click="handleCheckout" class="checkout-btn">SATIN AL</BaseButton>

        <div class="promo-code">
          <span>Promosyon kodunuz var mı?</span>
          <span class="arrow">∨</span>
        </div>

        <div class="info-checks">
          <div class="check-item">
            <span class="check-icon">✓</span>
            <p>1.900 TL üzeri alışverişlerde ücretsiz kargo</p>
          </div>
          <div class="check-item">
            <span class="check-icon">✓</span>
            <p>60 gün içerisinde ücretsiz iade</p>
          </div>
        </div>

      </div>

    </div>

    <div v-else class="empty-cart-message">
      <p>Sepetiniz şu an boş.</p>
      <NuxtLink to="/" class="back-link">Alışverişe Başla</NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import CartItem from '@/components/molecules/CartItem.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
// Sadece Store import ediliyor, iş mantığı burada YOK.
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()

// YENİ EKLENEN FONKSİYON
const handleCheckout = () => {
  // 1. Giriş yapmış mı kontrol et
  if (!authStore.isAuthenticated) {
    const confirmLogin = confirm("Ödeme yapmak için giriş yapmalısınız. Giriş sayfasına gitmek ister misiniz?")
    if (confirmLogin) {
      router.push('/login')
    }
  } else {
    // 2. Giriş yapmışsa Checkout sayfasına gönder
    router.push('/checkout')
  }
}
</script>

<style scoped>
/* SENİN ESKİ STİLLERİN (Değişmedi) */
.cart-view {
  padding: 40px 60px; 
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 50px;
  text-transform: uppercase;
}

.cart-layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.cart-items-column {
  width: 55%; 
}

.cart-summary-column {
  width: 35%; 
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 12px;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 13px;
  margin-top: 25px;
  margin-bottom: 5px;
}

.tax-info {
  font-size: 10px;
  color: #888;
  text-align: right;
  margin-bottom: 30px;
}

.checkout-btn {
  width: 100%;
  background-color: black !important;
  color: white !important;
  padding: 16px;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  cursor: pointer;
  border: none;
}

.promo-code {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee; 
}

.info-checks .check-item {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 12px;
  color: #333;
}

.check-icon {
  font-size: 14px;
}

.empty-cart-message {
  text-align: center;
  padding: 50px;
}

.back-link {
  text-decoration: underline;
  font-weight: bold;
  color: black;
}

/* MOBİL UYUM */
@media (max-width: 1024px) {
  .cart-view {
    padding: 20px;
  }
  .cart-layout {
    flex-direction: column;
  }
  .cart-items-column, .cart-summary-column {
    width: 100%;
  }
  .cart-summary-column {
    margin-top: 40px;
  }
}
</style>