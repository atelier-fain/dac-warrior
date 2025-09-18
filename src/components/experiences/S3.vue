<template>
  <div class="section-3-experiences">
    <q-img
      class="bg-image"
      src="../../assets/bg-s3-experiences.png"
      alt="bg-s3-experiences"
    />
    <div class="container">
      <div class="container-card card-a">
        <q-img
          class="bg-image-card"
          src="../../assets/card-s3.png"
          alt="card-s3"
        />
        <div class="title-section">
          <q-img src="../../assets/struguri-logo.svg"
                 alt="struguri"
          />
          <h2 class="text-center text-yellow">{{ content?.card_a?.title }}</h2>
          <span class="subtitle text-white text-center block">
            {{ content?.card_a?.subtitle }}
          </span>
          <p class="text-white text-center">{{ content?.card_a?.p }}</p>
        </div>
        <div class="section-day saturday">
              <span class="title-section text-white text-center">
                {{ content?.card_a?.sectionSchedule?.saturday?.title }}
              </span>
          <div class="list">
            <div class="text-center container-details">
              <div v-for="{id, p} in cardA?.saturday"
                   :key="`${id}-saturday`">
                <span class="range text-center text-white">
                  {{ content?.card_a?.sectionSchedule?.saturday?.[id]?.range }}
                </span>
                <p class="text-center text-white"
                   v-for="i in p"
                   :key="`${i}-p-saturday`">
                  {{ content?.card_a?.sectionSchedule?.saturday?.[id]?.[`p${i}`] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-card card-b">
        <q-img
          class="bg-image-card"
          src="../../assets/card-s3-b.png"
          alt="card-s3"
        />
        <div class="title-section">
          <h2 class="text-center text-yellow">{{ content?.card_b?.title }}</h2>
          <MainButton
            :label="content?.card_b?.button"
          />
          <p class="text-white text-center">{{ content?.card_b?.p1 }}</p>
          <p class="text-white text-center">{{ content?.card_b?.p2 }}</p>
          <p class="text-white text-center">{{ content?.card_b?.p3 }}</p>
        </div>
        <div class="list-s3-card-b">
          <div class="item"
               v-for="{id} in cardB?.list"
               :key="`${id}-list-card-b`">
            <q-img src="../../assets/logo-circle.svg"
                   alt="logo-circle"
            />
            <div class="text">
              <div class="bold text-white">{{ content?.card_b?.list?.[id]?.bold }} <span
                class="normal text-white"
                v-show="content?.cardB?.list?.[id]?.normal">
                    {{ content?.cardB?.list?.[id]?.normal }}</span>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-white text-center">
          {{ content?.card_b?.sectionSchedule?.title }}
        </h3>
        <div class="section-day friday">
              <span class="title-section text-white text-center">
                {{ content?.card_b?.sectionSchedule?.friday?.title }}
              </span>
          <div class="list">
            <div class="text-center container-details">
              <div v-for="{id, p} in cardB?.friday"
                   :key="`${id}-friday`">
                <span class="range text-center text-white">
                  {{ content?.card_b?.sectionSchedule?.friday?.[id]?.range }}
                </span>
                <p class="text-center text-white">
                  {{ content?.card_b?.sectionSchedule?.friday?.[id]?.p1 }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-day saturday">
              <span class="title-section text-white text-center">
                {{ content?.card_b?.sectionSchedule?.saturday?.title }}
              </span>
          <div class="list">
            <div class="text-center container-details">
              <div v-for="{id, p} in cardB?.saturday"
                   :key="`${id}-saturday`">
                <span class="range text-center text-white">
                  {{ content?.card_b?.sectionSchedule?.saturday?.[id]?.range }}
                </span>
                <p class="text-center text-white">
                  {{ content?.card_b?.sectionSchedule?.saturday?.[id]?.p1 }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-day sunday">
              <span class="title-section text-white text-center">
                {{ content?.card_b?.sectionSchedule?.sunday?.title }}
              </span>
          <div class="list">
            <div class="text-center container-details">
              <div v-for="{id, p} in cardB?.sunday"
                   :key="`${id}-sunday`">
                <span class="range text-center text-white">
                  {{ content?.card_b?.sectionSchedule?.sunday?.[id]?.range }}
                </span>
                <p class="text-center text-white">
                  {{ content?.card_b?.sectionSchedule?.sunday?.[id]?.p1 }}
                </p>
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
  cardA: Object,
  cardB: Object
})
</script>

<style lang="scss">
.section-3-experiences {
  background-image: url('../../assets/overlay.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  //min-height: 2000px;
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
    .container-card.card-a, .container-card.card-b {
      .section-day {
        text-align: center;
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
    .container-card.card-a {
      margin-bottom: 40px;
      .title-section {
        margin-bottom: 40px;
        > .q-img {
          max-width: 80px;
          margin: 0 auto;
          display: flex;
        }
        > h2 {
          margin-bottom: 20px;
        }
        > .subtitle {
          font-size: 18px;
          font-weight: 900;
          display: block;
        }
        > p {
          line-height: 25px;
          max-width: 80%;
          margin: 0 auto;
        }
      }
    }
    .container-card.card-b {
      > .title-section {
        .main-button {
          margin: 40px auto;
          display: flex;
          .q-btn__content {
            text-transform: uppercase;
          }

        }
        > p {
          display: block;
          max-width: 80%;
          margin: 0 auto;
        }
      }
      > h3 {
        margin: 40px 0;
      }
      .friday, .saturday {
        margin-bottom: 40px;
      }
      .list-s3-card-b {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
        margin: 40px auto 0;
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
  }
  > .container {
    padding-top: 50px;
    padding-bottom: 70px;
    > .container-card {
        padding: 50px 20px;
        z-index: 1;
        position: relative;
        overflow: hidden;
        border-radius: 30px;
        max-width: 90%;
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        > .bg-image-card {
          position: absolute;
          top: 0;
          left: 0;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: 100vh;
          z-index: -1;
          object-fit: cover;
        }
    }
  }
}
</style>
