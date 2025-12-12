<template>
  <div class="auth-page">
    <div class="auth-container">
      
      <h1 class="page-title">GİRİŞ YAP</h1>

      <form @submit.prevent class="auth-form">
        
        <BaseInput placeholder="E-posta adresi" type="email" />

        <div class="password-wrapper">
          <BaseInput placeholder="Şifre" type="password" />
          <span class="eye-icon">👁</span>
        </div>

        <div class="checkbox-group">
          <label class="custom-checkbox">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Oturumu açık tut
          </label>
        </div>

        <button type="submit" class="btn btn-black">OTURUM AÇ</button>

        <router-link to="/signup" class="btn btn-white">
          HESABI ŞİMDİ OLUŞTUR
        </router-link>

        <a href="#" class="forgot-link">Parolanı unuttun mu?</a>

      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '../components/atoms/BaseInput.vue' // <-- YENİ IMPORT
</script>

<style scoped>
.auth-page { display: flex; justify-content: center; padding: 60px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
.auth-container { width: 100%; max-width: 400px; text-align: center; }
.page-title { font-size: 18px; font-weight: 500; margin-bottom: 40px; text-align: left; }

/* Şifre ve Göz İkonu Ayarı */
.password-wrapper {
  position: relative;
  /* BaseInput'un kendi margin'i var, ekstra vermeye gerek yok */
}

.password-wrapper .eye-icon {
  position: absolute;
  right: 15px;
  top: 20px; /* Gözü ortalamak için ince ayar */
  cursor: pointer;
  font-size: 16px;
  color: #666;
}

.checkbox-group { display: flex; align-items: center; margin-bottom: 30px; }
.custom-checkbox { display: flex; align-items: center; font-size: 12px; cursor: pointer; color: #333; }
.custom-checkbox input { margin-right: 10px; transform: scale(1.2); }

.btn { width: 100%; padding: 15px; font-size: 11px; font-weight: 600; cursor: pointer; border: 1px solid black; letter-spacing: 0.5px; display: block; text-decoration: none; box-sizing: border-box; text-align: center; }
.btn-black { background-color: black; color: white; margin-bottom: 15px; }
.btn-white { background-color: white; color: black; margin-bottom: 40px; }
.btn-white:hover { background-color: #f5f5f5; }
.forgot-link { color: black; font-size: 12px; text-decoration: underline; text-underline-offset: 3px; font-weight: 500; }
</style>