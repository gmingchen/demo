<script setup>
import { useRouter } from 'vue-router'

import MenuSub from './index.vue'

const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
})

const router = useRouter()
/**
 * 菜单点击事件
 * @param name 路由名称
 */
const clickHandle = () => {
  router.push({ name: props.menu.name })
}
</script>

<template>
  <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.name || menu.key + ''">
    <template #title>
      <span>{{ menu.label }}</span>
    </template>
    <MenuSub v-for="item in menu.children" :key="item.key" :menu="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.name || menu.key + ''" @click="clickHandle">
    <template #title>
      <span>{{ menu.label }}</span>
    </template>
  </el-menu-item>
</template>
