<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance }  from 'vue'

const instance = getCurrentInstance()

const refInput = ref()

onMounted(() => {
  let target = refInput.value.$.exposed || refInput.value
  const entries = Object.entries(target)
  for (const [key, value] of entries) {
    instance.exposed[key] = value
  }
})
</script>
