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
  border-radius: 22px;
  padding: 0 60px;
  height: 60px;
  .q-btn__content {
    font-size: 20px;
  }
}
</style>
