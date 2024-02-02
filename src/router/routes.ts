import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    
      {
        path: '',
        component: () => import('pages/Lesson1.vue'),
      },
      {
        path: '/lesson2',
        component: () => import('pages/Lesson2.vue'),
      },
      {
        path: '/lesson3',
        component: () => import('pages/Lesson3.vue'),
      },
      {
        path: '/lesson4',
        component: () => import('pages/Lesson4.vue'),
      },
      {
        path: '/lesson5',
        component: () => import('pages/Lesson5.vue'),
      },
      {
        path: '/lesson6',
        component: () => import('pages/Lesson6.vue'),
      },
      {
        path: '/lesson7',
        component: () => import('pages/Lesson7.vue'),
      },
      {
        path: '/lesson8',
        component: () => import('pages/Lesson8.vue'),
      },
      {
        path: '/lesson9',
        component: () => import('pages/Lesson9.vue'),
      },
      {
        path: '/lesson10',
        component: () => import('pages/Lesson10.vue'),
      },
      {
        path: '/lesson11',
        component: () => import('pages/Lesson11.vue'),
      },

    ],
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
