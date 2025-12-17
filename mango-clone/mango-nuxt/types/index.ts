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