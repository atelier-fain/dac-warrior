<template>
  <div class="section-8-home">
    <q-img
      class="bg-image"
      src="../../assets/bg-s8.png"
      alt="bg-s8"
    />
    <div class="container">
      <h2 class="text-yellow">{{ content?.title }}</h2>
      <p class="subtitle text-white">{{ content?.subtitle }}</p>
      <div class="list">
        <div class="item"
             v-for="{id} in list"
             :key="`${id}-s8`" >
          <q-img src="../../assets/icon-item-s8.svg"
                 alt="logo-item-s8"
          />
          <p class="text-white">{{ content?.list?.[id] }}</p>
        </div>
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
  content: Object,
  list: Array
})
</script>

<style lang="scss">
.section-8-home {
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
    .subtitle {
      margin-bottom: 20px;
      display: block;
      max-width: 500px;
    }
    .list {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 80px;
      .item {
        display: flex;
        align-items: center;
        gap: 10px;
        .q-img {
          max-width: 40px;
        }

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
