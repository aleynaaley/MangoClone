<template>
  <div class="checkout-page-content">

    <div class="progress-container">
      <div class="step completed">
        <div class="step-circle">✓</div>
        <span>Gönderim</span>
      </div>
      <div class="line"></div>
      <div class="step active">
        <div class="step-circle">2</div>
        <span>Ödeme</span>
      </div>
      <div class="line"></div>
      <div class="step">
        <div class="step-circle">3</div>
        <span>Onay</span>
      </div>
    </div>

    <div class="checkout-container">

      <div class="left-column">

        <div class="section-header">
          <h2 class="section-title">GÖNDERİM ŞEKLİ</h2>
          <button class="edit-link">DÜZENLEYİN</button>
        </div>

        <div class="address-box">
          <form @submit.prevent="handlePayment" id="checkout-form">
            <h3 class="box-subtitle">Ev adresi</h3>
            <div class="form-grid">
              <input v-model="formData.firstName" type="text" placeholder="Ad" class="clean-input" required />
              <input v-model="formData.lastName" type="text" placeholder="Soyad" class="clean-input" required />
              <input v-model="formData.phone" type="text" placeholder="Telefon" class="clean-input full" required />
              <input v-model="formData.address" type="text" placeholder="Adres" class="clean-input full" required />
              <input v-model="formData.city" type="text" placeholder="İlçe / Şehir" class="clean-input full" required />
            </div>
          </form>
        </div>

        <h2 class="section-title mt-50">ÖDEME METODU</h2>

        <div class="payment-methods">

          <div class="payment-option active">
            <div class="option-header">
              <span>BANKA KARTI</span>
              <span class="card-icon">💳</span>
            </div>
          </div>

          <div class="payment-option">
            <div class="option-header">
              <span>IYZICO İLE ÖDE</span>
              <span class="iyzico-logo">iyzico</span>
            </div>
          </div>

        </div>
      </div>

      <div class="right-column">
        <div class="summary-wrapper">
          <h3 class="summary-title">SEPETİNİZ</h3>

          <div class="promo-box">
            <span>Promosyon kodunu ekleyin</span>
            <span class="arrow">∨</span>
          </div>

          <div class="info-box">
            <div class="info-header">
              <span>Mango likes you</span>
              <span class="info-icon">ℹ</span>
            </div>
            <p>Kulüpteki indirimlerden yararlanmak için en az 9000 Like sayısına ihtiyacınız var.</p>
          </div>

          <div class="price-row">
            <span>Ara toplam</span>
            <span>{{ cartStore.totalPrice.toFixed(2) }} TL</span>
          </div>
          <div class="price-row">
            <span>Teslimat</span>
            <span>Ücretsiz</span>
          </div>

          <div class="total-row">
            <span>TOPLAM</span>
            <span>{{ cartStore.totalPrice.toFixed(2) }} TL</span>
          </div>

          <button type="submit" form="checkout-form" class="pay-now-btn" :disabled="isLoading"
            :style="isLoading ? 'opacity: 0.7; cursor: not-allowed;' : ''">
            <span v-if="isLoading">İŞLENİYOR...</span>
            <span v-else>ŞİMDİ ÖDEYİN</span>
          </button>

          <p class="legal-text">
            Satın alma işlemini tamamlayarak, <a href="#">Satış Koşulları</a>'nı ve <a href="#">Gizlilik
              politikası</a>'nı okuduğunuzu onaylamış olursunuz.
          </p>

          <div class="products-list">
            <h4 class="products-title">ÜRÜNLER ({{ cartStore.totalItems }})</h4>

            <div v-for="item in cartStore.items" :key="item.id" class="product-item">
              <img :src="item.image" class="prod-img" />
              <div class="prod-info">
                <p class="prod-name">{{ item.title }}</p>
                <p class="prod-price">{{ item.formattedPrice }}</p>
                <p class="prod-detail">Adet: {{ item.quantity }}</p>
                <p class="prod-detail">Beden: {{ item.sizes?.[0] || 'Standart' }}</p>
                <p class="prod-detail">{{ item.colors?.[0] || 'Standart' }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'
import { useAuthStore } from '@/stores/auth'

// Layout Ayarı
definePageMeta({
  layout: 'checkout'
})

// Store ve Router Tanımları
const cartStore = useCartStore()
const orderStore = useOrderStore()
const authStore = useAuthStore()
const router = useRouter()

// Yükleniyor durumu (Butonu kilitlemek için)
const isLoading = ref(false)

// Form Verileri (v-model)
const formData = ref({
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  city: ''
})

const handlePayment = async () => {
  // 1. Sepet Boş mu Kontrolü
  if (cartStore.items.length === 0) {
    alert("Sepetiniz boş, sipariş oluşturulamaz!")
    return
  }

  // 2. Yükleniyor modunu aç (Butonda 'İşleniyor...' yazsın)
  isLoading.value = true

  try {
    // 3. Sipariş Verisini Hazırla
    const newOrder = {
      userId: authStore.user?.id || 'guest',
      customerName: `${formData.value.firstName} ${formData.value.lastName}`,
      phone: formData.value.phone,
      address: formData.value.address,
      city: formData.value.city,
      items: cartStore.items,
      totalAmount: cartStore.totalPrice,
      status: 'pending',
      createdAt: new Date() // Tarih ekleyelim
    }

    // 4. Firebase'e Gönder ve BEKLE (await)
    const success = await orderStore.createOrder(newOrder)

    if (success) {
      // Başarılıysa:
      if (cartStore.clearCart) {
        cartStore.clearCart()
      } else {
        cartStore.items = []
      } // Sepeti temizle

      // Kullanıcıya bilgi ver
      alert('Siparişiniz başarıyla alındı! Ana sayfaya yönlendiriliyorsunuz...')

      // Kısa bir süre sonra yönlendir
      setTimeout(() => {
        router.push('/')
      }, 500)
    } else {
      // Store'dan false döndüyse
      alert('Sipariş oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.')
    }

  } catch (error) {
    // Hatayı konsola detaylı yazdıralım ki görelim (F12 -> Console)
    console.error("HATA DETAYI:", error)

    // Ekrana da yazalım
    alert('Beklenmedik bir hata oluştu: ' + error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* GENEL AYARLAR */
.checkout-page-content {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: black;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* --- PROGRESS BAR (ÜST ÇİZGİ) --- */
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  padding-top: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.step-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 5px;
}

.step.active .step-circle {
  background: black;
  color: white;
  border-color: black;
  font-weight: bold;
}

.step span {
  font-size: 11px;
  text-transform: uppercase;
  color: #999;
}

.step.active span {
  color: black;
  font-weight: bold;
}

.line {
  width: 150px;
  height: 1px;
  background-color: #e5e5e5;
  margin: -20px 10px 0 10px;
  /* Çizgiyi yukarı çek */
}

/* --- ANA KONTEYNER --- */
.checkout-container {
  display: flex;
  gap: 80px;
  /* İki sütun arası geniş boşluk */
}

/* SOL KOLON */
.left-column {
  flex: 1.6;
  /* Sol taraf biraz daha geniş */
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.edit-link {
  background: none;
  border: none;
  text-decoration: underline;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.address-box {
  border: 1px solid #e5e5e5;
  padding: 30px;
  margin-bottom: 40px;
}

.box-subtitle {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.box-subtitle::before {
  content: '🏠';
  margin-right: 10px;
}

.form-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.clean-input {
  flex: 1;
  padding: 12px;
  border: 1px solid #e5e5e5;
  font-size: 13px;
  outline: none;
  min-width: 40%;
}

.clean-input.full {
  width: 100%;
  flex: 100%;
}

.clean-input:focus {
  border-color: black;
}

.mt-50 {
  margin-top: 50px;
}

/* ÖDEME SEÇENEKLERİ */
.payment-methods {
  border: 1px solid #e5e5e5;
}

.payment-option {
  border-bottom: 1px solid #e5e5e5;
}

.payment-option:last-child {
  border-bottom: none;
}

.option-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.option-body {
  padding: 0 20px 20px 20px;
}

.card-extras {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.iyzico-logo {
  color: #1e46bc;
  font-weight: bold;
  font-style: italic;
}

/* SAĞ KOLON */
.right-column {
  flex: 1;
}

.summary-wrapper {
  /* Sticky özelliği ile kaydırınca sabit kalsın */
  position: sticky;
  top: 20px;
}

.summary-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  text-transform: uppercase;
}

.promo-box {
  border: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 20px;
}

.info-box {
  border: 1px solid #e5e5e5;
  padding: 15px;
  margin-bottom: 30px;
}

.info-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
}

.info-box p {
  font-size: 11px;
  color: #666;
  line-height: 1.4;
}

.price-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 10px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 25px;
}

.pay-now-btn {
  width: 100%;
  background-color: black;
  color: white;
  padding: 18px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
}

.pay-now-btn:hover {
  opacity: 0.9;
}

.legal-text {
  font-size: 10px;
  color: #777;
  margin-top: 15px;
  line-height: 1.4;
  margin-bottom: 40px;
}

.legal-text a {
  color: black;
  text-decoration: underline;
}

/* ÜRÜN LİSTESİ */
.products-title {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
}

.product-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.prod-img {
  width: 70px;
  height: 90px;
  object-fit: cover;
}

.prod-info {
  font-size: 12px;
}

.prod-name {
  font-weight: 600;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.prod-price {
  margin-bottom: 10px;
}

.prod-detail {
  color: #666;
  font-size: 11px;
  margin-bottom: 2px;
}

/* MOBİL UYUM */
@media (max-width: 900px) {
  .checkout-container {
    flex-direction: column-reverse;
    /* Mobilde özet yukarı çıksın */
  }

  .line {
    width: 50px;
    /* Çizgiyi kısalt */
  }
}
</style>