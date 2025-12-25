// types/index.ts

// 1. PRODUCT (ÜRÜN) ARAYÜZÜ
// Ne işe yarar?: Firebase'deki 'products' tablosundan gelen verinin şablonudur.
// Kodda bir yere "product." yazdığında VS Code'un sana "price", "title" diye
// otomatik tamamlamasını sağlayan şey budur.
export interface Product {
  id: number;
  title: string;
  price: number;
  formattedPrice: string;
  hasLargeSize: boolean;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
}

// 2. CART ITEM (SEPET ÖĞESİ) ARAYÜZÜ
// Ne işe yarar: Sepette sadece ürünü tutmak yetmez, kaç tane olduğunu da tutmalıyız.
// Bu yüzden "Ürün Bilgisi" + "Adet" bilgisini birleştiren yeni bir tip ürettik.
export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string | number;
  name: string;      // Ad Soyad
  email: string;
  token?: string;    // Giriş anahtarı 
}

// 3. Interface: Menü Linkleri (Header için)
export interface MenuLink {
  title: string;
  url: string;
  isActive: boolean;
}

export interface Order {
  userId?: string; // Giriş yapmışsa ID'si
  customerName: string;
  customerEmail: string;
  address: string;
  city: string;
  items: any[]; // Sepetteki ürünler
  totalAmount: number;
  status: 'pending' | 'shipped'; // Sipariş durumu
  createdAt: Date;
}