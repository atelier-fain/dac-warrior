<template>
  <div class="lang-selector">
    <q-btn-dropdown
      outline
      :menu-offset="[0, 8]"
      rounded
      no-caps
      v-model="showLangList"
      dropdown-icon="expand_more">
      <template v-slot:label>
        <div class="row items-center no-wrap">
          <span class="selected-lang-new">{{ selectedLang }}</span>
        </div>
      </template>
      <q-list class="list-lang-dropdown">
        <q-item
          v-for="id in langList"
          :key="id"
          @click.prevent="handleSelected(id)"
          clickable
          tag="a"
          :href="`https://dac-warrior/${id === 'ro' ? '' : `${id}/`}`">
          <q-item-section
            class="lang-section"
            avatar>
            <q-img
              class="flag"
              :src="`/public/${id}.svg`"
              :alt="id"/>
            <span :class="id === selectedLang && 'selected-lang'">{{ id }}</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
  selectedLang: String,
  langList: Array,
})

const showLangList = ref(false)

const emit = defineEmits(['handle-lang'])

function handleSelected (id) {
  emit('handle-lang', id)
  showLangList.value = false
}
</script>

<style lang="scss">
.lang-selector {
  z-index: 99999;
  display: flex;
  align-items: center;
  .selected-lang-new {
    text-transform: uppercase;
    color: white;
  }
  .q-btn--outline:before {
    border: 1px solid #E0E7EB;
  }
  .q-btn {
    height: 30px;
    padding: 0 10px;
    color: black;
    min-height: unset;
    .q-btn__content {
      .q-icon {
        margin-left: 0;
        color: white;
      }
    }

  }
}

.list-lang-dropdown {
  display: flex;
  flex-direction: column;
  gap: 5px;
  .q-item {

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    .lang-section {
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: flex-start;
      padding: 0;
      .flag {
        border-radius: 50%;
        max-width: 23px;
      }
      > span {
        color: black;
        font-size: 16px;
        font-weight: 900;
        text-transform: uppercase;
      }
      .selected-lang {
        color: #b84e00;
      }
    }
  }
}

</style>
