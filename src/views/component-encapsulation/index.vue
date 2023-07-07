<template>
  <div class="container">
    <div>
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
        <el-button @click="focusHandle(refOptions)">获得焦点</el-button>
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
        <el-button @click="focusHandle(refComposition)">获得焦点</el-button>
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
        <el-button @click="focusHandle(refTagComposition)">获得焦点</el-button>
      </div>
    </div>
    <div>
      <div>
        <ExpandTable ref="refExpandTable" :data="tableData" highlight-current-row table-layout="fixed">
          <el-table-column type="selection"  />
          <el-table-column prop="date" label="Date"  />
          <el-table-column prop="name" label="Name"  />
        </ExpandTable>
        <br><br>
        <el-button @click="tableClick()">设置选中行</el-button>
      </div>
      <div>
        {{ value }}
        <ExpandInput ref="refExpandInput" v-model="value" class="component" size="large">
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </ExpandInput>
        <br><br>
        <el-button @click="focusHandle(refExpandInput)">获得焦点</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

import Options from './components/options.vue'
import Composition from './components/composition.vue'
import TagComposition from './components/tag-composition.vue'

import ExpandTable from './components/expand-table.vue'
import ExpandInput from './components/expand-input.vue'

const refOptions = ref()
const refComposition = ref()
const refTagComposition = ref()

const refExpandTable = ref()
const refExpandInput = ref()

const value = ref('123')

const focusHandle = (instance) => {
  instance.focus()
}

const tableData = ref([
  { date: '2016-05-03', name: 'Tom' },
  { date: '2016-05-02', name: 'Tom' },
  { date: '2016-05-04', name: 'Tom' },
  { date: '2016-05-01', name: 'Tom' },
])
const tableClick = () => {
  const index = Math.floor(Math.random() * tableData.value.length)
  refExpandTable.value.setCurrentRow(tableData.value[index])
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
}
.container > div {
  display: flex;
  align-items: center;
}
.container > div > div {
  flex: 1;
  text-align: center;
}
.component {
  margin: 0 auto;
  width: 200px;
}
</style>
