import { ref } from 'vue'

export interface Product {
  id: number;
  title: string;
  price: number;
  formattedPrice: string;
  hasLargeSize: boolean;
  // Ana resim (Thumbnail için)
  image: string;

  images: string[];
  description: string;
  colors: string[];
  sizes: string[];
}

export const useProducts = () => {
  const products = ref<Product[]>([
    { 
      id: 1, 
      title: 'Çizgili triko kazak', 
      price: 2299.99, 
      formattedPrice: '2.299,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın5.jpeg', // Ana resim
      // YENİ: Bu ürünün detay sayfasında görünecek tüm resimler.
      // Bilgisayarındaki dosya isimlerinin aynısını buraya yazmalısın.
      images: [
        '/images/kadın5.jpeg',
        '/images/kadın9.jpeg', // Örnek dosya isimleri
        '/images/kadın10.jpeg',
        '/images/kadın11.jpeg'
      ],
      description: 'Orta kalınlıkta çizgili triko kumaştan üretilmiş bu tasarım, kutu yaka ve uzun kollu olarak sunulmaktadır.',
      colors: ['Gri'], // Orijinaldeki gibi tek renk yaptım
      sizes: ['S', 'M', 'L']
    },
    { 
      id: 2, 
      title: 'Düşük belli barrel jean', 
      price: 2299.99, 
      formattedPrice: '2.299,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın6.jpeg', 
      // Diğer ürünler için de en azından ana resimlerini diziye ekleyelim ki hata vermesinler.
      images: ['/images/kadın6.jpeg'], 
      description: 'Modern kesim, düşük belli jean pantolon.',
      colors: ['Mavi'],
      sizes: ['34', '36', '38', '40']
    },
    // ... Diğer ürünlerin (hepsine 'images' dizisini eklemeyi unutma) ...
  ])

  const getProductById = (id: number | string) => {
    if (!id) return undefined;
    return products.value.find(p => String(p.id) === String(id));
  }

  return {
    products,
    getProductById
  }
}