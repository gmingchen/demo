<template>
  <div class="container"></div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useWebsocketStore } from '@/stores/modules/websocket'

const websocketStore = useWebsocketStore()

const data = computed(() => {
  return websocketStore.response
})

onBeforeMount(() => {
  websocketStore.init()
})
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 50%;
  text-align: center;
}
</style>
