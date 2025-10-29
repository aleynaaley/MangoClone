<template>
  <div class="menu-overlay">
    <div class="menu-container">
      
      <div v-if="data.type === 'complex'" class="menu-complex">
        <div class="menu-buttons">
          <button v-for="button in data.topButtons" :key="button.title" class="menu-button">
            {{ button.title }}
          </button>
        </div>
        <div class="menu-content">
          <div class="menu-subtitle">{{ data.subtitle }}</div>
          <ul class="menu-list">
            <li v-for="item in data.items" :key="item.title" :class="{ 'is-red': item.isRed }">
              <a href="#">{{ item.title }}</a>
            </li>
          </ul>
        </div>
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
defineProps({
  data: Object
})
</script>

<style scoped>
/* Menü overlay - header'ın hemen altında başlayan, sol tarafa yapışık panel */
.menu-overlay {
  position: fixed; /* Ekrana sabitlenir */
  top: 60px; /* Header yüksekliği kadar üstten başla (header yüksekliğinize göre ayarlayın) */
  left: 0; /* Sol tarafa yapış */
  width: 416px; /* Sabit genişlik - görseldeki gibi */
  height: calc(100vh - 60px); /* Ekranın geri kalanını kapla */
  background-color: white;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 40; /* Header'ın altında, içeriğin üstünde */
  overflow-y: auto; /* İçerik çok uzunsa kaydır */
  overflow-x: hidden; /* Yatay kaydırma yok */
}

/* Menü içeriği */
.menu-container {
  width: 100%;
  padding: 40px;
}

/* Link listesi */
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-list li {
  margin-bottom: 20px;
}

.menu-list a {
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  display: block;
  transition: color 0.2s;
}

.menu-list a:hover {
  color: #666;
}

/* Kırmızı linkler */
.menu-list .is-red a {
  color: #c70000;
  font-weight: 500;
}

/* Complex menü */
.menu-complex {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-button {
  background-color: white;
  border: 1px solid black;
  padding: 12px 24px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: all 0.2s;
}

.menu-button:hover {
  background-color: black;
  color: white;
}

.menu-content {
  display: flex;
  flex-direction: column;
}

.menu-subtitle {
  font-size: 11px;
  color: #888;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Simple menü */
.menu-simple {
  width: 100%;
}
</style>