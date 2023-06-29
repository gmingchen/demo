<template>
  <div class="container">
    <div :class="item.position" v-for="(item, index) in list" :key="index">
      <div class="box"  v-drag-resize:[item.position]>
        {{item.label}}
      </div>
    </div>
    <div class="right-bottom">
      <div class="box" v-drag-resize:right v-drag-resize:bottom>
        向右-向下
      </div>
    </div>
    <div class="left-top">
      <div class="box" v-drag-resize:left v-drag-resize:top>
        向上-向左
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const list = ref([
  { position: 'top', label: '向上' },
  { position: 'right', label: '向右' },
  { position: 'bottom', label: '向下' },
  { position: 'left', label: '向左' },
])

</script>

<style>
.container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.container > div {
  width: 25%;
  height: 50%;
  position: relative;
  display: flex;
}

.top {
  justify-content: center;
  align-items: flex-end;
}
.right {
  justify-content: flex-start;
  align-items: center;
}
.bottom {
  justify-content: center;
  align-items: flex-start;
}
.left {
  justify-content: flex-end;
  align-items: center;
}
.right-bottom {
  justify-content: flex-start;
  align-items: flex-start;
}
.left-top {
  justify-content: flex-end;
  align-items: flex-end;
}

.box {
  height: 250px;
  width: 250px;
  border: 1px solid black;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
