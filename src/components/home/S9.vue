<template>
  <div class="section-9">
    <q-img
      class="bg-image"
      src="../../assets/bg-s9.png"
      alt="bg-s9"
    />
    <div class="container">
      <div class="text">
        <div class="s1">
          <h2 class="text-yellow">{{ content?.s1?.title }}</h2>
          <p class="text-white">{{ content?.s1?.p1 }}</p><br>
          <p class="text-white">{{ content?.s1?.p2 }}</p><br>
          <p class="text-white">{{ content?.s1?.p3 }}</p>
        </div>
        <div class="s2">
          <h2 class="text-yellow">{{ content?.s2?.title }}</h2>
          <p class="text-white">{{ content?.s2?.p1 }}</p>
          <ul>
            <li v-for="{id} in list"
                :key="`${id}-s9`"
                class="text-white font-montserrat">
              {{ content?.s2?.[id]}}

            </li>
          </ul>
        </div>
      </div>
      <q-img src="../../assets/map-s9.svg" alt="map-s9"/>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
  list: Array
})
</script>

<style lang="scss">
.section-9 {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    .text {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 40px;
      .s1, .s2 {
        width: 47%;
        h2 {
          margin-bottom: 20px;

        }
        ul {
          margin: 20px 0 0 0;
          padding-left: 12px;
          li {
            font-size: 16px;
          }
        }
      }
    }

  }

}


</style>
