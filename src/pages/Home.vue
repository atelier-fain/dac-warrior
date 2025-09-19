<template>
  <q-page class="home-page">
    <Hero :content="content?.titleSection" />
    <S2 :content="content?.s2" />
    <S3 :list-cards="storeData?.home?.listRuns"
        :content="content?.s3" />
    <S4 :content="content?.s4" />
    <S5 :content="content?.s5" />
    <S6 :content="content?.s6" />
    <S7 :content="content?.s7" />
    <S8 :content="content?.s8" />
    <S9 :content="content?.s9" />
  </q-page>
</template>

<script setup>
import {useContentStore} from "src/stores/content.js";
import {computed} from "vue";
import Hero from 'components/Home/Hero.vue';
import S2 from 'components/Home/S2.vue';
import S3 from 'components/Home/S3.vue';
import S4 from 'components/Home/S4.vue';
import S5 from 'components/Home/S5.vue';
import S6 from 'components/Home/S6.vue';
import S7 from 'components/Home/S7.vue';
import S8 from 'components/Home/S8.vue';
import S9 from 'components/Home/S9.vue';
import {useDataStore} from "/src/stores/data.js";

const store = useContentStore()
const storeData = useDataStore()

const content = computed(() => store.localizedContent.homePage)
</script>

<style lang="scss">
.home-page {
  //overflow: hidden;
  overflow-x: hidden;

}
</style>
