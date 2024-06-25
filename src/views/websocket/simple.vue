<template>
  <div class="container">
    <div class="operate-wrap">
      <el-input class="input" v-model="text"></el-input>
      <div>
        <el-button type="primary" @click="init">初始化连接</el-button>
        <el-button type="primary" @click="sendHandle">发送消息</el-button>
        <el-button type="danger" @click="closeHandle">关闭连接</el-button>
      </div>
    </div>
    <div class="message-wrap">
      <div class="message" v-for="(item, index) in messages" :key="index">{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const url = 'wss://chatterbox.gumingchen.icu/chatterbox/websocket/eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWQiOjEsImV4cCI6MTcxOTU1MjY1OCwiaWF0IjoxNzE4OTQ3ODU4LCJqdGkiOiJjMjhlMjhjYi1mNTFlLTQ3OWEtYjk4OS03YjYxMzVkZjUxZjUifQ.l0KIKtIWbxtXohlVGLUdBc4TyHdNppes6jpJuaOeFUzs7iCMCGUT7S7uQJ1QAC13P7KlGLY54uBmnh3nKyvVqA'
let websocket = null
const text = ref()
const messages = ref([])
const open = () => {
  messages.value.push('连接成功')
}
const message = (e) => {
  messages.value.push(`收到消息：${ e.data }`)
}
const close = () => {
  messages.value.push('断开连接')
}
const error = () => {
  messages.value.push('连接失败')
}
const sendHandle = () => {
  if (text.value) {
    websocket.send(text.value)
    messages.value.push(`发送消息：${ text.value }`)
  }
}
const closeHandle = () => {
  websocket.close()
}
const init = () => {
  websocket = new WebSocket(url)
  websocket.onopen = open
  websocket.onmessage = message
  websocket.onclose = close
  websocket.onerror = error
}
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
.operate-wrap {
  justify-content: center;
}
.input {
  width: 300px;
  margin-bottom: 20px;
}
.message-wrap {
  margin-top: 20px;
}
</style>
