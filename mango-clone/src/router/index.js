// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewNowView from '../views/NewNowView.vue'
import ManView from '../views/ManView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/kadin' // Biri siteye girince direkt /kadin sayfasına gönder
    },
    {
      path: '/kadin',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kadin/new-now', // Adres çubuğunda görünecek yol
      name: 'new-now',
      component: NewNowView
    },
    {
      path: '/erkek',
      name: 'men',
      component: ManView
    },
    { 
      path: '/product/:id', 
      name: 'product-detail', 
      component: ProductDetailView 
    }
  ]
})

export default router