<template>
  <el-input ref="refInput" v-bind="$attrs">
    <template v-for="(_value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-input>
</template>

<script>
export default {
  expose: [],
  data() {
    return {}
  },
  mounted() {
    let target = this.$refs.refInput.$.exposed || this.$refs.refInput
    const entries = Object.entries(target)
    for(const [key, value] of entries) {
      this.$.exposed[key] = value
    }
  },
  methods: {
  }
}
</script>
