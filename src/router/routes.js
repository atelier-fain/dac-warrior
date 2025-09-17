const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home-ro', path: '', component: () => import('pages/Home.vue') },
      { name: 'registrations-ro', path: 'inscriere/', component: () => import('pages/Registration.vue') },
      { name: 'tryouts-ro', path: 'probe/', component: () => import('pages/Tryouts.vue') },
      { name: 'informations-ro', path: 'informatii/', component: () => import('pages/Informations.vue') },
      { name: 'experiences-ro', path: 'experiente/', component: () => import('pages/Experiences.vue') },
      { name: 'updates-ro', path: 'noutati/', component: () => import('pages/Updates.vue') },
    ]
  },
  {
    path: '/en/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home-en', path: '', component: () => import('pages/Home.vue') },
      { name: 'registrations-en', path: 'inscriere/', component: () => import('pages/Registration.vue') },
      { name: 'tryouts-en', path: 'probe/', component: () => import('pages/Tryouts.vue') },
      { name: 'informations-en', path: 'informatii/', component: () => import('pages/Informations.vue') },
      { name: 'experiences-en', path: 'experiente/', component: () => import('pages/Experiences.vue') },
      { name: 'updates-en', path: 'noutati/', component: () => import('pages/Updates.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
