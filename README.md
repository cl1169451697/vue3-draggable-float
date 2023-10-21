# vue3-draggable-float

## Document & Online preview

[vue3-draggable-float](https://github.com/cl1169451697/vue3-draggable-float/)

## Install & Use

```bash
pnpm i vue3-draggable-float
# or
npm install vue3-draggable-float
# or
yarn add vue3-draggable-float
```

Import and register component

**Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import DraggableFloat from 'vue3-draggable-float'

const app = createApp(App)
app.use(DraggableFloat)
```

## Components

参数 | 说明               | 类型       | 默认值
-- |------------------|----------| --
padding | 页面安全距离           | string   | 30,5,50,10
bottom | 距离底部的距离          | number   | 100
isOverflowClient | 拖动是否可以溢出窗口       | boolean  | false
isSticky | 吸边效果             | boolean  | true
imgUrl | 图片地址             | string   |
showSlot | 插槽(开启后默认图片和文字失效) | boolean  | false
btnText | 显示的文字            | string   | 返回
isFn | 是否开启点击代执行的函数     | boolean  | false
fn | 点击代执行的函数         | function | 


## Functions

事件名称| 说明    | 回调参数
-- |-------| --
handleOk | 点击触发  | function(value:{left:number:top:number})	
handleMove | 拖动时触发 | function(value:{left:number:top:number})	
handleEnd | 拖动结束触发 | function(value:{left:number:top:number})	

