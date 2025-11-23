<template>
  <div class="auth-page">
    <div class="auth-container">
      
      <h1 class="page-title">HESAP OLUŞTUR</h1>

      <form @submit.prevent class="auth-form">
        
        <div class="input-group">
          <input type="email" placeholder="E-posta adresi" class="form-input" />
        </div>

        <div class="input-group password-group">
          <input type="password" placeholder="Şifre" class="form-input" />
          <span class="eye-icon">👁</span>
        </div>

        <div class="input-group phone-group">
          <div class="phone-prefix">
            +90 <span class="arrow">∨</span>
          </div>
          <input type="tel" placeholder="Cep telefonu" class="form-input phone-input" />
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
            Newstletter'ı almayı kabul ediyorum ve <span class="underline">isteğe bağlı kişisel bilgilerin toplanmasına ve kullanılmasına</span> izin veriyorum.
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
</script>

<style scoped>
/* LoginView ile benzer stilleri kullanıyoruz */
.auth-page { display: flex; justify-content: center; padding: 60px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
.auth-container { width: 100%; max-width: 400px; }
.page-title { font-size: 18px; font-weight: 500; margin-bottom: 40px; }

.input-group { margin-bottom: 20px; position: relative; }
.form-input { width: 100%; padding: 14px; border: 1px solid #ccc; font-size: 13px; outline: none; }
.password-group .eye-icon { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: #666; }

/* TELEFON INPUT ÖZEL STİLİ */
.phone-group { display: flex; align-items: center; border: 1px solid #ccc; }
.phone-group .form-input { border: none; } /* İçerdeki border'ı kaldır */
.phone-prefix { padding: 0 15px; border-right: 1px solid #eee; font-size: 13px; color: #333; display: flex; align-items: center; gap: 5px; background: white;}
.arrow { font-size: 10px; color: #666; }

/* CHECKBOX STİLLERİ (Metinler uzun olduğu için) */
.checkbox-group { display: flex; margin-bottom: 20px; }
.align-top { align-items: flex-start; } /* Kutuyu metnin en tepesine hizala */
.styled-checkbox { margin-top: 3px; margin-right: 10px; transform: scale(1.2); }

.terms-label { font-size: 11px; line-height: 1.5; color: #333; }
.underline { text-decoration: underline; font-weight: 600; cursor: pointer; }

/* BUTON */
.btn-black { width: 100%; background-color: black; color: white; padding: 15px; font-size: 11px; font-weight: 600; border: none; cursor: pointer; margin-bottom: 20px; letter-spacing: 0.5px; }

/* ALT METİN */
.bottom-text { font-size: 12px; text-align: center; color: #333; }
.login-link { color: black; font-weight: 600; text-decoration: underline; }
</style>