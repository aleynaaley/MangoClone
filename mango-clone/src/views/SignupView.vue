<template>
  <div class="auth-page">
    <div class="auth-container">
      
      <h1 class="page-title">HESAP OLUŞTUR</h1>

      <form @submit.prevent class="auth-form">
        
        <BaseInput placeholder="E-posta adresi" type="email" />

        <div class="password-wrapper">
          <BaseInput placeholder="Şifre" type="password" />
          <span class="eye-icon">👁</span>
        </div>

        <div class="phone-wrapper">
           <div class="phone-prefix">+90 ∨</div>
           <BaseInput placeholder="Cep telefonu" type="tel" class="phone-input-atom" />
        </div>

        <div class="checkbox-group align-top">
          <input type="checkbox" id="terms" class="styled-checkbox" />
          <label for="terms" class="terms-label">
            <span class="underline">Kvkk aydınlatma metni</span> ve 
            <span class="underline">Mango üye sözleşmesini</span> kabul ediyorum.
          </label>
        </div>

        <div class="checkbox-group align-top">
          <input type="checkbox" id="newsletter" class="styled-checkbox" />
          <label for="newsletter" class="terms-label">
            Newstletter'ı almayı kabul ediyorum.
          </label>
        </div>

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
import BaseInput from '../components/atoms/BaseInput.vue' // <-- YENİ IMPORT
</script>

<style scoped>
/* LoginView ile ortak stiller */
.auth-page { display: flex; justify-content: center; padding: 60px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
.auth-container { width: 100%; max-width: 400px; }
.page-title { font-size: 18px; font-weight: 500; margin-bottom: 40px; }

.password-wrapper { position: relative; }
.password-wrapper .eye-icon { position: absolute; right: 15px; top: 20px; cursor: pointer; color: #666; }

/* TELEFON İÇİN ÖZEL AYAR */
.phone-wrapper {
  display: flex;
  align-items: flex-start; /* Kutuları üstten hizala */
  margin-bottom: 20px;
}
.phone-prefix {
  padding: 14px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-right: none; /* Sağ çizgiyi kaldır ki inputla birleşsin */
  font-size: 13px;
  color: #333;
  height: 46px; /* BaseInput yüksekliğiyle eşitlemek için (padding + border) */
  box-sizing: border-box;
  white-space: nowrap;
}
/* Atomun sol kenarını düzelt */
:deep(.phone-input-atom .base-input) {
  border-left: none; 
}

/* Checkbox ve Butonlar */
.checkbox-group { display: flex; margin-bottom: 20px; }
.align-top { align-items: flex-start; }
.styled-checkbox { margin-top: 3px; margin-right: 10px; transform: scale(1.2); }
.terms-label { font-size: 11px; line-height: 1.5; color: #333; }
.underline { text-decoration: underline; font-weight: 600; cursor: pointer; }

.btn-black { width: 100%; background-color: black; color: white; padding: 15px; font-size: 11px; font-weight: 600; border: none; cursor: pointer; margin-bottom: 20px; letter-spacing: 0.5px; }
.bottom-text { font-size: 12px; text-align: center; color: #333; }
.login-link { color: black; font-weight: 600; text-decoration: underline; }
</style>