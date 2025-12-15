<template>
  <div class="auth-page">
    <div class="auth-container">

      <h1 class="page-title">GİRİŞ YAP</h1>

      <form @submit.prevent class="auth-form">

        <div class="input-group">
          <BaseInput placeholder="E-posta adresi" type="email" />
        </div>

        <div class="password-wrapper">
          <BaseInput placeholder="Şifre" type="password" />
          <span class="eye-icon">👁‍🗨</span>
        </div>

        <BaseCheckbox id="keep-login">
          Oturumu açık tut
        </BaseCheckbox>

        <button type="submit" class="btn btn-black">OTURUM AÇ</button>

        <router-link to="/signup" class="btn btn-white">
          HESABI ŞİMDİ OLUŞTUR
        </router-link>

        <a href="#" class="forgot-link">PAROLANI UNUTTUN MU?</a>

      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '../components/atoms/BaseInput.vue'
import BaseCheckbox from '../components/atoms/BaseCheckbox.vue'
</script>

<style scoped>
/* SAYFA DÜZENİ */
.auth-page {
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  /* Üstten boşluk */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.auth-container {
  width: 100%;
  max-width: 350px;
  /* Formun maksimum genişliği */
}

.page-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: left;
  /* Başlığı sola yasla */
  letter-spacing: 0.5px;
  color: black;
}

/* --- ATOM KONTROL MERKEZİ --- */
/* Atomların %100 genişlikte olduğundan emin oluyoruz */
:deep(.input-wrapper),
:deep(.base-input) {
  width: 100% !important;
  box-sizing: border-box;
  /* Padding eklenince taşmasın */
}

/* Şifre Alanı Ayarları */
.password-wrapper {
  position: relative;
  width: 100%;
  /* Kapsayıcı tam genişlikte olsun */
  margin-bottom: 20px;
  /* Altındaki checkbox ile mesafe */
}

.password-wrapper .eye-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  /* Tam ortala */
  transform: translateY(-50%);
  /* Matematiksel olarak dikey ortalama */
  cursor: pointer;
  font-size: 18px;
  color: #333;
}


/* BUTONLAR */
.btn {
  width: 100%;
  /* Tam genişlik */
  padding: 16px;
  font-size: 12px;
  font-weight: 700;
  /* Kalın yazı */
  cursor: pointer;
  border: 1px solid black;
  letter-spacing: 1px;
  display: block;
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 15px;
}

.btn-black {
  background-color: black;
  color: white;
}

.btn-black:hover {
  opacity: 0.8;
}

.btn-white {
  background-color: white;
  color: black;
  margin-bottom: 40px;
  /* Link ile arasındaki boşluk */
}

.btn-white:hover {
  background-color: #f9f9f9;
}

/* UNUTTUM LİNKİ  */
.forgot-link {
  color: black;
  font-size: 11px;
  font-weight: 500;
  /* Kalın */
  text-decoration: none;
  padding-bottom: 2px;
  display: inline-block;
  text-transform: uppercase;
  /* BÜYÜK HARF */
}

.forgot-link:hover {
  opacity: 0.7;
}

/* Form içindeki elemanları ortalamak için (Link gibi) */
.auth-form {
  text-align: center;
}

/* Ama inputlar sola yaslı kalsın */
.input-group,
.password-wrapper {
  text-align: left;
}
</style>