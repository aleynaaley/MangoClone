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
          
          <router-link to="/favorites">FAVORİ ÜRÜNLER</router-link>
          <router-link to="/cart">SEPET</router-link> 
        </nav>

      </div>
    </header>

    <MenuComponent v-if="currentMenuData" :data="currentMenuData" />    

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// --- İMPORTLARIN YOLLARINI KONTROL ET ---
// Eğer dosya yerleri farklıysa burayı güncellemen gerekir
import MenuComponent from './MenuComponent.vue'
import SiteLogo from '../atoms/SiteLogo.vue' 
import UserMenu from '../molecules/UserMenu.vue'

// --- STATE (DURUM) YÖNETİMİ ---
const activeMenu = ref(null) // Hangi menü açık? (KADIN, ERKEK vs.)
const isUserMenuOpen = ref(false) // Kullanıcı menüsü açık mı?

// --- MENÜ VERİLERİ (Database gibi düşün) ---
const menuData = {
  'KADIN': {
    type: 'simple',
    items: [
      { title: 'NEW NOW' },
      { title: 'PARTİ VE ÖZEL GÜNLER' },
      { title: 'GİYİM' },
      { title: 'AYAKKABILAR VE AKSESUARLAR' },
      { title: 'BÜYÜK BEDEN' },
      { title: 'PROMOSYON', isRed: true },
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
    type: 'complex',
    topButtons: [{ title: 'GENÇ KIZ' }, { title: 'GENÇ ERKEK' }],
    subtitle: '152 cm - 172 cm arası',
    items: [{ title: 'NEW NOW' }, { title: 'GİYİM' }, { title: 'PROMOSYON', isRed: true }]
  },
  'ÇOCUK': {
    type: 'complex',
    topButtons: [{ title: 'KIZ' }, { title: 'ERKEK' }, { title: 'BEBEK' }],
    items: [{ title: 'NEW NOW' }, { title: 'GİYİM' }, { title: 'PROMOSYON' }]
  },
  'HOME': {
    type: 'simple',
    items: [{ title: 'YATAK ODASI' }, { title: 'MUTFAK' }, { title: 'BANYO' }]
  }
}

// --- COMPUTED (HESAPLANMIŞ VERİ) ---
// Aktif menüye göre doğru datayı seçer
const currentMenuData = computed(() => {
  if (!activeMenu.value) return null
  return menuData[activeMenu.value]
})
</script>

<style scoped>
/* KAPSAYICI */
.header-wrapper {
  position: relative;
}

/* HEADER GENEL */
.header {
  position: sticky; /* Sayfa kayınca tepeye yapış */
  top: 0; 
  background-color: white; 
  border-bottom: 1px solid #e5e5e5; 
  z-index: 50; /* Her şeyin üstünde olsun */
}

/* HEADER İÇ DÜZEN */
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Sol ve Sağ menüyü kenarlara it */
  position: relative; /* Logo buna göre ortalanacak */
}

/* --- LOGO ORTALAMA SİHİRBAZI --- */
.logo-link {
  position: absolute; /* Akıştan bağımsız */
  left: 50%;          /* Ekranın tam ortasına git */
  transform: translateX(-50%); /* Kendi genişliğinin yarısı kadar geri gel (Tam Merkez) */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60; /* Linklerin üstünde dursun */
}

/* --- MENÜ LİNKLERİ GENEL --- */
.nav-left a,
.nav-right a {
  text-decoration: none;
  color: black; 
  font-size: 11.5px;
  font-weight: 500;
  margin-right: 20px;
  letter-spacing: 0.5px;
  display: inline-block;
  position: relative; /* Alt çizgi buna göre konumlanacak */
  padding-bottom: 2px; /* Çizgi ile yazı arası boşluk */
}

/* --- SOL MENÜ ALT ÇİZGİ EFEKTİ --- */
.nav-left a::after {
  content: '';
  position: absolute;
  width: 0; /* Başlangıçta çizgi yok */
  height: 1px; /* İnce çizgi */
  bottom: 0; /* En altta */
  left: 0;
  background-color: black; /* Siyah */
  transition: width 0.3s ease; /* Animasyonlu uzama */
}

/* Mouse üzerine gelince çizgi %100 olsun */
.nav-left a:hover::after {
  width: 100%;
}

/* Eğer o sayfadaysak (Aktif Link) çizgi hep %100 kalsın */
.nav-left a.router-link-active::after {
  width: 100%;
}

/* --- SAĞ MENÜ AYARLARI --- */
.nav-right a:last-child {
  margin-right: 0;
}

.user-menu-wrapper {
  position: relative;
  display: inline-block;
  margin-right: 20px;
  height: 100%;
}

/* Giriş yap linkinin altı çizilmesi (Mango stili) */
.user-menu-wrapper:hover .login-link {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.user-menu-wrapper a {
  margin-right: 0;
}
</style>