<template>
  <div class="section-2-experiences">
    <q-img
      class="bg-image"
      src="../../assets/bg-s2-experiences.png"
      alt="bg-s2-experiences"
    />
    <div class="container">
      <h2 class="text-yellow text-center">{{ content?.title }}</h2>
      <div class="list">
        <div
          v-for="{id, img, p} in list"
          :key="`${id}-experiences-s2`"
          class="item">
          <div class="title">
            <q-img :src="`/${img}`"
                   :alt="img"
            />
            <span class="text font-norse bold text-white">
              {{ content?.list?.[id].title}}
            </span>
          </div>
          <p v-for="i in p"
             class="text-white"
             :key="`${id}-p-${i}`"
             :class="i === 4 && 'bold'">
            {{ content?.list?.[id]?.[`p${i}`] }}<br>
          </p>
        </div>
      </div>
      <div class="sub-section-card">
        <q-img
          class="bg-image-subsection"
          src="../../assets/bg-sub-section2-experiences.png"
          alt="bg-sub-section2-experiences"
        />
        <div class="container-sub-section">
          <div class="title-section">
            <h2 class="text-yellow text-center">{{ content?.subSectionCard?.title }}</h2>
            <span class="text-white subtitle text-center">{{ content?.subSectionCard?.subtitle }}</span>
            <MainButton
              :label="content?.subSectionCard?.button"
            />
            <p class="text-white text-center">{{ content?.subSectionCard?.p }}</p>
          </div>
          <div class="list-section-top">
            <h3 class="text-white text-center">{{ content?.subSectionCard?.listSectionTop?.title }}</h3>
            <div class="list">
              <div class="item"
                  v-for="{id} in sectionCard?.listSectionTop"
                   :key="`${id}-listSectionTop`">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo-circle"
                />
                <div class="text">
                  <div class="bold text-white">{{ content?.subSectionCard?.listSectionTop?.[id]?.bold }} <span
                    class="normal text-white"
                    v-show="content?.subSectionCard?.listSectionTop?.[id]?.normal">
                    {{ content?.subSectionCard?.listSectionTop?.[id]?.normal }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-schedule">
            <h3 class="text-white text-center">
              {{ content?.subSectionCard?.sectionSchedule?.title}}
            </h3>
            <div class="section-day friday">
              <span class="title-section text-white text-center">
                {{ content?.subSectionCard?.sectionSchedule?.friday.title }}
              </span>
              <div class="list">
                <div class="text-center container-details">
                  <div v-for="{id} in sectionCard?.sectionSchedule?.friday"
                       :key="`${id}-friday`">
                    <span class="range text-center text-white">
                       {{ content?.subSectionCard?.sectionSchedule?.friday?.[id]?.range }}
                    </span>
                    <p class="text-center text-white">{{ content?.subSectionCard?.sectionSchedule?.friday?.[id]?.p1 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-day saturday">
              <span class="title-section text-white text-center">
                {{ content?.subSectionCard?.sectionSchedule?.saturday?.title }}
              </span>
              <div class="list">
                <div class="text-center container-details">
                  <div v-for="{id, p} in sectionCard?.sectionSchedule?.saturday"
                       :key="`${id}-friday`">
                <span class="range text-center text-white">
                  {{ content?.subSectionCard?.sectionSchedule?.saturday?.[id]?.range }}
                </span>
                    <p class="text-center text-white"
                       v-for="i in p"
                       :key="`${i}-p-saturday`">
                      {{ content?.subSectionCard?.sectionSchedule?.saturday?.[id]?.[`p${i}`] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-day sunday">
              <span class="title-section text-white text-center">
                {{ content?.subSectionCard?.sectionSchedule?.sunday.title }}
              </span>
              <div class="list">
                <div class="text-center container-details">
                  <div v-for="{id} in sectionCard?.sectionSchedule?.sunday"
                       :key="`${id}-friday`">
                    <span class="range text-center text-white">
                       {{ content?.subSectionCard?.sectionSchedule?.sunday?.[id]?.range }}
                    </span>
                    <p class="text-center text-white">{{ content?.subSectionCard?.sectionSchedule?.sunday?.[id]?.p1 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="info">
            <h3 class="text-white text-center">{{ content?.subSectionCard?.info?.title }}</h3>
            <div class="list">
              <div class="item"
                   v-for="{id} in sectionCard?.info"
                   :key="`${id}-info`"
                   :class="id === 'c4' && 'special'">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo-circle"
                />
                <div class="text">
                  <div class="bold text-white">{{ content?.subSectionCard?.info?.[id]?.bold }} <span
                    class="normal text-white"
                    v-show="content?.subSectionCard?.info?.[id]?.normal">
                    {{ content?.subSectionCard?.info?.[id]?.normal }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainButton from 'components/MainButton.vue';
const props = defineProps({
  content: Object,
  list: Array,
  sectionCard: Object
})
</script>

<style lang="scss">
.section-2-experiences {
  background-image: url('../../assets/overlay.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  .container {
    padding-top: 100px;
    padding-bottom: 50px;
    > h2 {
      margin-bottom: 40px;
    }
    > .list {
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin-bottom: 80px;
      > .item {
        max-width: 700px;
        margin: 0 auto;
        > .title {
          display: flex;
          align-items: center;
          margin-left: 20%;
          gap: 20px;
          margin-bottom: 20px;
          > .q-img {
            max-width: 100px;
          }
          > span {
            font-size: 40px;
          }
        }
      }
    }
    .sub-section-card {
      z-index: 1;
      position: relative;
      overflow: hidden;
      border-radius: 30px;
      max-width: 90%;
      margin: 0 auto;
      width: 100%;
      display: flex;
      .bg-image-subsection {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: 100%;
        z-index: -1;
        object-fit: cover;
      }
      .container-sub-section {
        width: 100%;
        padding: 60px 20px;
        .title-section {
          .subtitle {
            font-size: 25px;
            font-weight: 900;
            display: block;
          }
          .main-button {
            display: flex;
            margin: 20px auto 40px;
            .q-btn__content {
              text-transform: uppercase;
            }
          }
          > p {
            font-size: 18px;
            display: block;
            max-width: 80%;
            margin: 0 auto;
          }
        }
        .list-section-top {
          > h3 {
            margin-top: 40px;
            margin-bottom: 40px;
          }
          > .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 1fr);
            margin: 0 auto;
            max-width: 700px;
            gap: 30px;
            > .item {
              display: flex;
              align-items: flex-start;
              gap: 20px;
              max-width: 305px;
              > .q-img {
                min-width: 40px;
                max-width: 40px;
              }
              > .text {
                display: flex;
                align-items: flex-start;
                .bold {
                  padding-top: 5px;
                  font-size: 16px;
                  .normal {
                    font-weight: 400;
                    line-height: 100%;
                  }
                }
              }
            }
          }
        }
        .section-schedule {
          margin-bottom: 80px;
          display: block;
          > h3 {
            margin: 40px 0;
          }
          .section-day {
            text-align: center;
            margin-bottom: 40px;
            .title-section {
              font-size: 25px;
              font-weight: 900;
            }
            > .list {
             > .container-details {
                display: flex;
                flex-direction: column;
                gap: 25px;
                .range {
                  font-size: 18px;
                  font-weight: 900;
                }
              }
            }
          }
        }
        .info {
          > h3 {
            margin-top: 40px;
            margin-bottom: 40px;
          }
          > .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
            margin: 0 auto;
            max-width: 800px;
            gap: 30px;
            > .item.special {
              grid-column: 2 / 2;
              grid-row: 2 / 4;
            }
            > .item {
              display: flex;
              align-items: flex-start;
              gap: 20px;
              > .q-img {
                min-width: 40px;
                max-width: 40px;
              }
              > .text {
                display: flex;
                align-items: flex-start;
                > .bold {
                  padding-top: 5px;
                  font-size: 16px;
                  > .normal {
                    font-weight: 400;
                    line-height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
