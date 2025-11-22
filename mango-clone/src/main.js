/* - Projemin giriş noktası */
import './assets/main.css' //Bu proje için genel CSS (stil) dosyasını dahil ediyor. Her sayfada geçerli olacak

import { createApp } from 'vue' //Vue.js uygulamasını oluşturmak için gerekli fonksiyonu Vue kütüphanesinden alıyor
import App from './App.vue' //Ana uygulama bileşenini (App.vue) dahil ediyor
import router from './router'

const app = createApp(App)
app.use(router) 

app.mount('#app')

//main.css deki stilleri buradan çağırıyoruz ve vue uygulamasını başlatıyoruz.


