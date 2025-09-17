<template>
  <q-layout view="lHh Lpr lFf">
    <Nav
     @handle-lang="handleLang"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup>

import {computed} from "vue";
import {useContentStore} from "src/stores/content.js";
import {useRouter, useRoute} from "vue-router";
import {Notify, Platform} from "quasar";
import Nav from 'components/Nav.vue'
import Footer from 'components/Footer.vue'

const contentStore = useContentStore()
const router = useRouter()
const route = useRoute()

const currentLanguage = computed(() => contentStore.currentLanguage)


function handleLang (lang) {
  console.log(lang)
  if (lang !== currentLanguage.value) {
    const routeName = contentStore.currentLanguage === 'en'
      ? route.name.replace(/-en\/?$/, '')
      : route.name.replace(/-ro\/?$/, '')
    const name = `${routeName}-${lang}`
    router.replace({name})
    Notify.create({
      message: contentStore?.localizedContent.mainLayout?.notif?.langChanged,
      position: Platform.is.mobile ? 'top' : 'top-right',
      color: 'white',
      textColor: 'black',
      timeout: 2000,
      attrs: {
        style: Platform.is.mobile ? '' : 'margin-right: 20px;'
      },
    })
  }
  // handleMenu(true)
}

</script>
