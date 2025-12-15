<template>
  <div class="input-wrapper">
    <input 
      :type="type" 
      :placeholder="placeholder" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="base-input"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String, // v-model ile veri alışverişi için
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<style scoped>
.input-wrapper {
  width: 100%;
  margin-bottom: 20px;
}

.base-input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  font-size: 13px;
  outline: none;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: border-color 0.3s;
}

.base-input:focus {
  border-color: black;
}
</style>