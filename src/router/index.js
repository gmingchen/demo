import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'websocket' } },
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
    },
    {
      path: '/drag-resize',
      name: 'dragResize',
      component: () => import('../views/drag-resize/index.vue')
    },
    {
      path: '/route-cache',
      name: 'routeCache',
      redirect: { name: 'routeCacheOne' },
      component: () => import('../views/route-cache/index.vue'),
      children: [
        {
          path: '/one',
          name: 'routeCacheOne',
          component: () => import('../views/route-cache/views/one/index.vue')
        },
        {
          path: '/two',
          name: 'routeCacheTwo',
          component: () => import('../views/route-cache/views/two/index.vue')
        },
        {
          path: '/three',
          name: 'routeCacheThree',
          redirect: { name: 'routeCacheFour' },
          component: () => import('../views/route-cache/views/three/index.vue'),
          children: [
            {
              path: '/four',
              name: 'routeCacheFour',
              component: () => import('../views/route-cache/views/four/index.vue')
            },
            {
              path: '/five',
              name: 'routeCacheFive',
              component: () => import('../views/route-cache/views/five/index.vue')
            },
            {
              path: '/six',
              name: 'routeCacheSix',
              redirect: { name: 'routeCacheSeven' },
              component: () => import('../views/route-cache/views/six/index.vue'),
              children: [
                {
                  path: '/seven',
                  name: 'routeCacheSeven',
                  component: () => import('../views/route-cache/views/Seven/index.vue')
                },
                {
                  path: '/eight',
                  name: 'routeCacheEight',
                  component: () => import('../views/route-cache/views/eight/index.vue')
                },
              ]
            },
          ]
        },
      ]
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: () => import('../views/websocket/simple.vue')
    },
  ]
})

export default router



