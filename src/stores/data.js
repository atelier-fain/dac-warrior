import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    navLinks: [
      {
        id: 'home'
      },
      {
        id: 'registrations'
      },
      {
        id: 'tryouts'
      },
      {
        id: 'informations'
      },
      {
        id: 'experiences'
      },
      {
        id: 'updates'
      },
    ],
    listRuns: [
      {
        id: 'c1',
        img: 'ultimate.jpg',
        km: '21 KM',
        icon: 'obstacole.svg'
      },
      {
        id: 'c2',
        img: 'cu obstacole.jpeg',
        km: '11 KM',
        icon: 'obstacole.svg'

      },
      {
        id: 'c3',
        img: 'brave ok.jpg',
        km: '6 KM',
        icon: 'obstacole.svg'

      },
      {
        id: 'c4',
        img: 'TRAIL RUN 20.jpg',
        km: '20 KM',
        icon: 'fara_obstacole.svg'

      },
      {
        id: 'c5',
        img: 'fara obstacole.png',
        km: '11 KM',
        icon: 'fara_obstacole.svg'

      },
      {
        id: 'c6',
        img: 'kids.png'
      },
    ],
    listS4: [
      {
        id: 'c1',
        logo: 's4-logo-1.svg'
      },
      {
        id: 'c2',
        logo: 's4-logo-2.svg'
      },
      {
        id: 'c3',
        logo: 's4-logo-3.svg'
      },
      {
        id: 'c4',
        logo: 's4-logo-4.svg'
      },
    ],
    listS8: [
      {
        id: 'c1',
      },
      {
        id: 'c2',
      },
      {
        id: 'c3',
      },
      {
        id: 'c4',
      }
    ],
    listS9: [
      {
        id: 'i1'
      },
      {
        id: 'i2'
      },
      {
        id: 'i3'
      },
      {
        id: 'i4'
      }
    ],
  }),
  getters: {},
  actions: {}
})
