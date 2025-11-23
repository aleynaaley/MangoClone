<template>
  <div class="auth-page">
    <div class="auth-container">
      
      <h1 class="page-title">GİRİŞ YAP</h1>

      <form @submit.prevent class="auth-form">
        
        <div class="input-group">
          <input type="email" placeholder="E-posta adresi" class="form-input" required />
        </div>

        <div class="input-group password-group">
          <input type="password" placeholder="Şifre" class="form-input" required />
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
// Script kısmı şimdilik boş, sadece görüntü yapıyoruz.
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.auth-container {
  width: 100%;
  max-width: 400px; /* Form genişliğini sınırlar */
  text-align: center;
}

.page-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: left; /* Görselde başlık solda gibi duruyor, ortadaysa center yap */
}

/* INPUT STİLLERİ */
.input-group {
  margin-bottom: 20px;
  position: relative;
}

.form-input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc; /* İnce gri kenarlık */
  font-size: 13px;
  outline: none;
}

.form-input:focus {
  border-color: black;
}

/* Şifre Göz İkonu */
.password-group .eye-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 16px;
  color: #666;
}

/* CHECKBOX STİLİ */
.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: #333;
}

.custom-checkbox input {
  margin-right: 10px;
  transform: scale(1.2); /* Kutuyu biraz büyüt */
}

/* BUTONLAR */
.btn {
  width: 100%;
  padding: 15px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  letter-spacing: 0.5px;
  display: block; /* Router-link için */
  text-decoration: none; /* Link alt çizgisini kaldır */
  box-sizing: border-box; /* Padding dahil genişlik hesabı */
  text-align: center;
}

.btn-black {
  background-color: black;
  color: white;
  margin-bottom: 15px;
}

.btn-white {
  background-color: white;
  color: black;
  margin-bottom: 40px;
}

.btn-white:hover {
  background-color: #f5f5f5;
}

/* UNUTTUM LİNKİ */
.forgot-link {
  color: black;
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 500;
}
</style>