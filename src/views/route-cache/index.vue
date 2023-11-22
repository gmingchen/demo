<template>
  <div class="route-cache">
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside class="sidebar">
          <Menu></Menu>
        </el-aside>
        <el-main class="main">
          <View keepalive></View>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import View from './components/view/index.vue'
import Menu from './components/menu/index.vue'
</script>

<style scoped>
.route-cache {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
}
.header {
  background-color: var(--el-color-primary-light-7);
}
.sidebar {
  width: 250px;
  background-color: var(--el-color-primary-light-8);
}
.main {}
</style>
