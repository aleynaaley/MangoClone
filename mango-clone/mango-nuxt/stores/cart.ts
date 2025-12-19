import { defineStore } from 'pinia'
import type { Product, CartItem } from '@/types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    // Sepetin içinde sadece CartItem tipinde veriler olabilir
    items: [] as CartItem[]
  }),

  actions: {
    addToCart(product: any) {
      // Sepette bu ürün var mı kontrol et
      const existingItem = this.items.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1,
          // Ürünü sepete atarken de fiyatın sayı olduğundan emin olalım
          price: Number(product.price) || 0 
        })
      }},

    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.id !== productId)
    },

    increaseQuantity(productId: number) {
      const item = this.items.find(i => i.id === productId)
      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find(i => i.id === productId)
      // Adet 1'den büyükse azalt, yoksa hiçbir şey yapma (silmek için zaten X var)
      if (item && item.quantity > 1) {
        item.quantity--
      }
    },
  },

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        // Garanti olsun diye burada da sayıya çeviriyoruz
        const itemPrice = Number(item.price) || 0
        const itemQuantity = Number(item.quantity) || 1

        return total + (itemPrice * itemQuantity)
      }, 0) //.toFixed(2) // İstersen kuruş hanesi için bunu açabilirsin
    }
  },
})