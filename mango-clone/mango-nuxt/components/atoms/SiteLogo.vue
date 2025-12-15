<template>
  <div class="logo-wrapper">
    <img src="/logo.png" alt="MANGO" class="logo-img" />
  </div>
</template>

<script setup>
// Script kısmında bir işimiz yok
</script>

<style scoped>
.logo-wrapper {
  position: absolute;
  left: 50%;    /* Ekranın ortasına hizala */
  transform: translateX(-50%); /* Yarı genişlik kadar sola kaydır */
  z-index: 10; /* Diğer elemanların üstünde dursun */
  display: flex;
  align-items: center;
}

.logo-img {
  /* Resmin boyutunu buradan ayarlayabilirsin */
  height: 18px;  /* Orijinal sitedeki boyuta yakın bir değer */
  width: auto;   /* Genişlik otomatik ayarlansın (en-boy oranı bozulmasın) */
  display: block; /* Altında boşluk kalmaması için */
  cursor: pointer; /* Üzerine gelince el işareti çıksın */
}
</style>