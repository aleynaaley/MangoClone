import { ref } from 'vue'
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where
} from 'firebase/firestore'
import { useNuxtApp } from '#app'

export interface Product {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  hasLargeSize: boolean;
  image: string;
  images: string[];
  description: string;
  colors: string[];
  sizes: string[];
  tag?: string;
}

export const useProducts = () => {
  const products = ref<Product[]>([])
  const { $db } = useNuxtApp()

  // --- YARDIMCI FONKSİYON: RESİMLERİ BİRLEŞTİRME ---
  // Bu fonksiyon; image, image2, image3 alanlarını tek bir dizi yapar.
  const processImages = (data: any) => {
    const allImages: string[] = []

    // 1. Ana resim varsa ekle
    if (data.image) allImages.push(data.image)

    // 2. image2 varsa ekle
    if (data.image2) allImages.push(data.image2)

    // 3. image3 varsa ekle 
    if (data.image3) allImages.push(data.image3)

    // 4. Eğer zaten 'images' diye bir dizi varsa onları da ekle
    if (data.images && Array.isArray(data.images)) {
      // Tekrar edenleri eklememek için kontrol
      allImages.push(...data.images)
    }


    return [...new Set(allImages)]
  }

  // --- 1. ÜRÜNLERİ LİSTELEME ---
  const fetchProducts = async (filterTag: string | null = null) => {
    try {
      const productsRef = collection($db, 'products')
      let q;

      if (filterTag) {
        q = query(productsRef, where('tag', '==', filterTag))
      } else {
        q = productsRef
      }

      const querySnapshot = await getDocs(q)

      products.value = querySnapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          title: data.title,
          price: Number(data.price) || 0,

          formattedPrice: `${data.price} TL`,
          hasLargeSize: data.hasLargeSize || false,
          image: data.image,


          images: processImages(data),

          description: data.description || '',
          colors: data.colors || [],
          sizes: data.sizes || [],
          tag: data.tag || ''
        } as Product
      })
    } catch (error) {
      console.error("Ürünler çekilirken hata oluştu:", error)
    }
  }

  // --- 2. TEK ÜRÜN DETAYI ---
  const getProductById = async (id: string) => {
    try {
      const docRef = doc($db, "products", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        return {
          id: docSnap.id,
          ...data,
          price: Number(data.price) || 0,

          formattedPrice: `${data.price} TL`,


          images: processImages(data)

        } as Product
      }
    } catch (error) {
      console.error("Ürün detayı hatası:", error)
    }
    return undefined
  }

  return {
    products,
    fetchProducts,
    getProductById
  }
}