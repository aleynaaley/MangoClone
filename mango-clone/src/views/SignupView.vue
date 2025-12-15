<template>
  <div class="auth-page">
    <div class="auth-container">

      <h1 class="page-title">HESAP OLUŞTUR</h1>

      <form @submit.prevent class="auth-form">

        <div class="input-group">
          <BaseInput placeholder="E-posta adresi" type="email" />
        </div>

        <div class="password-wrapper">
          <BaseInput placeholder="Şifre" type="password" />
          <span class="eye-icon">👁‍🗨</span>
        </div>

        <div class="phone-wrapper">
          <div class="phone-prefix">+90 ∨</div>
          <BaseInput placeholder="Cep telefonu" type="tel" class="phone-input" />
        </div>

        <BaseCheckbox id="terms">
          <span class="underline">Kvkk aydınlatma metni</span> ve
          <span class="underline">Mango üye sözleşmesini</span> kabul ediyorum.
        </BaseCheckbox>

        <BaseCheckbox id="newsletter">
          Newstletter'ı almayı kabul ediyorum ve
          <span class="underline">isteğe bağlı kişisel bilgilerin toplanmasına ve kullanılmasına</span> izin veriyorum.
        </BaseCheckbox>

        <button class="btn btn-black">HESABI ŞİMDİ OLUŞTUR</button>

        <div class="bottom-text">
          Hesabınız var mı?
          <router-link to="/login" class="login-link">Oturum aç</router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '../components/atoms/BaseInput.vue'
import BaseCheckbox from '../components/atoms/BaseCheckbox.vue'
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
  /* Genel yazı rengi siyah */
}

.auth-container {
  width: 100%;
  max-width: 350px;
}

/* 1. BAŞLIK DÜZENLEMESİ */
.page-title {
  font-size: 15px;
  font-weight: 500;
  /* Daha kalın (bold) */
  margin-bottom: 30px;
  text-align: left;
  letter-spacing: 0.5px;
  color: #000;
}

/* --- ATOM MÜDAHALESİ --- */
:deep(.input-wrapper),
:deep(.base-input) {
  width: 100% !important;
  box-sizing: border-box;
}

/* Inputların kenarlıklarını ve placeholder rengini koyulaştır (Orijinal gibi) */
:deep(.base-input) {
  border-color: #666 !important;
  /* Daha koyu gri kenarlık */
  color: #000 !important;
  /* Yazı rengi siyah */
}

:deep(.base-input::placeholder) {
  color: #666 !important;
  /* Placeholder yazısı daha koyu */
}

.input-group,
.password-wrapper {
  margin-bottom: 20px;
}

.password-wrapper {
  position: relative;
}

.password-wrapper .eye-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 20px;
  color: #666;
}

/* 2. TELEFON ALANI DÜZENLEMESİ (Bütünleşik Görünüm) */
.phone-wrapper {
  display: flex;
  align-items: stretch;
  /* Yükseklikleri eşitle */
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #666;
  /* Dış çerçeve burada olacak */
  box-sizing: border-box;
}

.phone-prefix {
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 14px;
  color: #000;
  white-space: nowrap;
  background: #fff;
  /* Arka plan beyaz */
  border-right: none;
  /* Sağ çizgi yok */
  height: 50px;
  /* Yükseklik sabitleme */
}

/* Input atomunun kendi kenarlıklarını kaldırıyoruz ki dış çerçeveyle çakışmasın */
:deep(.phone-input .base-input) {
  border: none !important;
  /* Tüm kenarlıkları kaldır */
  padding-left: 5px;
  /* Prefix ile araya az mesafe */
  height: 50px !important;
}

/* Input wrapper'ın margin'ini sıfırla */
:deep(.phone-input.input-wrapper) {
  margin-bottom: 0 !important;
}


/* Checkbox seçili olduğunda içine 'X' veya tik koyabiliriz. Orijinalde 'X' gibi duruyor */
.real-checkbox:checked+.custom-label .checkbox-box::after {
  content: '✕';
  /* veya '✓' */
  font-size: 12px;
  font-weight: bold;
  color: #000;
}

.underline {
  text-decoration: underline;
  font-weight: 700;
  /* Linkler kalın */
  cursor: pointer;
}

/* 4. BUTON DÜZENLEMESİ (Dik Köşeler) */
.btn-black {
  width: 100%;
  padding: 16px;
  background-color: #000;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  border-radius: 0;
  /* KESKİN KÖŞELER */
}

.btn-black:hover {
  opacity: 0.9;
}

.bottom-text {
  font-size: 13px;
  text-align: center;
  color: #000;
}

.login-link {
  color: #000;
  font-weight: 700;
  text-decoration: underline;
  margin-left: 5px;
}
</style>