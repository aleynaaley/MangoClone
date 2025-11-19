<template>
  <div class="newsletter-form">
    <input type="email" placeholder="E-posta adresi" class="email-input">
    <BaseButton>ABONE OL</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'
</script>

<style scoped>
/* FooterComponent'ten kopyaladığımız stiller */
.newsletter-form {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.email-input {
  padding: 10px;
  width: 250px;
  font-size: 12px;
  text-transform: lowercase;
}

.email-input::placeholder {
    color: #555;
}
</style>