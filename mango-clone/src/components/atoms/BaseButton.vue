<template>
  <button class="base-button">
    <slot /> </button>
</template>

<script setup>

</script>

<style scoped>

.base-button {
  padding: 10px 15px;
  background-color: white;
  color: black;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 1px;
}
</style>