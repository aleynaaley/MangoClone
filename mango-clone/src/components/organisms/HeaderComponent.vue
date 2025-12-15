<template>
  <div class="header-wrapper" @mouseleave="activeMenu = null">

    <header class="header">
      <div class="header-container">
        
        <nav class="nav-left">
          <router-link to="/kadin" @mouseenter="activeMenu = 'KADIN'">KADIN</router-link>
          <router-link to="/erkek" @mouseenter="activeMenu = 'ERKEK'">ERKEK</router-link>
          
          <a href="#" @mouseenter="activeMenu = 'TEEN'">TEEN</a>
          <a href="#" @mouseenter="activeMenu = 'ÇOCUK'">ÇOCUK</a>
          <a href="#" @mouseenter="activeMenu = 'HOME'">HOME</a>
        </nav>

        <router-link to="/kadin" class="logo-link">
           <SiteLogo />
        </router-link>

        <nav class="nav-right" @mouseenter="activeMenu = null">
          <a href="#">ARA</a>
          
          <div 
            class="user-menu-wrapper" 
            @mouseenter="isUserMenuOpen = true" 
            @mouseleave="isUserMenuOpen = false"
          >
            <a href="#" class="login-link">GİRİŞ YAP</a>
            
            <UserMenu v-show="isUserMenuOpen" />
          </div>
          <router-link to="/favorites" >FAVORİ ÜRÜNLER</router-link>
          <router-link to="/cart">SEPET </router-link> 
        </nav>
      </div>
    </header>

      <MenuComponent v-if="currentMenuData" :data="currentMenuData" />    

  </div>
</template>

<script setup>
//  Vue'dan 'ref' (hafıza) ve 'computed' (hesaplanmış değer) fonksiyonlarını import 
import { ref, computed } from 'vue'
import MenuComponent from './MenuComponent.vue'
import SiteLogo from '../atoms/SiteLogo.vue'

import UserMenu from '../molecules/UserMenu.vue'
//  Hangi menünün aktif olduğunu takip edecek hafıza
//    Başlangıçta 'null' (hiçbiri açık değil)
const activeMenu = ref(null) // 'KADIN', 'ERKEK', 'TEEN' vb. olabilir
const isUserMenuOpen = ref(false)

//  Menülerin içeriğini bir JavaScript objesi olarak tanımla.

const menuData = {
  'KADIN': {
    type: 'simple', // Basit liste
    items: [
      { title: 'NEW NOW' },
      { title: 'PARTİ VE ÖZEL GÜNLER' },
      { title: 'GİYİM' },
      { title: 'AYAKKABILAR VE AKSESUARLAR' },
      { title: 'BÜYÜK BEDEN' },
      { title: 'PROMOSYON', isRed: true }, // isRed: true olanları kırmızı yapacağız
      { title: 'KOLEKSİYONLAR' },
      { title: 'ÖNE ÇIKANLAR' },
    ]
  },
  'ERKEK': {
    type: 'simple',
    items: [
      { title: 'NEW NOW' },
      { title: 'SELECTION' },
      { title: 'TRİKO' },
      { title: 'GİYİM' },
      { title: 'TAKIM ELBİSE' },
      { title: 'AYAKKABILAR VE AKSESUARLAR' },
      { title: 'PROMOSYON', isRed: true },
      { title: 'KOLEKSİYONLAR' },
      { title: 'ÖNE ÇIKANLAR' },
    ]
  },
  'TEEN': {
    type: 'complex', // 'TEEN' menüsü daha karmaşık
    topButtons: [
      { title: 'GENÇ KIZ' },
      { title: 'GENÇ ERKEK' }
    ],
    subtitle: '152 cm - 172 cm arası',
    items: [
      { title: 'NEW NOW' },
      { title: 'AUTUMN HERITAGE' },
      { title: 'PARTİ VE ÖZEL GÜNLER' },
      { title: 'GİYİM' },
      { title: 'AYAKKABILAR VE AKSESUARLAR' },
      { title: 'PROMOSYON', isRed: true },
      { title: 'ÖNE ÇIKANLAR' },
    ]
  },
  'ÇOCUK': {
    type: 'complex',
    topButtons: [
      { title: 'KIZ ÇOCUK' },
      { title: 'ERKEK ÇOCUK' },
      { title: 'KIZ BEBEK' },
      { title: 'ERKEK BEBEK' },
      { title: 'YENİ DOĞAN' }
    ],
    subtitle: '152 cm - 172 cm arası',
    items: [
      { title: 'NEW NOW' },
      { title: 'CHRİSTMAS PARTY' },
      { title: 'HALLOWEEN' },
      { title: 'GİYİM' },
      { title: 'AYAKKABILAR VE AKSESUARLAR' },
      { title: 'PROMOSYON' },
      { title: 'KOLEKSİYONLAR' },
      { title: 'ÖNE ÇIKANLAR' }
    ]
  },
  'HOME': {
    type: 'simple',
    items: [
      { title: 'YATAK ODASI' },
      { title: 'MUTFAK' },
      { title: 'BANYO' },
    ]
  }
}

