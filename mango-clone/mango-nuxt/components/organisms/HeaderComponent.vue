<template>
  <div class="header-wrapper" @mouseleave="activeMenu = null">

    <header class="header">
      <div class="header-container">

        <nav class="nav-left">
          <NuxtLink to="/" @mouseenter="activeMenu = 'KADIN'">KADIN</NuxtLink>
          <NuxtLink to="/erkek" @mouseenter="activeMenu = 'ERKEK'">ERKEK</NuxtLink>

          <a href="#" @mouseenter="activeMenu = 'TEEN'" @click.prevent>TEEN</a>
          <a href="#" @mouseenter="activeMenu = 'ÇOCUK'" @click.prevent>ÇOCUK</a>

          <a href="#" @mouseenter="activeMenu = 'HOME'" @click.prevent>HOME</a>
        </nav>

        <NuxtLink to="/" class="logo-link">
          <SiteLogo />
        </NuxtLink>

        <nav class="nav-right" @mouseenter="activeMenu = null">
          <a href="#" @click.prevent class="nav-link">ARA</a>

          <template v-if="!authStore.isAuthenticated">
            <NuxtLink to="/login" class="nav-link">GİRİŞ YAP</NuxtLink>
          </template>

          <template v-else>
            <div class="user-menu">
              <span class="user-name">{{ authStore.user?.name }}</span>
              <button @click="authStore.logout()" class="logout-btn">(ÇIKIŞ)</button>
            </div>
          </template>

          <NuxtLink to="/wishlist" class="nav-link">FAVORİLERİM</NuxtLink>
          <NuxtLink to="/cart" class="nav-link">SEPET ({{ cartStore.totalItems }})</NuxtLink>
        </nav>

      </div>
    </header>

    <MenuComponent v-if="currentMenuData" :data="currentMenuData" />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* NUXT 3 ÖNEMLİ NOT:
   Eğer bileşenlerin "components" klasörü içindeyse, import etmene gerek YOKTUR.
   Nuxt onları otomatik bulur. Ancak dosya yollarından emin olmak için 
   manuel importları şimdilik bırakıyorum. Hata alırsan bu importları silmeyi dene.
*/

import MenuComponent from './MenuComponent.vue' // Bu dosyanın Header ile aynı klasörde olduğundan emin ol!
import SiteLogo from '../atoms/SiteLogo.vue'    // components/atoms/SiteLogo.vue var mı?
import UserMenu from '../molecules/UserMenu.vue' // components/molecules/UserMenu.vue var mı?
import { useWishlistStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart' // Sepet sayısını da gösteriyorsan bu da lazım
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const wishlistStore = useWishlistStore()
const cartStore = useCartStore()
// --- STATE ---
const activeMenu = ref(null)
const isUserMenuOpen = ref(false)

// --- MENÜ VERİLERİ ---
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

// --- COMPUTED ---
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
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  z-index: 50;
}

/* HEADER İÇ DÜZEN */
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* LOGO ORTALAMA */
.logo-link {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
}

/* MENÜ LİNKLERİ */
.nav-left a,
.nav-right a {
  text-decoration: none;
  color: black;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 11px;
  font-weight: 500;
  margin-right: 20px;
  letter-spacing: 1px;

  display: inline-block;
  position: relative;
  padding-bottom: 3px;
  cursor: pointer;
}

/* SOL MENÜ ALT ÇİZGİ EFEKTİ */
.nav-left a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: black;
  transition: width 0.3s ease;
}

.nav-left a:hover::after {
  width: 100%;
}

/* Nuxt Link Aktif Class'ı (RouterLinkActive) */
.nav-left a.router-link-active::after {
  width: 100%;
}

/* SAĞ MENÜ AYARLARI */
.nav-right a:last-child {
  margin-right: 0;
}

.user-menu-wrapper {
  position: relative;
  display: inline-block;
  margin-right: 20px;
  height: 100%;
}

.user-menu-wrapper:hover .login-link {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.user-menu-wrapper a {
  margin-right: 0;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px; /* menüler arası boşluk */
}

.user-menu {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 11px;
  
  /* DEĞİŞİKLİK BURADA: */
  font-weight: 700; /* 500 yerine 700 (veya bold) yaptık ki kalın olsun */
  letter-spacing: 1px; /* Harfler arası boşluk (Diğer linkler gibi) */
  color: black;
  
  display: flex;
  align-items: center;
  gap: 5px;
}

.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 10px; /* İsimden bir tık küçük */
  text-decoration: underline;
  color: #000000; /* Tam siyah değil, koyu gri */
  padding: 0;
  margin-left: 2px;
}

</style>

