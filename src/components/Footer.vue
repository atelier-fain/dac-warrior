<template>
  <div class="footer">
    <div class="container">
      <div class="partners">
        <h2 class="text-yellow">{{  content?.partners?.title }}</h2>
        <div class="list-partners">
          <q-img v-for="i in 10" :key="i" src="../assets/demo-partener.svg" />
        </div>
      </div>
      <div class="staff">
        <h2 class="text-yellow">{{  content?.staff?.title }}</h2>
        <div class="top">
          <div class="list">
            <div class="item">
              <q-img src="../assets/icon-email.svg"
                     alt="icon-run"
              />
              <span class="text-white">{{ content?.staff?.details?.s1 }}</span>
            </div>

            <div class="item">
              <q-img src="../assets/icon-pin.svg"
                     alt="icon-run"
              />
              <span class="text-white">{{ content?.staff?.details?.s2 }}</span>
            </div>
            <div class="item">
              <q-img src="../assets/icon-edit.svg"
                     alt="icon-run"
              />
              <span class="text-white">{{ content?.staff?.details?.s3 }}</span>
            </div>
            <div class="item">
              <q-img src="../assets/icon-run.svg"
                     alt="icon-run"
              />
              <span class="text-white">{{ content?.staff?.details?.s4 }}</span>
            </div>
          </div>
          <q-img src="../assets/getica.png"
                 alt="getica-logo" />
        </div>
        <div class="bottom">
          <div class="buttons-list">
            <q-btn no-wrap class="btn-info">{{ content?.infoPages?.terms }}</q-btn>
            <q-btn no-wrap class="btn-info">{{ content?.infoPages?.cookies }}</q-btn>
            <q-btn no-wrap class="btn-info">{{ content?.infoPages?.privacy }}</q-btn>
          </div>
          <q-img src="../assets/anpc-visa-logo.png" alt="anpc-visa-logo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContentStore } from 'src/stores/content';
import { computed } from 'vue'

const storeContent = useContentStore()

const content = computed(() => storeContent?.localizedContent?.mainLayout?.footer)
</script>

<style lang="scss">
.footer {
  background-color: #4b4b4b;
  .container {
    padding-top: 100px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 70px;
    .partners {
      .list-partners {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .q-img {
          max-width: 200px;
        }
      }

    }
    .staff {
      > h2 {
        margin-bottom: 20px;
      }
      .top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 20px;
        .list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .item {
            display: flex;
            align-items: center;
            gap: 14px;
            > span {
              font-size: 16px;
              font-family: 'Montserrat', sans-serif;
            }
            > .q-img {
              max-width: 20px;
            }
          }
        }
        > .q-img {
          margin-top: -50px;
          max-width: 300px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        gap: 150px;
        .buttons-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .btn-info {
            width: 400px;
            padding: 10px;
            color: black;
            background-color: $yellow;
            .q-btn__content {
              font-size: 26px;
              font-family: 'Norse', sans-serif;
              font-weight: 900;
            }
          }

        }
        > .q-img {
          max-width: 300px;
        }
      }
    }
  }

}
</style>
