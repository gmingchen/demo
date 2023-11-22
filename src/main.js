import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import VueComponentExpand from 'vue-component-expand-demo'

import Directive from '@/directive' // 自定义指令

const app = createApp(App)

app.use(router)
app.use(pinia)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(Directive)
app.use(VueComponentExpand)

app.mount('#app')
