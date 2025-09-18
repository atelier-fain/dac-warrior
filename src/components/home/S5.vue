<template>
  <div class="section-s5-home">
    <q-img
      class="bg-image"
      src="../../assets/bg-s5.png"
      alt="bg-s5"
    />
    <div class="container">
      <div class="text">
        <h2 class="text-yellow">{{ content?.title }}</h2>
        <span class="subtitle text-yellow font-montserrat bold">{{ content?.subtitle }}</span>
        <p class="text-white">{{ content?.p1 }}</p>
        <br>
        <p class="text-white">{{ content?.p2 }}</p>
        <MainButton
          :label="content?.button"
        />
      </div>

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
.section-s5-home {
  background-image: url('../../assets/overlay-section.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 80vh;
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
    .text {
      max-width: 700px;
      > h2 {
        line-height: 100%;
      }
      .subtitle {
        font-size: 30px;
        display: block;
        line-height: 100%;
        margin-bottom: 30px;
      }
      > p {
        max-width: 500px;
      }
      .main-button {
        margin-left: auto;
        display: flex;
        margin-top: 100px;
        .q-btn__content {
          text-transform: uppercase;
        }
      }
    }


  }
}


</style>
