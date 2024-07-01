<template>
  <div class="container">
    <div class="client-wrap">
      <div>
        <div>Client A</div>
        <Client ref="refClientA" @localDescription="aLocalDescriptionHandle"></Client>
      </div>
      <div>
        <div>Client B</div>
        <Client ref="refClientB" @localDescription="bLocalDescriptionHandle"></Client>
      </div>
    </div>
    <el-button @click="init">初始化</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Client from './client.vue'

const refClientA = ref()
const refClientB = ref()

const aLocalDescriptionHandle = (value) => {
  refClientB.value.remoteDescriptionHandler(value)
}

const bLocalDescriptionHandle = (value) => {
  refClientA.value.remoteDescriptionHandler(value)
}

const init = () => {
  refClientA.value.init()
  refClientB.value.init()
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
}
.client-wrap {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
