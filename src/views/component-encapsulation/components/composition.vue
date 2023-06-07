<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>

<script>
import { ref, onMounted, getCurrentInstance }  from 'vue'
export default {
  setup(props, context) {
    const instance = getCurrentInstance()

    const refInput = ref()
    
    onMounted(() => {
      const entries = Object.entries(refInput.value.$.exposed)
      for (const [key, value] of entries) {
        instance.exposed[key] = value
      }
    })

    context.expose()
    return {
      refInput
    }
  }
}
</script>
