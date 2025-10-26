<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="newsletter-section">
        <p class="newsletter-text">Özel promosyonlar, kişiye özel indirimler ve son yenilikler ile ilgili bilgi alın</p>
        <div class="newsletter-form">
          <input type="email" placeholder="E-posta adresi" class="email-input">
          <button class="subscribe-button">ABONE OL</button>
        </div>
        <p class="privacy-text">
          Abone olarak, <a href="#" class="privacy-link">Gizlilik Politikasını</a> okuduğunuzu onaylamış oluyorsunuz.
        </p>
      </div>

      <div class="social-country-section">
        <div class="country-selector">
          <a href="#" class="country-link">TÜRKİYE →</a>
        </div>
        <div class="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">YOUTUBE</a>
          <a href="#">TIKTOK</a>
          <a href="#">SPOTIFY</a>
          <a href="#">PINTEREST</a>
          <a href="#">X</a>
          <a href="#">LINKEDIN</a>
        </div>
      </div>

      <div class="footer-links-grid">
        <div class="link-column">
          <a href="#" class="column-title">YARDIM</a>
          <a href="#">ALIŞVERİŞLERİM</a>
          <a href="#">İADELER</a>
        </div>
        <div class="link-column">
          <a href="#" class="column-title">ŞİRKET</a>
          <a href="#">MANGO'DA ÇALIŞ</a>
          <a href="#">BASIN</a>
        </div>
        <div class="link-column">
          <a href="#" class="column-title">SİTE MAP</a>
          <a href="#">ÖZEL GÜNLER</a>
          <a href="#">SORUMLULUK</a>
        </div>
        <div class="link-column">
          <a href="#" class="column-title">MANGO LIKES YOU KULÜBÜ</a>
          <a href="#">DISCOVER</a>
          <a href="#">MAĞAZALAR</a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <div class="legal-links">
          <a href="#">GİZLİLİK POLİTİKASI VE ÇEREZLER</a>
          <a href="#">GENEL SATIŞ KOŞULLARI</a>
          <a href="#">ETİK KANAL</a>
        </div>
        <div class="copyright">
          © 2025 MANGO Tüm hakları saklıdır
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Script kısmı boş kalabilir
</script>

<style scoped>
/* Genel Footer Stilleri */

/* ... .newsletter-section ve .social-country-section stilleri ... 
   Bunlar çoğunlukla text-align: center ve margin (boşluk) ayarları.
   .newsletter-form'da 'display: flex' kullanman da (input ve butonu yan yana getirmek için) çok doğru. */

.footer {
  background-color: white;
  color: black;
  padding-top: 50px; /* Üst kısımdan bir miktar boşluk */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Header ile aynı fontu kullan */
}

.footer-container {
  max-width: 1400px; /* İçerik genişliğini merkezde tutmak için */
  margin: 0 auto;
  padding: 0 20px;
}

/* 1. E-posta Aboneliği Formu */
.newsletter-section {
  text-align: center;
  margin-bottom: 60px;
}

.newsletter-text {
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 500;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.email-input {
  padding: 10px;
 
  width: 250px;
  font-size: 12px;
  text-transform: lowercase; /* Placeholder küçük harf gibi duruyor */
}

.email-input::placeholder {
    color: #555;
}

.subscribe-button {
  padding: 10px 15px;
  background-color: white;
  color: black;

  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 1px;
}

.privacy-text {
  font-size: 10px;
  color: #555;
}

.privacy-link {
  color: black;
  text-decoration: underline;
}

/* 2. Sosyal Medya ve Ülke Seçimi */
.social-country-section {
  text-align: center;
  padding: 40px 0;
  
  margin-bottom: 60px;
}

.country-selector {
  margin-bottom: 40px;
}

.country-link {
  color: black;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none; /* Alt çizgiyi kaldırdık */
}

.social-links a {
  color: black;
  text-decoration: none;
  font-size: 11px;
  font-weight: 500;
  margin: 0 10px;
  letter-spacing: 0.5px;
}

/* .footer-links-grid: Dört sütunlu link alanını seçiyoruz */
.footer-links-grid {
  /* --- CSS GRID BAŞLANGICI --- */
  /* Bu da 'display: flex' gibi güçlü bir özelliktir.
     Flexbox genelde tek boyutlu (ya satır YA DA sütun) hizalama içindir.
     Grid ise iki boyutlu (hem satır HEM de sütun) hizalama içindir.  */
  display: grid;
  
  /* "Sütun şablonumu ayarla."
     "repeat(4, ...)" -> "4 kez tekrar et"
     "1fr" -> "1 fractional unit (1 birim kesir)"
     
     Tam çevirisi: 
     "Bana 4 tane sütun oluştur ve bu sütunların hepsi 
     mevcut boşluğun 1'er birimini (yani eşit) paylaşsın."
     Sonuç: 4 eşit genişlikte sütun. */
  grid-template-columns: repeat(4, 2fr); 

  /* gap: 30px; 
     "Bu 4 sütunun arasına (ve alt alta gelirlerse satırların arasına) 30px boşluk koy." */
  gap: 20px; 
  
  padding-bottom: 60px;
}

.link-column a {
  /* display: block; 
     Bu önemlidir. <a> etiketleri normalde 'inline'dır (yan yana dururlar).
     'block' yaparak diyoruz ki: "Her link kendi satırını KAPLASIN, 
     bir sonraki link altına gelsin." 
     Böylece "YARDIM", "ALIŞVERİŞLERİM" gibi linkler alt alta düzgünce dizilir. */
  display: block; /* Linkleri alt alta getirmek için */
  color: black;
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 15px; /* Linkler arasına dikey boşluk */
  font-weight: 400; /* Normal kalınlıkta */
}


/* 4. En Alttaki Yasal Metinler ve Telif Hakkı */
.footer-bottom {
  
  background-color: white; /* Footer'ın alt kısmının da beyaz olması */
}

/* .footer-bottom-container: En alttaki telif hakkı alanı */
.footer-bottom-container {
  max-width: 1400px;
  margin: 0 auto; /* Ortala */
  padding: 0 px 10px;
  display: flex; /* Yine Flexbox! */
  
  /* 'space-between' ile 
     ilk çocuğu (.legal-links) en sola, 
     ikinci çocuğu (.copyright) en sağa yaslıyoruz. */
  justify-content: space-between; 
  align-items: center; /* Dikeyde ortala */
}

.legal-links a {
  color: black;
  text-decoration: none;
  font-size: 10px;
  margin-right: 20px;
  font-weight: 480; 
  letter-spacing: 0.5px;
}

.copyright {
  font-size: 10px;
  color: #555;
}
</style>

