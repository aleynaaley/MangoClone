import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { useNuxtApp } from '#app'

// Ürün tipini tanımla (Senin yapına göre güncelle)
interface Product {
  id: string | number;
  title: string;
  price: string | number; // Firebase'den bazen string "1.299 TL" gelebilir
  image: string;
  category?: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false
  }),

  actions: {
    async fetchProducts() {
      // Eğer zaten veri çektiysek tekrar yorma
      if (this.products.length > 0) return

      this.loading = true
      const { $db } = useNuxtApp()

      try {
        // 'products' koleksiyonuna git ve verileri al
        const querySnapshot = await getDocs(collection($db, 'products'))
        
        const fetchedProducts: Product[] = []
        
        querySnapshot.forEach((doc) => {
          // Firebase verisi + ID'sini birleştirip diziye at
          fetchedProducts.push({
            id: doc.id, 
            ...doc.data()
          } as Product)
        })

        this.products = fetchedProducts
        console.log("Firebase'den Ürünler Geldi:", this.products)

      } catch (error) {
        console.error("Ürün çekme hatası:", error)
      } finally {
        this.loading = false
      }
    }
  },

  getters: {
    // Kategoriye göre filtreleme (Örn: Sadece 'KADIN' ürünleri)
    getWomenProducts: (state) => state.products.filter(p => p.category === 'KADIN' || p.category === 'WOMEN'),
    getMenProducts: (state) => state.products.filter(p => p.category === 'ERKEK' || p.category === 'MEN'),
  }
})