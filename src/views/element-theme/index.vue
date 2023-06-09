<template>
  <div class="container">
    <el-button>Default</el-button>
    <el-button v-for="item in types" :key="item" :type="item">{{ item }}</el-button>
    <hr>
    <el-radio-group v-model="radio" @change="radioChangeHandle">
      <el-radio v-for="item in types" :key="item" :label="item" size="large">{{ item }}</el-radio>
    </el-radio-group>
    <br>
    <el-color-picker v-model="color" @change="colorChangeHandle" color-format="hex" :show-alpha="false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { lighten, darken } from '@/utils'

const el = document.documentElement

const types = ref(['primary', 'success', 'info', 'warning', 'danger'])

const radio = ref('primary') 

const color = ref(getComputedStyle(el).getPropertyValue(`--el-color-${radio.value}`))

const radioChangeHandle = () => {
  const value = getComputedStyle(el).getPropertyValue(`--el-color-${radio.value}`)
  color.value = value
}

const colorChangeHandle = (value) => {
  el.style.setProperty(`--el-color-${radio.value}`, value)
  for (let i = 1; i <= 9; i++) {
    el.style.setProperty(`--el-color-${radio.value}-light-${ i }`, lighten(value, i / 10))
    el.style.setProperty(`--el-color-${radio.value}-dark-${ i }`, darken(value, i / 10))
  }
}
</script>

<style>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 50%;
  text-align: center;
}
</style>