import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  // Erro 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router