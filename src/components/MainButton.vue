<template>
  <q-btn
    no-caps
    no-wrap
    class="main-button">
    {{ label }}
  </q-btn>
</template>

<script setup>
const props = defineProps({
  label: String
})
</script>

<style lang="scss">
.main-button {
  background-color: #FFD334;
  border-radius: 18px;
  padding: 0 48px;
  height: 48px;
  .q-btn__content {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
