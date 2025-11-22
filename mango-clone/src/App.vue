<template>
  <HeaderComponent />
  
  <main>
    <HeroSection 
      v-for="section in homepageData" 
      :key="section.id"
      :background-image="section.image"
      :title="section.title"
      :subtitle="section.subtitle"
      :button-text="section.buttonText"
      :is-text-white="section.isWhite"
    />
  </main>

  <FooterComponent />
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/organisms/HeaderComponent.vue'
import FooterComponent from './components/organisms/FooterComponent.vue'
import HeroSection from './components/organisms/HeroSection.vue'

// MOCK DATA (Sanki veritabanından gelmiş gibi verilerimiz)
// Mango Kadın ana sayfasındaki sıralamayı buraya yazıyoruz.
// App.vue içindeki script kısmı

const homepageData = ref([
  {
    id: 1,
    title: 'NEW NOW',
    buttonText: 'DAHA FAZLASINI KEŞFET',
    image:'/images/Hero-1.jpeg', 
    isWhite: true 
  },
  {
    id: 2,
    title: 'PARTY',
    buttonText: 'DAHA FAZLASINI KEŞFET',
    image:'/images/Hero-2.jpeg',
    isWhite: true
  },
  {
    id: 3,
    title: 'CHOCOLATE',
    buttonText: 'DAHA FAZLASINI KEŞFET',
    image:'/images/Hero-3.jpeg',
    isWhite: true
  }
])
</script>

<style>
/* Global CSS (main.css kullanıyorsun ama burası boş kalabilir) */
</style>