const currentMenuData = computed(() => {
  // activeMenu null ise (menü kapalıysa) null döndür.
  if (!activeMenu.value) {
    return null
  }
  // Değilse, menuData'dan ilgili kategorinin verisini bul ve döndür.
  return menuData[activeMenu.value]
})

</script>


<style scoped>

.header-wrapper {
  position: relative;
}

/* scoped: Bu Vue'ye özeldir. 
   Anlamı: Buradaki stiller SADECE bu dosyayı etkilesin, Footer'ı bozmasın. */

/* .header: <header class="header"> ETİKETİ */
.header {
  /* position: sticky; 
     Anlamı: Normalde sayfayla birlikte kayar, 
     ama 'top: 0' (en tepeye) ulaştığı an oraya YAPIŞIR (sticky) ve sabit kalır. */
  position: sticky;
  top: 0; 
  background-color: white; 
  border-bottom: 1px solid #e5e5e5; 
  
  /* z-index: Katman sırasıdır. 
     Sayfadaki diğer elementlerin (resimler vb.) header'ın ÜSTÜNE çıkmasını engeller. 
     50, "çoğu şeyden üstte olsun" demek için güvenli bir sayıdır. */
  z-index: 50; 
}

/* .header-container: Ortadaki kapsayıcımızı seçiyoruz */
.header-container {
  max-width: 1400px; /* "Genişliğin 1400px'i geçmesin" */
  margin: 0 auto; /* "Üst/alt boşluk 0, sağ/sol boşluk OTOMATİK olsun." 
                     Bu, kutuyu yatayda mükemmel ortalar. */
  padding: 18px 24px;   /* "Üstten/Alttan 18px, Sağdan/Soldan 24px boşluk bırak." */
  
  /* --- FLEXBOX BAŞLANGICI --- */
  /* display: flex; 
     Bu, CSS'teki en önemli özelliklerden biridir.
     "İçimdeki doğrudan çocukları (.nav-left, .logo, .nav-right) 
     al ve bir sıra halinde YAN YANA diz." */
  display: flex;
  
  /* align-items: center; 
     "Yan yana dizdiğim o çocukları DİKEYDE ortala." */
  align-items: center;
  
  /* justify-content: space-between; 
     "Onları YATAYDA hizala. 
     'space-between' (araya boşluk koy) demek: 
     İlk çocuğu (.nav-left) en sola, 
     son çocuğu (.nav-right) en sağa yasla 
     ve kalan tüm boşluğu ortadaki çocukların (.logo) etrafına eşit dağıt." */
  justify-content: space-between;
  
  /* --- POZİSYONLAMA BAŞLANGICI  --- */
  /* Burası .logo için bir "Çapa" (Anchor) görevi görecek.Yani headera diyecekki sen yerinden 
  kıpırdama ama .logo senden kaçarsa sana göre hareket etsin. yanni headercontainer hareket etmez  */
  position: relative; 
}

/* Sol ve Sağ Menü Linkleri */
.nav-left a,
.nav-right a {
  text-decoration: none;
  color: black; 
  font-size: 11.5px;
  font-weight: 500;
  margin-right: 20px; /* Linkler arası boşluk */
  letter-spacing: 0.5px; /* Harf arası boşluk */
  display: inline-block; 
}

/* Son linkin sağındaki boşluğu */
.nav-left a:last-child,
.nav-right a:last-child {
  margin-right: 10;
}
/* Kullanıcı menüsünü tutan kapsayıcı */
.user-menu-wrapper {
  position: relative; /* UserMenu buna göre hizalansın diye */
  display: inline-block;
  margin-right: 20px; /* Linkler arası boşluk */
  height: 100%; /* Header yüksekliği kadar */
  padding-top: 5px; /* Hizalama ayarı */
}

/* Mouse üzerine gelince 'Giriş Yap'ın altını çiz */
.user-menu-wrapper:hover .login-link {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Header içindeki a etiketinin marginini sıfırlıyoruz çünkü wrapper'a margin verdik */
.user-menu-wrapper a {
  margin-right: 0; 
}

</style>