<template>
  <div class="content">
    <p>{{ title }}</p>
    <el-input class="input" v-model="value" placeholder="输入数据测试缓存"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  }
})
const value = ref('')
</script>

<style scoped>
.content {}
.input {
  width: 300px;
}
</style>
