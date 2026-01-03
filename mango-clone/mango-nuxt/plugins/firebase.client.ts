// plugins/firebase.client.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "",
        authDomain: "mangoclone-4e07f.firebaseapp.com",
        projectId: "mangoclone-4e07f",
        storageBucket: "mangoclone-4e07f.firebasestorage.app",
        messagingSenderId: "1080412641898",
        appId: "1:1080412641898:web:a297d4e3fad35be37ac813"
    };

    // 1. Uygulamayı başlat (Tanışma gerçekleşiyor)
    const app = initializeApp(firebaseConfig);
    
    // 2. Servisleri oluştur
    const db = getFirestore(app);
    const auth = getAuth(app);

     // E) ENJEKSİYON (PROVIDE / INJECTION)
    // Oluşturduğumuz 'db' ve 'auth' nesnelerini Nuxt uygulamasına "global" olarak sunuyoruz.
    // Bu sayede Store dosyalarında (useNuxtApp ile) tekrar tekrar import etmeden 
    // $db ve $auth diyerek veritabanına ulaşabileceğiz.
    return {
        provide: {
            db,   // Uygulama içinde $db olarak erişilecek
            auth  // Uygulama içinde $auth olarak erişilecek
        }
    }
    //provide ile : uygulama başladığında veritabanı bağlantısı bir kere açılıyor ve tüm uygulama ,
    // o açık bağlantıyı kullanıyor. Her sayfada tekrar tekrar bağlanmaya çalışıp performansı düşürmüyor.
})