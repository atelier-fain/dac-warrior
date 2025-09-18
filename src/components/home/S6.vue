<template>
  <div class="section-6-home">
    <q-img
      class="bg-image"
      src="../../assets/bg-s6.png"
      alt="bg-s6"
    />
    <div class="container">
      <h2 class="text-yellow">{{ content?.title }}</h2>
      <div class="text">
        <p v-html="content?.p1"
           class="text-white" />
        <p class="text-white">{{ content?.p2 }}</p>
      </div>
      <MainButton
        :label="content?.button"
      />

    </div>
  </div>
</template>

<script setup>
import MainButton from 'components/MainButton.vue';
const props = defineProps({
  content: Object
})
</script>

<style lang="scss">
.section-6-home {
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
      justify-content: space-between;
      gap: 40px;
      margin-bottom: 80px;
      > p {
        width: 50%;
      }
    }
    .main-button {
      display: flex;
      margin: 0 auto;
      .q-btn__content {
        text-transform: uppercase;
      }
    }
  }
}


</style>
