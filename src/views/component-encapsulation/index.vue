<template>
  <div class="container">
    <div>
      <h3>选项式</h3>
      <Options ref="refOptions" v-model="value" class="component">
        <template #prepend>
          <el-button :icon="Search" />
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </Options>
      <br><br>
      <el-button @click="clickHandle(refOptions)">获得焦点</el-button>
    </div>
    <div>
      <h3>组合式</h3>
      <Composition ref="refComposition" v-model="value" class="component">
        <template #prepend>
          <el-button :icon="Search" />
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </Composition>
      <br><br>
      <el-button @click="clickHandle(refComposition)">获得焦点</el-button>
    </div>
    <div>
      <h3>标签</h3>
      <TagComposition ref="refTagComposition" v-model="value" class="component">
        <template #prepend>
          <el-button :icon="Search" />
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </TagComposition>
      <br><br>
      <el-button @click="clickHandle(refTagComposition)">获得焦点</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

import Options from './components/options.vue'
import Composition from './components/composition.vue'
import TagComposition from './components/tag-composition.vue'

const refOptions = ref()
const refComposition = ref()
const refTagComposition = ref()

const value = ref('')

const clickHandle = (instance) => {
  instance.$refs.refInput.focus()
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
}
.container > div {
  flex: 1;
  text-align: center;
}
.component {
  margin: 0 auto;
  width: 200px;
}
</style>
