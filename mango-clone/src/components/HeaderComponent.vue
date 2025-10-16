<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav-left">
        <a href="#">KADIN</a>
        <a href="#">ERKEK</a>
        <a href="#">TEEN</a>
        <a href="#">ÇOCUK</a>
        <a href="#">HOME</a>
      </nav>

      <div class="logo">
        MANGO
      </div>

      <nav class="nav-right">
        <a href="#">ARA</a>
        <a href="#">HESABIM</a>
        <a href="#">FAVORİLER</a>
        <a href="#">SEPET (3)</a> 
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
/* Header bileşeni */
.header {
  position: sticky;
  top: 0;
  background-color: white; /* Beyaz arka plan */
  border-bottom: 1px solid #e5e5e5; /* İlk resimdeki ince alt çizgiyi ekledik */
  z-index: 50;
}

/* Ana Navigasyon Çubuğu */
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  /* Dikey boşluğu sıfıra yakın ayarladık, bu üstteki boşluğu azaltmaya yardımcı olur */
  padding: 18px 24px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* Sol ve Sağ Menü Linkleri */
.nav-left a,
.nav-right a {
  text-decoration: none;
  color: black; 
  font-size: 11.5px;
  font-weight: 500;
  margin-right: 20px;
  transition: opacity 0.2s;
  letter-spacing: 0.5px;
  /* Linklerin dikey hizalanmasına yardımcı olmak için display: inline-block ekleyebiliriz */
  display: inline-block; 
}

.nav-left a:last-child,
.nav-right a:last-child {
  margin-right: 0;
}

.nav-left a:hover,
.nav-right a:hover {
  opacity: 0.7;
}

/* Logo Ortada */
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  color: black; 
  /* Logo metnini dikey olarak ortalamak için bir height/line-height değeri ekleyebiliriz */
  line-height: 1; /* Satır yüksekliğini sıfırladık */
}
</style>