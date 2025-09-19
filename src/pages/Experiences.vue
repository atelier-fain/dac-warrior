<template>
  <div class="experiences-page">
    <S1 :content="content?.s1" />
    <S2 :list="storeData?.experiences?.listS2"
        :content="content?.s2" />
  </div>
</template>

<script setup>
import S1 from 'components/experiences/S1.vue';
import S2 from 'components/experiences/S2.vue';
import {useContentStore} from "/src/stores/content.js";
import {computed} from "vue";
import {useDataStore} from "/src/stores/data.js";

const storeContent = useContentStore()
const storeData = useDataStore()

const content = computed(() => storeContent.localizedContent?.experiencesPage)
</script>

<style lang="scss">
.experiences-page {
  overflow: hidden;

}

</style>
