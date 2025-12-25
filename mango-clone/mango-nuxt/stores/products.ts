// stores/product.ts
import { defineStore } from 'pinia'
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore'
import { useNuxtApp } from '#app'
// Senin types klasöründeki tipleri kullanalım
import type { Product } from '@/types'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null, // Detay sayfası için
    loading: false
  }),

  actions: {
    // --- YARDIMCI: Fiyatı Sayıya Çevir ---
    parsePrice(value: any): number {
      if (typeof value === 'number') return value;
      if (!value) return 0;
      let str = String(value);
      // Hem nokta hem virgül varsa (2.299,99) -> Noktayı sil, virgülü nokta yap
      if (str.includes(',') && str.includes('.')) {
         str = str.replace(/\./g, '').replace(',', '.');
      } 
      // Sadece virgül varsa (1500,50) -> Virgülü nokta yap
      else if (str.includes(',')) {
         str = str.replace(',', '.');
      }
      return parseFloat(str) || 0;
    },

    // --- YARDIMCI: Resimleri Birleştir ---
    processImages(data: any): string[] {
      const allImages: string[] = []
      if (data.image) allImages.push(data.image)
      if (data.image2) allImages.push(data.image2)
      if (data.image3) allImages.push(data.image3)
      if (data.images && Array.isArray(data.images)) {
        allImages.push(...data.images)
      }
      return [...new Set(allImages)]
    },

    // --- 1. Ürünleri Getir (Filtreli veya Hepsini) ---
    async fetchProducts(filterTag: string | null = null) {
      this.loading = true
      const { $db } = useNuxtApp()
      
      try {
        const productsRef = collection($db, 'products')
        let q;

        if (filterTag) {
          q = query(productsRef, where('tag', '==', filterTag))
        } else {
          q = productsRef
        }

        const querySnapshot = await getDocs(q)  //getdocs fonksiyonu verileri getirir.
        
        // Verileri işle ve state'e at
        this.products = querySnapshot.docs.map(doc => {
          const data = doc.data()
          const cleanPrice = this.parsePrice(data.price)

          return {
            id: doc.id, 
            title: data.title,
            price: cleanPrice,
            formattedPrice: `${cleanPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL`,
            hasLargeSize: data.hasLargeSize || false,
            image: data.image,
            images: this.processImages(data), // Resim birleştirme fonksiyonunu kullandık
            description: data.description || '',
            colors: data.colors || [],
            sizes: data.sizes || [],
            tag: data.tag || ''
          } as unknown as Product // Type uyumu için
        })
      } catch (error) {
        console.error("Store Hatası:", error)
      } finally {
        this.loading = false
      }
    },

    // --- 2. Tek Ürün Getir (Detay Sayfası İçin) ---
    async fetchProductById(id: string) {
      this.loading = true
      const { $db } = useNuxtApp()
      
      try {
        const docRef = doc($db, "products", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          const cleanPrice = this.parsePrice(data.price)
          
          this.selectedProduct = { 
            id: docSnap.id, 
            ...data,
            price: cleanPrice,
            formattedPrice: `${cleanPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL`,
            images: this.processImages(data) 
          } as unknown as Product
        } else {
            this.selectedProduct = null
        }
      } catch (error) {
        console.error("Detay Hatası:", error)
      } finally {
        this.loading = false
      }
    }
  }
})