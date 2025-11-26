// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewNowView from '../views/NewNowView.vue'
import ManView from '../views/ManView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import FavProductView from '../views/FavProductView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),    //url de ki # fazlalığını kaldırır.
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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router