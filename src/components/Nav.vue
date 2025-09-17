<template>
  <div class="nav-bar">
    <div class="container">
      <img src="../assets/logo.png"
           alt="logo">
      <div class="nav-links"
           :role="null">
        <LanguageSelector
          @handle-lang="handleLang"
          :lang-list="langList"
          :selected-lang="currentLanguage"
        />
        <div class="list">
          <div class="flex"
               v-for="({id}, index) in store.navLinks"
               :key="id">
            <q-item
              clickable
              dense
              :role="null"
              :active="`${id}-${currentLanguage}` === route.name"
              tag="a"
              @click.prevent="handleRoute(id)"
              manual-focus>
              <span class="label">{{ locales[id] }}</span>

            </q-item>
            <span
              v-if="index + 1 !== store.navLinks.length"
              class="separator">|</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

import {useDataStore} from "/src/stores/data.js";
import {useContentStore} from "/src/stores/content.js";
import {computed, ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import LanguageSelector from 'components/LanguageSelector.vue';
const route = useRoute()

const emit = defineEmits(['handle-lang'])
const store = useDataStore()
const contentStore = useContentStore()
const router = useRouter()
const locales = computed(() => contentStore.localizedContent?.mainLayout?.navLinks)
const currentLanguage = computed(() => contentStore?.currentLanguage)
const langList = ref(['ro', 'en'])

function handleRoute (routeName) {
  const name = `${routeName}-${currentLanguage.value}`
  router.push({name})
}

function handleLang (lang) {
  emit('handle-lang', lang)
}
</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6000;
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .nav-links {
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      .lang-selector {
        justify-content: flex-end;
        margin-right: 16px;
      }
      .list {
        display: flex;

        .flex {
          flex-wrap: nowrap;
        }
        .q-item.q-router-link--active .label {
          color: $dark_yellow;
        }
        .q-item {
          .label {
            font-size: 36px;
            font-weight: 900;
            font-family: 'Norse', sans-serif;
            color: white;
          }
        }
        .separator {
          font-size: 36px;
          font-weight: 900;
          font-family: 'Norse', sans-serif;
          color: white;
        }
      }
    }
  }
}
</style>
