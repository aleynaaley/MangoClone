// composables/useProducts.js
import { ref } from 'vue'

export const useProducts = () => {
  // Bütün ürünler TEK BİR YERDE (Merkez Bankası gibi)
  const products = ref([
    { 
      id: 1, 
      title: 'Çizgili triko kazak', 
      price: 2299.99, 
      formattedPrice: '2.299,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın5.jpeg',
      description: 'Yumuşak dokulu, çizgili desenli triko kazak.',
      colors: ['Siyah/Beyaz'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    { 
      id: 2, 
      title: 'Düşük belli barrel jean', 
      price: 2299.99, 
      formattedPrice: '2.299,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın6.jpeg',
      description: 'Modern kesim, düşük belli jean pantolon.',
      colors: ['Mavi'],
      sizes: ['34', '36', '38', '40']
    },
    { 
      id: 3, 
      title: 'Geniş kesimli cepli gömlek', 
      price: 2299.99, 
      formattedPrice: '2.299,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın7.jpeg',
      description: 'Pamuklu kumaş, geniş kesim rahat gömlek.',
      colors: ['Beyaz', 'Mavi'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    { 
      id: 4, 
      title: 'Kemerli Manteco yünlü palto', 
      price: 8999.99, 
      formattedPrice: '8.999,99 TL',
      hasLargeSize: true, 
      image: '/images/kadın8.jpeg',
      description: 'İtalyan Manteco yünü, şık ve sıcak tutan palto.',
      colors: ['Camel'],
      sizes: ['S', 'M', 'L']
    },
    { 
      id: 5, 
      title: 'Kalıplı yün palto', 
      price: 8999.99, 
      formattedPrice: '8.999,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın12.jpeg',
      description: 'Klasik kesim, uzun ömürlü yün palto.',
      colors: ['Siyah'],
      sizes: ['S', 'M', 'L']
    },
    { 
      id: 6, 
      title: 'Diplomatik çizgili blazer ceket', 
      price: 4999.99, 
      formattedPrice: '4.999,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın13.jpeg',
      description: 'Ofis şıklığı için ideal blazer ceket.',
      colors: ['Lacivert'],
      sizes: ['34', '36', '38']
    },
    { 
      id: 7, 
      title: 'Saten dantel etek', 
      price: 1999.99, 
      formattedPrice: '1.999,99 TL',
      hasLargeSize: false, 
      image: '/images/kadın14.jpeg',
      description: 'Zarif dantel detaylı, akışkan saten etek.',
      colors: ['Siyah'],
      sizes: ['XS', 'S', 'M']
    },
    { 
      id: 8, 
      title: 'Godeli deri görünümlü etek', 
      price: 2999.99, 
      formattedPrice: '2.999,99 TL',
      hasLargeSize: true, 
      image: '/images/kadın15.jpeg',
      description: 'Deri görünümlü, modern kesim etek.',
      colors: ['Siyah'],
      sizes: ['34', '36', '38']
    },
  ])

  // ID'ye göre ürünü bulan fonksiyon
  const getProductById = (id) => {
    // Gelen id string olabilir (URL'den geliyor), sayıya çevirip arıyoruz
    return products.value.find(p => p.id === parseInt(id))
  }

  return {
    products,
    getProductById
  }
}