<template>
  <div class="auth-page">
    <div class="auth-container">

      <h1 class="page-title">GİRİŞ YAP</h1>

      <form @submit.prevent="handleLogin" class="auth-form">

        <div class="input-group">
          <BaseInput 
            v-model="email" 
            placeholder="E-posta adresi" 
            type="email" 
          />
        </div>

        <div class="password-wrapper">
          <BaseInput 
            v-model="password" 
            placeholder="Şifre" 
            type="password" 
          />
          <span class="eye-icon">👁‍🗨</span>
        </div>

        <BaseCheckbox id="keep-login">
          Oturumu açık tut
        </BaseCheckbox>

        <p v-if="errorMsg" style="color:red; font-size:11px; margin-bottom:10px;">{{ errorMsg }}</p>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Senin bileşenlerin
import BaseInput from '../components/atoms/BaseInput.vue'
import BaseCheckbox from '../components/atoms/BaseCheckbox.vue'

// Logic Kısmı
const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMsg = ref('')

const handleLogin = () => {
  const success = authStore.login(email.value, password.value)
  if (success) {
    router.push('/') // Başarılıysa ana sayfaya git
  } else {
    errorMsg.value = 'Hatalı giriş (Şifre: 123456)'
  }
}

</script>

<style scoped>
/* SENİN GÖNDERDİĞİN CSS KODLARI BİREBİR AYNI */
.auth-page {
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.auth-container {
  width: 100%;
  max-width: 350px;
}

.page-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: left;
  letter-spacing: 0.5px;
  color: black;
}

:deep(.input-wrapper),
:deep(.base-input) {
  width: 100% !important;
  box-sizing: border-box;
}

.password-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.password-wrapper .eye-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #333;
}

.btn {
  width: 100%;
  padding: 16px;
  font-size: 12px;
  font-weight: 700;
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
}

.btn-white:hover {
  background-color: #f9f9f9;
}

.forgot-link {
  color: black;
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 2px;
  display: inline-block;
  text-transform: uppercase;
}

.forgot-link:hover {
  opacity: 0.7;
}

.auth-form {
  text-align: center;
}

.input-group,
.password-wrapper {
  text-align: left;
}
</style>