<template>
  <component ref="refComponent" :is="is" v-bind="attrs">
    <template v-for="(_value, name) in slotVNodes" :key="name" #[name]="slotData">
      <component :is="slotVNodes[name]" v-bind="slotData || {}"></component>
    </template>
  </component>
</template>


<script setup>
import { ref, onMounted, getCurrentInstance, isVNode, Fragment, createBlock, reactive, onBeforeUpdate }  from 'vue'

defineProps({
  is: {
    type: [String, Object],
    required: true
  }
})

const instance = getCurrentInstance()

const refComponent = ref()

const attrs = ref({...instance.parent.attrs, ...instance.attrs})
const slotVNodes = reactive({})

const ensureValidVNode = (vnodes) => {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}

const renderSlot = (slot) => {
  const validSlotContent = slot && ensureValidVNode(slot());
  const rendered = createBlock(
    Fragment,
    {
      key: validSlotContent && validSlotContent.key 
    },
    validSlotContent || [],
    validSlotContent && 64
  );
  if (rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}

const convert = () => {
  const { slots } = instance.parent
  for (const key in slots) {
    const slot = slots[key];
    slotVNodes[key] = renderSlot(slot)
  }
}

convert()

onBeforeUpdate(() => {
  convert()
})

onMounted(() => {
  let target = refComponent.value.$.exposed || refComponent.value
  const entries = Object.entries(target)
  for (const [key, value] of entries) {
    if (key === '$') return
    instance.parent.exposed[key] = value
    instance.exposed[key] = value
  }
})
</script>
