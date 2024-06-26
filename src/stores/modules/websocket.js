import { defineStore } from 'pinia'
import WebsocketClass from '@/utils/websocket'

export const useWebsocketStore = defineStore('websocket', {
  state: () => ({
    socket: null,
    response: null,
  }),
  actions: {
    init() {
      if (!this.socket) {
        const url = `wss://chatterbox.gumingchen.icu/chatterbox/websocket/eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWQiOjEsImV4cCI6MTcxOTU1MjY1OCwiaWF0IjoxNzE4OTQ3ODU4LCJqdGkiOiJjMjhlMjhjYi1mNTFlLTQ3OWEtYjk4OS03YjYxMzVkZjUxZjUifQ.l0KIKtIWbxtXohlVGLUdBc4TyHdNppes6jpJuaOeFUzs7iCMCGUT7S7uQJ1QAC13P7KlGLY54uBmnh3nKyvVqA`
        this.socket = new WebsocketClass(url, data => {
          this.response = data
          console.log('🚲~~:', data)
        })
        this.socket.connect()
      }
    },
  }
})
