// types/index.ts

// 1. Interface: Ürün Tipi
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

// 2. Interface: Sepet Elemanı (Ürüne ek olarak 'adet' bilgisi içerir)
export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  token: string; // Giriş yaptığını kanıtlayan anahtar
}

// 3. Interface: Menü Linkleri (Header için)
export interface MenuLink {
  title: string;
  url: string;
  isActive: boolean;
}

// 4. Interface: Kullanıcı Bilgisi (Login kısmı için hazırlık)
export interface User {
  id: number;
  email: string;
  fullName: string;
  isAuthenticated: boolean;
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