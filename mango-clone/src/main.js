/* - Projemin giriş noktası */
import './assets/main.css' //Bu proje için genel CSS (stil) dosyasını dahil ediyor. Her sayfada geçerli olacak

import { createApp } from 'vue' //Vue.js uygulamasını oluşturmak için gerekli fonksiyonu Vue kütüphanesinden alıyor
import App from './App.vue' //Ana uygulama bileşenini (App.vue) dahil ediyor

createApp(App).mount('#app')    //Vue uygulamasını oluşturuyor ve App bileşenini '#app' id'sine sahip HTML elementine bağlıyor
