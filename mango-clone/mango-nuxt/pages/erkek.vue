<template>
  <div class="man-view">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Bileşenleri import ediyoruz 
import HeroSection from '../components/organisms/HeroSection.vue'
import DualSection from '../components/organisms/DualSection.vue'

// ERKEK SAYFASI VERİLERİ
const pageContent = ref([
  // 1. HERO
  {
    id: 1,
    type: 'hero',
    data: {
      title: 'NEW NOW',
      buttonText: 'DAHA FAZLASINI KEŞFET',
      image: '/images/erkek2.jpeg',
      isWhite: true 
    }
  },
  
  // 2. DUAL
  {
    id: 2,
    type: 'dual',
    items: [
      {
        title: 'PALTO',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/erkek1.jpeg' 
      },
      {
        title: 'PANTOLON',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/erkek3.jpeg' 
      }
    ]
  },

  // 3. DUAL
  {
    id: 3,
    type: 'dual',
    items: [
      {
        title: 'CEKET',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/erkek4.jpeg'
      },
      {
        title: 'KAZAKLAR VE HIRKALAR',
        linkText: 'TÜMÜNÜ GÖRÜNTÜLE',
        image: '/images/erkek5.jpeg'
      }
    ]
  },

  // 4. HERO
  {
    id: 4,
    type: 'hero',
    data: {
      title: 'THE OUTERWEAR EDIT',
      buttonText: 'DAHA DAZLASINI KEŞFET',
      image: '/images/erkek6.jpeg',
      isWhite: true
    }
  },

  // 5. HERO
  {
    id: 5,
    type: 'hero',
    data: {
      title: 'KNITWEAR',
      buttonText: 'DAHA FAZLASINI KEŞFET',
      image: '/images/erkek7.jpeg',
      isWhite: true
    }
  },
])
</script>