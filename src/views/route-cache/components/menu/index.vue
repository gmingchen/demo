<template>
  <el-menu :default-active="active">
    <MenuSub
      v-for="item in menus"
      :key="item.key"
      :menu="item" />
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import MenuSub from '../menu-sub/index.vue'

const active = ref('')
const menus = ref([
  { key: 1, label: '路由一', name: 'routeCacheOne', children: [] },
  { key: 2, label: '路由二', name: 'routeCacheTwo', children: [] },
  { key: 3, label: '路由三-嵌套路由一级', name: 'routeCacheThree', children: [
    { key: 4, label: '路由四-嵌套路由二级', name: 'routeCacheFour', children: [] },
    { key: 5, label: '路由五-嵌套路由二级', name: 'routeCacheFive', children: [] },
    { key: 6, label: '路由六-嵌套路由二级', name: 'routeCacheSix', children: [
      { key: 7, label: '路由七-嵌套路由三级', name: 'routeCacheSeven', children: [] },
      { key: 8, label: '路由八-嵌套路由三级', name: 'routeCacheEight', children: [] },
    ]}
  ]}
])
</script>

<style scoped>
</style>
