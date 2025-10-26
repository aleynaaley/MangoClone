<template>
  <div class="menu-overlay">
    <div class="menu-container">
      
      <div v-if="data.type === 'complex'" class="menu-complex">
        <div class="menu-buttons">
          <button v-for="button in data.topButtons" :key="button.title" class="menu-button">
            {{ button.title }}
          </button>
        </div>
        <div class="menu-subtitle">{{ data.subtitle }}</div>
        <ul class="menu-list">
          <li v-for="item in data.items" :key="item.title" :class="{ 'is-red': item.isRed }">
            <a href="#">{{ item.title }}</a>
          </li>
        </ul>
      </div>

      <div v-else-if="data.type === 'simple'" class="menu-simple">
        <ul class="menu-list">
          <li v-for="item in data.items" :key="item.title" :class="{ 'is-red': item.isRed }">
            <a href="#">{{ item.title }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
// Bu bileşenin bir 'data' objesi alacağını tanımlıyoruz
// Bu datayı ona HeaderComponent yollayacak
defineProps({
  data: Object
})
</script>

<style scoped>
/* Menünün kendisi (bütün ekranı kaplayan yarı-görünmez katman) */
.menu-overlay {
  position: absolute; /* En önemli kısım: Header'a göre hizalanır */
  top: 100%; /* Header'ın bittiği yerden başla */
  left: 0;
  width: 100%;
  background-color: white;
  /* Mango sitesindeki gibi hafif bir gölge */
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
  border-top: 1px solid #f5f5f5;
  z-index: 40; /* Header'ın (50) bir altında, sayfanın geri kalanının üstünde */
}

/* Menü içeriğini ortalayan kapsayıcı */
.menu-container {
  max-width: 1400px; /* Header ile aynı genişlikte */
  margin: 0 auto;
  padding: 40px 24px;
  display: flex; /* İçeriği sola yaslamak için */
  justify-content: flex-start;
}

/* Link listesi */
.menu-list {
  list-style: none; /* Liste başındaki noktaları kaldır */
  margin: 0;
  padding: 0;
}

.menu-list li {
  margin-bottom: 16px; /* Linkler arası boşluk */
}

.menu-list a {
  text-decoration: none;
  color: black;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

/* Kırmızı 'PROMOSYON' linki için */
.menu-list .is-red a {
  color: #c70000;
  font-weight: 500;
}

/* --- Sadece 'TEEN' menüsü için stiller --- */
.menu-complex {
  display: flex; /* Butonlar ve linkleri yan yana koy */
  gap: 80px; /* Aralarına boşluk koy */
}

.menu-buttons {
  display: flex;
  flex-direction: column; /* Butonları alt alta diz */
  gap: 10px;
}

.menu-button {
  background-color: white;
  border: 1px solid black;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  width: 150px; /* Sabit genişlik verelim */
  text-align: center;
}

.menu-subtitle {
  font-size: 12px;
  color: #555;
  margin-bottom: 16px;
}
</style>