<template>
  <div class="section-1-experiences">
    <video preload="auto"
           autoplay
           loop
           muted
           playsinline
           class="bg-video">
      <source src="../../assets/videos/satul dacic.mp4"
              type="video/mp4">
    </video>
    <div class="container">
      <div class="text-container">
        <h1>{{ content?.title }}</h1>
        <span class="text-white subtitle font-norse bold">{{ content?.subtitle }}</span>
        <q-img src="../../assets/bottle.svg"
               alt="bottle"
        />
        <p class="text-white">{{ content?.p1 }}</p>
        <p class="text-white">{{ content?.p1 }}</p>
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
.section-1-experiences {
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
      //padding-bottom: 100px;
      > h1 {
        max-width: 610px;
        text-align: center;
        color: $dark_yellow;

      }
      > .q-img {
        max-width: 150px;
        margin: 15px 0;
      }
      .subtitle {
        font-size: 40px;
        text-transform: uppercase;
        display: block;
      }
      > p {
        max-width: 700px;
        text-align: center;
        line-height: 25px;
      }

    }


  }
}


</style>
