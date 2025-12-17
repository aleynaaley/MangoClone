import { defineStore } from 'pinia'
import type { Product, CartItem } from '@/types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    // Sepetin içinde sadece CartItem tipinde veriler olabilir
    items: [] as CartItem[]
  }),

  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        // ...product diyerek ürünün tüm özelliklerini alıyoruz, üstüne quantity ekliyoruz
        this.items.push({ 
          ...product, 
          quantity: 1 
        })
      }
    },
    
    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.id !== productId)
    }
  },

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
})