import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'elementTheme' } },
    {
      path: '/component-encapsulation',
      name: 'componentEncapsulation',
      component: () => import('../views/component-encapsulation/index.vue')
    },
    {
      path: '/element-resize',
      name: 'elementResize',
      component: () => import('../views/element-resize/index.vue')
    },
    {
      path: '/element-theme',
      name: 'elementTheme',
      component: () => import('../views/element-theme/index.vue')
    }
  ]
})

export default router
