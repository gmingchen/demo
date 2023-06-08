import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'elemenntResize' } },
    {
      path: '/component-encapsulation',
      name: 'componentEncapsulation',
      component: () => import('../views/component-encapsulation/index.vue')
    },
    {
      path: '/elemennt-resize',
      name: 'elemenntResize',
      component: () => import('../views/elemennt-resize/index.vue')
    }
  ]
})

export default router
