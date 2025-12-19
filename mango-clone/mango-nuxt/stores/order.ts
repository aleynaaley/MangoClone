import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore' 
import { useNuxtApp } from '#app'

export const useOrderStore = defineStore('order', {
  actions: {
    // Firebase'e Sipariş Kaydetme Fonksiyonu
    async createOrder(orderData: any) {
      // Nuxt plugin'inden Firebase veritabanını ($db) alıyoruz
      const { $db } = useNuxtApp()

      try {
        // 'orders' adında bir koleksiyona veriyi ekle
        // Eğer 'orders' tablosu yoksa Firebase otomatik oluşturur.
        const docRef = await addDoc(collection($db, 'orders'), {
          ...orderData,
          createdAt: new Date() // Sipariş tarihini ekle
        })
        
        console.log("Sipariş oluşturuldu, ID: ", docRef.id)
        return true // Başarılı

      } catch (error) {
        console.error("Sipariş hatası: ", error)
        return false // Başarısız
      }
    }
  }
})