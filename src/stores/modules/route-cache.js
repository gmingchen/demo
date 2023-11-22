import { defineStore } from 'pinia'

export const useRouteCacheStore = defineStore('routeCache', {
  state: () => ({
    keepalives: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
  })
})
