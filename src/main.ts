import { createApp } from 'vue'
import App from './App.vue'

// 本地测试组件
import DraggableFloat from '../packages'

// 打包测试组件
// import DraggableFloat from '../dist/vue3-draggable-float.js'
// import "../dist/style.css";

const app = createApp(App)

app.use(DraggableFloat)

app.mount('#app')
