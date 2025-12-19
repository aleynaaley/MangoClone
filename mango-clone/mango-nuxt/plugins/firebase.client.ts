// plugins/firebase.client.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
    // İŞTE BAĞLANTIYI SAĞLAYAN SİHİRLİ KISIM BURASI:
    // Bu kodları Firebase Konsolu'ndan alacağız (Nasıl alacağını aşağıda anlattım)
    const firebaseConfig = {
        apiKey: "AIzaSyB-Mc5XfcjgbURE5f_7o7rnJfblzCgx5hU",
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

    // 3. Nuxt'a haber ver: "Bak ben db ve auth getirdim, kullanabilirsin"
    return {
        provide: {
            db,
            auth
        }
    }
})