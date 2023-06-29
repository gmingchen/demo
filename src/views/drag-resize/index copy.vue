<template>
  <div class="container">
    <div>
      <div ref="box" class="box">
        <div ref="drag" class="drag"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const box = ref()
const drag = ref()

const width = ref()
const downPageX = ref()

const moveHandle = (event) => {
  document.documentElement.style.cursor = 'col-resize'
  const value = event.pageX - downPageX.value
  const size = width.value + value
  box.value.style.width = size + 'px'
}

const upHandle = () => {
  // 移除监听
  document.removeEventListener('mousemove', moveHandle)
  document.removeEventListener('mouseup', upHandle)
  // 移除鼠标样式
  document.documentElement.style.cursor = ''
}

const downListener = () => {
  drag.value.addEventListener('mousedown', (event) => {
    // 获取水平参数
    width.value = box.value.offsetWidth
    downPageX.value = event.pageX

    // 添加鼠标移动事件
    document.addEventListener('mousemove', moveHandle)
    // 添加鼠标松开事件
    document.addEventListener('mouseup', upHandle)
  })
}

onMounted(() => {
  downListener()
})

onBeforeUnmount(() => {
  // 移除监听
  document.removeEventListener('mousemove', moveHandle)
  document.removeEventListener('mouseup', upHandle)
  // 移除鼠标样式
  document.documentElement.style.cursor = ''
})

</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.container > div {
  width: 50%;
  height: 50%;
  position: relative;
  display: flex;
}
.box {
  height: 250px;
  width: 250px;
  border: 1px solid black;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.drag {
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0px;
  width: 3px;
  cursor: col-resize;
  background-color: red;
}
</style>
