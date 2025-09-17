<template>
  <div class="section-2">
    <q-img
      class="bg-image"
      src="../../assets/firecamp.png"
      alt="firecamp"
    />
    <div class="container">
      <div>
        <div class="text">
          <h2 class="bold text-yellow">{{ content?.title }}</h2>
          <p class="text-white">{{ content?.p }}</p>
        </div>
        <q-img
          class="img-map"
          src="../../assets/s2-map.svg"
          alt="map"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object
})
</script>

<style lang="scss">
.section-2 {
  background-image: url('../../assets/overlay.png');
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: flex-start;
      padding-top: 100px;
      padding-bottom: 120px;
      .text {
        max-width: 40%;
        > h2 {
          margin-bottom: 20px;
        }
        > p {
          line-height: 35px;
        }
      }
      .img-map {
        margin-top: 80px;
        max-width: 60%;
      }
    }

  }

}


</style>
