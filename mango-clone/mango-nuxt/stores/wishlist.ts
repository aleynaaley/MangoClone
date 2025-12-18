import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// Ürün tipini composables'dan veya types dosyasından alıyoruz
import type { Product } from '@/composables/useProducts' 

export const useWishlistStore = defineStore('wishlist', () => {
  // Favori listemiz (Boş başlıyor)
  const items = ref<Product[]>([])

  // Toplam kaç favori var?
  const totalItems = computed(() => items.value.length)

  // Bu ürün favorilerde var mı? (Kalp ikonunu doldurmak için lazım)
  const isInWishlist = (productId: number) => {
    return items.value.some(p => p.id === productId)
  }

  // Ekleme / Çıkarma (Toggle mantığı: Varsa çıkar, yoksa ekle)
  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const addToWishlist = (product: Product) => {
    items.value.push(product)
  }

  const removeFromWishlist = (productId: number) => {
    items.value = items.value.filter(p => p.id !== productId)
  }

  return {
    items,
    totalItems,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist
  }
})