<template>
  <div class="run-card">
    <q-img
      class="main-img"
      :src="img"
      :alt="img"
    />
    <q-img class="overlay"
           src="../../assets/overlay-card.png"
           alt="overlay"
    />
    <div class="text">
      <div class="top">
        <span class="title text-white font-norse bold">{{ title }}</span>
        <span class="km text-yellow font-norse bold">{{ km }}</span>
      </div>
      <div class="bottom">
        <q-img
          class="icon"
          :src="icon"
          :alt="icon"
        />
        <span class="text-white font-montserrat bold">{{ text }}</span>
      </div>

    </div>
    <MainButton
      v-if="btnLabel"
      :label="btnLabel"
    />
  </div>
</template>

<script setup>
import MainButton from 'components/MainButton.vue';
const props = defineProps({
  img: String,
  title: String,
  km: String,
  icon: String,
  text: String,
  btnLabel: String
})
</script>

<style lang="scss">
.run-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 16 / 6;
  .main-img {
    z-index: 0;
    aspect-ratio: 16 / 6;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
  .text {
    position: absolute;
    z-index: 1;
    top: 10%;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    .top {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 40px;
      }
      .km {
        font-size: 40px;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 160px;
      text-align: center;
      gap: 10px;
      .icon {
        max-width: 30px;
      }
      > span {
        font-size: 18px;
      }
    }
  }
  .main-button {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    .q-btn__content {
      text-transform: uppercase;
      font-size: 20px;
    }
  }
}


</style>
