// composables/useProducts.ts
import { ref } from 'vue'
import type { Product } from '@/types'

export const useProducts = () => {
  const products = ref<Product[]>([
    { 
      id: 1, 
      title: 'Çizgili triko kazak', 
      price: 2299.99, 
      formattedPrice: '2.299,99 TL',
      hasLargeSize: false, 
      // DİKKAT: Dosya adını 'kadin5.jpeg' yaptıysan burayı da düzelt!
      image: '/images/kadın5.jpeg', 
      description: 'Yumuşak dokulu, çizgili desenli triko kazak.',
      colors: ['Siyah/Beyaz'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    // ... Diğer ürünlerin ...
  ])

  const getProductById = (id: number | string) => {
    // Debug için konsola yazdıralım (Tarayıcıda F12 -> Console'da göreceksin)
    console.log("Aranan ID:", id)
    
    if (!id) return undefined
    
    // String/Number fark etmeksizin bulması için "==" kullanıyoruz
    const found = products.value.find(p => p.id == id)
    
    console.log("Bulunan Ürün:", found)
    return found
  }

  return {
    products,
    getProductById
  }
}