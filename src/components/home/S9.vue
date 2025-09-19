<template>
  <div class="section-9-home">
    <q-img
      class="bg-image"
      src="../../assets/bg-s9.png"
      alt="bg-s9"
    />
    <div class="container">
      <h2 class="text-yellow">{{ content?.title }}</h2>
      <div class="text">
        <p class="text-white"
           v-for="key in Object.keys(content?.list)"
           :key="`${key}-s9`">
          <span class="bold">{{ content?.list?.[key]?.bold }}</span>
          {{ content?.list?.[key]?.normal }}
        </p>
      </div>
      <q-img src="../../assets/map-s9.svg"
             alt="map-s9"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object
})
</script>

<style lang="scss">
.section-9-home {
  background-image: url('../../assets/overlay-section.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  .container {
    padding-top: 100px;
    padding-bottom: 70px;
    > h2 {
      margin-bottom: 20px;
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 550px;
      margin-bottom: 40px;
    }
  }
}
</style>
