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
            <q-img :src="`${IMGS_BASE_URL}/${img}`"
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
        <div class="container-sub-section section-1">
          <div class="title-section">
            <h2 class="text-yellow text-center">{{ content?.subSectionCard?.section_1?.title }}</h2>
            <span class="text-yellow subtitle text-center font-norse bold">{{ content?.subSectionCard?.section_1?.subtitle }}</span>
            <MainButton
              :label="content?.subSectionCard?.section_1?.button"
            />
            <p class="text-white text-center">{{ content?.subSectionCard?.section_1?.p }}</p>
          </div>
          <div class="list-section-top">
            <div class="list">
              <div class="item"
                  v-for="key in Object.keys(content?.subSectionCard?.section_1?.listSectionTop?.list)"
                   :key="`${key}-listSectionTop`">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo-circle"
                />
                <span class="text text-white" v-html="content?.subSectionCard?.section_1?.listSectionTop?.list?.[key]" />

              </div>
            </div>
          </div>
          <div class="section-prices">
            <h3 class="text-white text-center">
              {{ content?.subSectionCard?.section_1?.prices?.title}}
            </h3>
            <p class="text-white text-center subtitle">
              {{ content?.subSectionCard?.section_1?.prices?.p }}
            </p>
            <div class="section-day price-1">
              <span class="title-section text-white text-center">
                {{ content?.subSectionCard?.section_1?.prices?.price_1?.title }}
              </span>
              <br>
              <span class="subtitle-section text-yellow text-center">
               {{ content?.subSectionCard?.section_1?.prices?.price_1?.subtitle }}
              </span>
              <div class="list">
                <div class="text-center container-details">
                  <div v-for="key in Object.keys(content?.subSectionCard?.section_1?.prices?.price_1?.list)"
                       :key="`${key}-price-1`">
                    <span class="range text-center text-white">
                       {{ content?.subSectionCard?.section_1?.prices?.price_1?.list?.[key]?.bold }}
                    </span>
                    <p class="text-center text-white">{{ content?.subSectionCard?.section_1?.prices?.price_1?.list?.[key]?.normal }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-benefits">
            <h3 class="title text-white text-center">
              {{ content?.subSectionCard?.section_1?.includedBenefits?.title }}
            </h3>
            <div class="list">
              <div class="item">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo"
                />
                <p class="text-white">{{ content?.subSectionCard?.section_1?.includedBenefits?.p1 }}</p>
              </div>
              <div class="item">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo"
                />
                <p class="text-white">{{ content?.subSectionCard?.section_1?.includedBenefits?.p2 }}</p>
              </div>
              <div class="item">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo"
                />
                <p class="text-white">{{ content?.subSectionCard?.section_1?.includedBenefits?.p3 }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-sub-section section-2">
          <div class="title-section">
            <h2 class="text-yellow text-center">{{ content?.subSectionCard?.section_2?.title }}</h2>
            <span class="text-yellow subtitle text-center font-norse bold">{{ content?.subSectionCard?.section_2?.subtitle }}</span>
            <MainButton
              :label="content?.subSectionCard?.section_2?.button"
            />
            <p class="text-white text-center">{{ content?.subSectionCard?.section_2?.p }}</p>
          </div>
          <div class="list-section-top">
            <div class="list">
              <div class="item"
                  v-for="key in Object.keys(content?.subSectionCard?.section_2?.listSectionTop?.list)"
                   :key="`${key}-listSectionTop`">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo-circle"
                />
                <span class="text text-white" v-html="content?.subSectionCard?.section_2?.listSectionTop?.list?.[key]" />

              </div>
            </div>
          </div>
          <div class="section-prices">
            <h3 class="text-white text-center">
              {{ content?.subSectionCard?.section_2?.prices?.title}}
            </h3>
            <p class="text-white text-center subtitle">
              {{ content?.subSectionCard?.section_2?.prices?.p }}
            </p>
            <div class="section-day price-1">
              <span class="title-section text-white text-center">
                {{ content?.subSectionCard?.section_2?.prices?.price_1?.title }}
              </span>
              <br>
              <span class="subtitle-section text-yellow text-center">
               {{ content?.subSectionCard?.section_2?.prices?.price_1?.subtitle }}
              </span>
              <div class="list">
                <div class="text-center container-details">
                  <div v-for="key in Object.keys(content?.subSectionCard?.section_2?.prices?.price_1?.list)"
                       :key="`${key}-price-1-s2`">
                    <span class="range text-center text-white">
                       {{ content?.subSectionCard?.section_2?.prices?.price_1?.list?.[key]?.bold }}
                    </span>
                    <p class="text-center text-white">{{ content?.subSectionCard?.section_2?.prices?.price_1?.list?.[key]?.normal }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-benefits">
            <h3 class="title text-white text-center">
              {{ content?.subSectionCard?.section_2?.includedBenefits?.title }}
            </h3>
            <div class="list">
              <div class="item">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo"
                />
                <p class="text-white">{{ content?.subSectionCard?.section_2?.includedBenefits?.p1 }}</p>
              </div>
              <div class="item">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo"
                />
                <p class="text-white">{{ content?.subSectionCard?.section_2?.includedBenefits?.p2 }}</p>
              </div>
              <div class="item">
                <q-img src="../../assets/logo-circle.svg"
                       alt="logo"
                />
                <p class="text-white">{{ content?.subSectionCard?.section_2?.includedBenefits?.p3 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IMGS_BASE_URL } from '../../boot/axios.js'
import MainButton from 'components/MainButton.vue';
const props = defineProps({
  content: Object,
  list: Array
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
      flex-direction: column;
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
          margin-bottom: 30px;
          > h2 {
            line-height: 100%;
          }
          .subtitle {
            font-size: 30px;
            display: block;
            line-height: 100%;
          }
          .main-button {
            display: flex;
            margin: 50px auto;
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
          > .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            margin: 0 auto;
            max-width: 800px;
            gap: 60px;
            row-gap: 20px;
            > .item {
              display: flex;
              align-items: flex-start;
              gap: 20px;
              max-width: 380px;
              > .q-img {
                min-width: 40px;
                max-width: 40px;
              }
              > .text {
                font-size: 16px;
                padding-top: 5px;
                > strong {
                  font-weight: 900;
                }
              }
            }
          }
        }
        .section-prices {
          margin-bottom: 80px;
          display: block;
          > .subtitle {
            display: block;
            max-width: 650px;
            margin: 40px auto;
          }
          .section-day {
            text-align: center;
            margin-bottom: 40px;
            .title-section, .subtitle-section {
              font-size: 25px;
              font-weight: 900;
              line-height: 100%;
            }
            .subtitle-section {
              margin-bottom: 10px;
              display: block;
            }

            > .list {
             > .container-details {
                display: flex;
                flex-direction: column;
                gap: 5px;
               > div {
                 display: flex;
                 flex-direction: column;
                 gap: 5px;
               }
                .range {
                  font-size: 18px;
                  font-weight: 900;
                }
              }
            }
          }
        }
        .section-benefits {
          > h3 {
            margin-bottom: 10px;
          }
          > .list {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            > .item {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              > .q-img {
                max-width: 20px;
              }
              > p {
                font-weight: 900;
                font-size: 18px;
              }
            }
          }

        }
      }
    }
  }
}
</style>
