<template>
  <div class="user-menu-dropdown">
    <div class="triangle"></div>

    <div class="action-area">
      <BaseButton class="login-btn">OTURUMU AÇ</BaseButton>
      <p class="register-text">
        Hesabınız yok mu? <a href="#" class="register-link">Kayıt ol</a>
      </p>
    </div>

    <ul class="menu-links">
      <li>
        <a href="#">ALIŞVERİŞLERİM <span class="arrow">→</span></a>
      </li>
      <li>
        <a href="#">MANGO LIKES YOU <span class="arrow">→</span></a>
      </li>
      <li>
        <a href="#">YARDIM <span class="arrow">→</span></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'
</script>

<style scoped>
.user-menu-dropdown {
  position: absolute;
  top: 100%; /* Header'ın hemen altına yapış */
  right: -80px; /* Biraz sağa kaydırarak ortala */
  width: 320px;
  background-color: white;
  border: 1px solid #e5e5e5;
  padding: 30px 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 100; /* Her şeyin üstünde */
}

/* Üstteki küçük üçgen */
.triangle {
  position: absolute;
  top: -6px; /* Kutunun tepesine çık */
  right: 120px; /* "Giriş Yap" yazısının altına denk getir */
  width: 12px;
  height: 12px;
  background-color: white;
  border-left: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  transform: rotate(45deg); /* Kareyi döndürerek üçgen yap */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;
}

.action-area {
  text-align: center;
  margin-bottom: 30px;
}

/* BaseButton'ı eziyoruz (siyah yapmak için) */
.login-btn {
  width: 100%;
  background-color: black !important;
  color: white !important;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 11px;
}

.register-text {
  font-size: 11px;
  color: #333;
}

.register-link {
  font-weight: 600;
  text-decoration: underline;
  color: black;
}

.menu-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-links li {
  margin-bottom: 20px;
}

.menu-links a {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.arrow {
  font-weight: 300;
  color: #666;
}
</style>