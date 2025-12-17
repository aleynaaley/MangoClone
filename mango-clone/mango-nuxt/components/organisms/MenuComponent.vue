<template>
  <div class="menu-overlay">
    <div class="menu-container">
      
      <div v-if="data.type === 'complex'" class="menu-complex">
        
        <div class="menu-buttons">
          <button 
            v-for="button in data.topButtons" 
            :key="button.title" 
            class="menu-button"
          >
            {{ button.title }}
          </button>
        </div>

        <div class="menu-subtitle" v-if="data.subtitle">
          {{ data.subtitle }}
        </div>

        <ul class="menu-list">
          <li v-for="item in data.items" :key="item.title" :class="{ 'is-red': item.isRed }">
            
            <NuxtLink 
              v-if="item.title === 'NEW NOW'" 
              to="/NewNowView"
            >
              {{ item.title }}
            </NuxtLink>

            <a v-else href="#" @click.prevent>{{ item.title }}</a>
          </li>
        </ul>
      </div>

      <div v-else-if="data.type === 'simple'" class="menu-simple">
        <ul class="menu-list">
          <li v-for="item in data.items" :key="item.title" :class="{ 'is-red': item.isRed }">
            
            <NuxtLink 
              v-if="item.title === 'NEW NOW'" 
              to="/NewNowView"
            >
              {{ item.title }}
            </NuxtLink>

            <a v-else href="#" @click.prevent>{{ item.title }}</a>
            
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
/* --- ANA YAPISAL AYARLAR --- */
.menu-overlay {
  position: fixed;
  top: 53px; 
  left: 0;
  width: 416px; 
  height: calc(100vh - 53px); 
  background-color: white;
  box-shadow: 4px 0 12px rgba(0,0,0,0.05); 
  border-right: 1px solid #f5f5f5;
  z-index: 40;
  overflow-y: auto; 
}

.menu-container {
  padding: 30px 40px; 
}

/* --- ORTAK LİSTE STİLLERİ --- */
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-list li {
  margin-bottom: 16px; 
}

/* NuxtLink (a etiketi olarak derlenir) ve normal a etiketleri için ortak stil */
.menu-list a {
  text-decoration: none;
  color: black;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px; 
  font-weight: 400; 
  letter-spacing: 0.3px;
  display: block;
  transition: opacity 0.2s;
  cursor: pointer;
}

.menu-list a:hover {
  opacity: 0.6;
}

/* Kırmızı Promosyon Linkleri */
.menu-list .is-red a {
  color: #c70000;
  font-weight: 500; 
}

/* --- COMPLEX MENÜ (BUTONLU) STİLLERİ --- */
.menu-complex {
  display: flex;
  flex-direction: column;
}

.menu-buttons {
  display: flex;
  gap: 10px; 
  margin-bottom: 20px;
}

.menu-button {
  flex: 1; 
  background-color: white;
  border: 1px solid black;
  padding: 10px 0; 
  
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0; 
}

.menu-button:hover {
  background-color: black;
  color: white;
}

.menu-subtitle {
  font-size: 11px;
  color: #666; 
  margin-bottom: 25px; 
  font-weight: 400;
}

/* --- SIMPLE MENÜ STİLLERİ --- */
.menu-simple {
  padding-top: 10px;
}
</style>