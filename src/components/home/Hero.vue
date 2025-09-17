<template>
  <div class="hero-section">
    <video preload="auto"
           autoplay
           loop
           muted
           playsinline
           class="bg-video">
      <source src="../../assets/videos/2.mp4"
              type="video/mp4">
    </video>
    <div class="container">
      <div class="text-container">
        <span class="secondary-title text-white bold font-norse">{{ content?.secondaryTitle }}</span>
        <h1>{{ content?.h1 }}</h1>
        <span class="subtitle text-white font-montserrat">{{ content?.subtitle }}</span>
        <div class="eta">
          <div>
            <span class="font-norse bold text-white">{{ content?.eta?.zile }}</span>
            <span class="text-yellow">|</span>
            <span class="font-norse bold text-white">{{ content?.eta?.ore }}</span>
          </div>
          <span class="text-white font-montserrat subtitle">{{ content?.eta?.text }}</span>
        </div>
        <MainButton
          :label="content?.cta"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainButton from 'components/MainButton.vue'
const props = defineProps({
  content: Object
})

</script>

<style lang="scss">
.hero-section {
  background-image: url('../../assets/overlay.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: unset;
    z-index: -1;
    object-fit: cover;
  }
  .container {
    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 200px;
      > h1 {
        color: $dark_yellow;
      }
      .secondary-title {
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 25px;
        display: block;
      }
      .subtitle {
        font-size: 20px;
      }
      .eta {
        margin-bottom: 40px;
        > div {
          font-size: 40px;
          display: flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
        }
        .subtitle {
          font-size: 16px;
        }

      }
    }

  }
}

</style>
