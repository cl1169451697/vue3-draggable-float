import { createApp } from 'vue'
import App from './App.vue'

// 本地测试组件
// import DraggableFloat from './packages/index.ts'

// 打包测试组件
// import DraggableFloat from '../dist/vue3-draggable-float.es.ts'
// import "../dist/style.css";

// 线上测试
// import { DraggableFloat } from 'vue3-draggable-float'

const app = createApp(App)

// app.use(DraggableFloat)

app.mount('#app')
