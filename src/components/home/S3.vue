<template>
  <div class="section-3-home">
    <div class="container">
      <div class="list">
        <RunCard
          v-for="{id, km, img, icon} in listCards"
          :key="id"
          :img="img"
          :title="content?.[id].title"
          :km="km"
          :btn-label="content?.[id].btnLabel"
          :text="content?.[id].text"
          :icon="icon"

        />
      </div>

    </div>
  </div>
</template>

<script setup>
import RunCard from 'components/Home/RunCard.vue';

const props = defineProps({
  content: Object,
  listCards: Array
})
</script>

<style lang="scss">
.section-3-home {
  background-color: #2F2F2F;
  background-image: url('../../assets/overlay.png');
  //background-repeat: repeat-y;
  background-position: top;
  background-size: auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .container {
    padding-top: 40px;
    padding-bottom: 40px;
    .list {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
