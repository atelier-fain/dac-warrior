import {acceptHMRUpdate, defineStore} from 'pinia'
import {computed} from "vue";
import {useRoute} from "vue-router";
import en from './locales/en.js'
import ro from './locales/ro.js'

export const useContentStore = defineStore('content', () => {
  const route = useRoute()

  const currentLanguage = computed(() => {
    if (route.path.startsWith('/en/') || route.path.startsWith('/en')) {
      return 'en'
    }
    return 'ro'
  })

  const localizedContent = computed(() => {
    if (route.path.startsWith('/en/') || route.path.startsWith('/en')) {
      return en
    }
    return ro
  })

  const actions = {

  }

  return {
    currentLanguage,
    localizedContent,
    ...actions
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContentStore, import.meta.hot))
}
