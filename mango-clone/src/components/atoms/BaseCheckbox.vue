<template>
  <div class="checkbox-wrapper">
    <input 
      type="checkbox" 
      :id="id" 
      class="real-checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    
    <label :for="id" class="custom-label">
      <span class="checkbox-box"></span>
      
      <span class="label-text">
        <slot></slot> </span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.checkbox-wrapper {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}

/* Gerçek kutuyu gizle */
.real-checkbox {
  display: none;
}

.custom-label {
  display: flex;
  align-items: flex-start; /* Yazı çok satırlıysa üstten hizala */
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Kutu Tasarımı */
.checkbox-box {
  width: 16px;
  height: 16px;
  border: 1px solid #000; /* Siyah Çerçeve */
  margin-right: 10px;
  margin-top: 2px; /* Yazı ile hizalamak için ince ayar */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Kutunun sıkışmasını engelle */
  background-color: white;
  transition: all 0.2s;
}

/* Seçili olduğunda (TİK İŞARETİ) */
.real-checkbox:checked + .custom-label .checkbox-box::after {
  content: '✕'; /* veya '✓' */
  font-size: 12px;
  font-weight: bold;
  color: #000;
}

/* Yazı Stili */
.label-text {
  font-size: 12px;
  color: #000;
  line-height: 1.4;
  user-select: none; /* Yazı seçilmesin */
}
</style>