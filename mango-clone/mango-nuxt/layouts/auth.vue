<template>
  <div class="auth-layout">
    <div class="layout-content">
      <slot /> 
    </div>
    
    <footer class="simple-footer">
      <p>&copy; 2025 Mango Clone - Final Projesi</p>
    </footer>
  </div>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white; 
}

.layout-content {
  flex: 1; /* Ekranı kaplasın */
}

.simple-footer {
  text-align: center;
  padding: 20px;
  font-size: 11px;
  color: #999;
  border-top: 1px solid #eee;
}
</style>