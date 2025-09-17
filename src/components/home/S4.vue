<template>
  <div class="section-4">
    <q-img
      class="bg-image"
      src="../../assets/bg-s4.png"
      alt="bg-s4"
    />
    <div class="container">
      <div class="list">
        <div class="item"
             v-for="{id, logo} in storeData.listS4"
             :key="`${id}-s4`">
          <q-img :src="logo"
                 :alt="logo"/>
          <div class="text">
            <h2 class="title font-norse bold text-yellow">
              {{ content?.[id]?.title }}
            </h2>
            <p class="font-montserrat text-white">{{ content?.[id]?.p }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useDataStore} from "/src/stores/data.js";

const storeData = useDataStore()
const props = defineProps({
  content: Object
})
</script>

<style lang="scss">
.section-4 {
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
    padding-top: 80px;
    padding-bottom: 80px;
    .list {
      display: flex;
      justify-content: space-between;
      max-width: 93%;
      margin: 0 auto;
      flex-wrap: wrap;
      gap: 40px;
      .item {
        display: flex;
        max-width: 48%;
        align-items: flex-start;
        gap: 20px;
        .q-img {
          max-width: 80px;
        }
        .text {
          h2 {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}


</style>
