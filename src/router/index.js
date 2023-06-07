import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'encapsulation',
      component: () => import('../views/component-encapsulation/index.vue')
    }
  ]
})

export default router
