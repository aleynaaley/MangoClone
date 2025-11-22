// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewNowView from '../views/NewNowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-now', // Adres çubuğunda görünecek isim
      name: 'new-now',
      component: NewNowView
    }
  ]
})

export default router