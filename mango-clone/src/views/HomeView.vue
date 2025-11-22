<template>
  <HeaderComponent />
  
  <main>
  <template v-for="section in pageContent" :key="section.id">
    
    <HeroSection 
      v-if="section.type === 'hero'"
      :background-image="section.data.image"
      :title="section.data.title"
      :subtitle="section.data.subtitle"
      :button-text="section.data.buttonText"
      :is-text-white="section.data.isWhite"
    />

    <DualSection 
      v-else-if="section.type === 'dual'"
      :items="section.items"
    />

  </template>
</main>

  <FooterComponent />
</template>

<script setup>
import { ref } from 'vue'

import HeroSection from '../components/organisms/HeroSection.vue'
import DualSection from '../components/organisms/DualSection.vue'

// MOCK DATA (Sanki veritabanından gelmiş gibi verilerimiz)
// Mango Kadın ana sayfasındaki sıralamayı buraya yazıyoruz.
// App.vue içindeki script kısmı


const pageContent = ref([
  // 1. BÖLÜM: BÜYÜK HERO (NEW NOW)
  {
    id: 1,
    type: 'hero', // Bu bir HeroSection olacak
    data: {
    title: 'NEW NOW',
    buttonText: 'DAHA FAZLASINI KEŞFET',
    image:'/images/Hero-1.jpeg', 
    isWhite: true 
    }
  },
  
  // 2. BÖLÜM: İKİLİ GÖRSEL (Grid)
  {
    id: 2,
    type: 'dual', // Bu bir DualSection olacak
    items: [
      {
        title: 'ELBİSE',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/kadın4.jpeg' 
      },
      {
        title: 'ETEK',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/kadın3.jpeg' 
      }
    ]
  },

  {
    id: 3,
    type: 'dual',
    items: [
      {
        title: 'PALTO',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/kadın1.jpeg'
      },
      {
        title: 'ÇANTA',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/kadın2.jpeg'
      }
    ]
  },
  {
    id: 4,
    type: 'hero',
    data: {
    title: 'PARTY',
    buttonText: 'DAHA FAZLASINI KEŞFET',
    image:'/images/Hero-2.jpeg',
    isWhite: true
    }
  },

  {
    id: 5,
    type: 'hero',
    data: {
    title: 'CHOCOLATE',
    buttonText: 'DAHA FAZLASINI KEŞFET',
    image:'/images/Hero-3.jpeg',
    isWhite: true
    }
  },
])
</script>