<template>
  <HeaderComponent />
  
  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/organisms/HeaderComponent.vue'
import FooterComponent from './components/organisms/FooterComponent.vue'
</script>