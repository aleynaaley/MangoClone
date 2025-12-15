<template>
  <div class="cart-view">
    
    <h1 class="page-title">SEPET (1)</h1>

    <div class="cart-layout">
      
      <div class="cart-items-column">
        <CartItem 
          image="/images/kadın5.jpeg" 
          title="Çizgili triko kazak"
          price="2.299,99 TL"
          size="L"
          color="Gri"
          :quantity="1"
        />
      </div>

      <div class="cart-summary-column">
        
        <div class="summary-row">
          <span>Ara toplam</span>
          <span>2.299,99 TL</span>
        </div>
        <div class="summary-row">
          <span>Teslimat</span>
          <span>Ücretsiz</span>
        </div>
        
        <div class="summary-total">
          <span>TOPLAM</span>
          <span>2.299,99 TL</span>
        </div>
        <p class="tax-info">Vergiler dahildir</p>

        <BaseButton class="checkout-btn">SATIN AL</BaseButton>

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
  </div>
</template>

<script setup>
import CartItem from '../components/molecules/CartItem.vue'
import BaseButton from '../components/atoms/BaseButton.vue'
</script>

<style scoped>
.cart-view {
  padding: 40px 60px; 
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  max-width: 1400px; /* Header ile aynı genişlikte tut */
  margin: 0 auto; /* Sayfayı ortala */
}

.page-title {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 50px;
  text-transform: uppercase;
}

/* ANA YERLEŞİM KUTUSU */
.cart-layout {
  display: flex;
  justify-content: space-between; /* İki sütunu uçlara it */
  align-items: flex-start; /* Yukarıdan hizala */
  width: 100%;
}

/* SOL KOLON (ÜRÜN) */
.cart-items-column {
  width: 55%; /* Ekranın %55'ini kaplasın */
}

/* SAĞ KOLON (ÖZET) */
.cart-summary-column {
  width: 35%; 
}

/* Özet Satırları */
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

/* SATIN AL BUTONU */
.checkout-btn {
  width: 100%;
  background-color: black !important;
  color: white !important;
  padding: 16px;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  cursor: pointer;
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