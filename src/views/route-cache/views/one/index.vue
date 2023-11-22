<template>
  <Content title="这是第一个路由"></Content>
  <!-- <el-container class="container">
    <el-aside class="sidebar">
      <Menu></Menu>
    </el-aside>
    <el-main class="main">
      <View keepalive></View>
      路由页面
    </el-main>
  </el-container> -->
</template>

<script setup>
import Content from '../../components/content/index.vue'

import View from '../../components/view/index.vue'
import Menu from '../../components/menu/index.vue'
defineOptions({ name: 'One' })
</script>

<style scoped>

.container {
  height: 100%;
}
.sidebar {
  width: 250px;
  background-color: var(--el-color-primary-light-7);
}
</style>
