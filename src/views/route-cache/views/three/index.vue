<template>
  <Content title="这是第三个路由-嵌套路由-第一级"></Content>
  <div class="view-wrap">
    <View keepalive></View>
  </div>
</template>

<script setup>
import Content from '../../components/content/index.vue'
import View from '../../components/view/index.vue'
defineOptions({ name: 'Three' })
</script>

<style scoped>
.view-wrap {
  padding: 50px;
}
</style>