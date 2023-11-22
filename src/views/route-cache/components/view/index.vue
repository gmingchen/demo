<script setup>
import { computed } from 'vue'
import { useRouteCacheStore } from '@/stores/modules/route-cache'

defineProps({
  keepalive: {
    type: Boolean,
    default: () => false
  }
})

const routeCacheStore = useRouteCacheStore()

const keepalives = computed(() => routeCacheStore.keepalives)

</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="keepalives" v-if="keepalive">
      <component :is="Component" />
    </keep-alive>
    <component :is="Component" v-else />
  </router-view>
</template>
