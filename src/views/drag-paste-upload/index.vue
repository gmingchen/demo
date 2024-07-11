<template>
  <div class="container">
    <div ref="refUpload" class="upload-area">
      <div>上传区域</div>
    </div>
    <div class="preview-area">
      <div v-show="!images.length">预览区域</div>
      <el-image
        class="image"
        v-for="(item, index) in images"
        :key="index"
        :src="item"
        :preview-src-list="images"
        :initial-index="index"
        preview-teleported
        fit="cover">
      </el-image>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const refUpload = ref()
const files = ref([])
const images = ref([])
const reader = () => {
  images.value = []
  for (let i = 0; i < files.value.length; i++) {
    const file = files.value[i];
    const reader = new FileReader()
    reader.onload = (e) => {  
      images.value.push(e.target.result)
    }
    reader.readAsDataURL(file);  
  }
}
const pasteHandler = (e) => {
  console.log('🚲 触发粘贴事件：', e);
  files.value = []
  const items = (e.clipboardData || e.originalEvent.clipboardData).items
  for (const index in items) {
    const item = items[index]
    if (item.kind === 'file') {
      files.value.push(item.getAsFile())
    }
  }
  reader()
}
const addHighlight = () => {
  refUpload.value.classList.add('highlight')
}
const removeHighlight = () => {
  refUpload.value.classList.remove('highlight')
}
const dropHandler = (e) => {
  removeHighlight()
  files.value = e.dataTransfer.files
  reader()
}
const dragHandle = () => {
  const events = ['dragover', 'drop']
  events.forEach(event => {
    refUpload.value.addEventListener(event, e => {
      e.preventDefault()
    })
  })
  let lastElement = null
  refUpload.value.addEventListener('dragenter', e => {
    lastElement = e.target
    addHighlight()
  })
  refUpload.value.addEventListener('dragleave', e => {
    if (e.target === lastElement) {
      removeHighlight()
    }
  })
  refUpload.value.addEventListener('drop', dropHandler)
}
onMounted(() => {
  refUpload.value.addEventListener('paste', pasteHandler)
  dragHandle()
})
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.upload-area, .preview-area {
  width: 300px;
  height: 200px;
  font-size: 12px;
  color: var(--el-text-color-regular);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
}
.upload-area {
  cursor: pointer;
}
.highlight {
  border-color: var(--el-color-primary);
}
.preview-area {
  flex-direction: column;
  overflow: auto;
}
.image {
  height: 100px;
  width: 100px;
  flex-shrink: 0;
}
</style>
