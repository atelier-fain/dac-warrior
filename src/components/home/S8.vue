<template>
  <div class="section-8-home">
    <q-img
      class="bg-image"
      src="../../assets/bg-s8.png"
      alt="bg-s8"
    />
    <div class="container">
      <div class="section-a">
        <h2 class="text-yellow">{{ content?.section_a?.title }}</h2>
        <span class="subtitle text-yellow font-norse bold">
          {{ content?.section_a?.subtitle }}
        </span>
        <p class="text-white">{{ content?.section_a?.p }}</p>
      </div>
      <div class="section-b">
        <h2 class="text-yellow">{{ content?.section_b?.title }}</h2>
        <span class="subtitle text-yellow font-norse bold">
          {{ content?.section_b?.subtitle }}
        </span>
        <p class="text-white">{{ content?.section_b?.p1 }}</p>
        <br>
        <p class="text-white">{{ content?.section_b?.p2 }}</p>
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
    .section-a {
      margin-bottom: 80px;
    }
    .section-b {
      margin-bottom: 40px;
    }
    .section-a, .section-b {
      max-width: 500px;
      > h2 {
        line-height: 100%;
      }
      > .subtitle {
        font-size: 30px;
        line-height: 100%;
        display: block;
        margin-bottom: 30px;
      }
      > p {
        display: block;

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
