<template>
  <div class="newsletter-form">
    <BaseInput 
      placeholder="E-posta adresi" 
      type="email" 
      class="footer-input-atom"
    />
    
    <BaseButton class="footer-btn-atom">
      ABONE OL
    </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'
import BaseInput from '../atoms/BaseInput.vue'
</script>

<style scoped>
/* 1. KAPSAYICI */
.newsletter-form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;                  /*  Araları açık olsun */
  max-width: 600px;
  margin: 0 auto 30px auto;
}

/* 2. INPUT KUTUSU  */
:deep(.input-wrapper) {
  width: 320px !important;
  margin-bottom: 0 !important;
}

:deep(.base-input) {
  height: 50px !important;
  border: 1px solid #ccc !important; 
  
  border-radius: 0 !important;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
  padding: 0 15px;
}

/* 3. BUTON */
:deep(.footer-btn-atom) {
  height: 50px !important;
  width: 130px !important;
  margin: 0 !important;
  
  background-color: white !important;
  color: #333 !important;
  border: 1px solid #333 !important; /* Dört tarafı siyah çizgi */
  
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 0 !important;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>