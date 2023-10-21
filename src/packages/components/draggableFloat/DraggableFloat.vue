<template>
  <div class="draggable-float-wrap" id="draggable-float" ref="floatRef" :style="{ left: left + 'px', top: top + 'px' }" @click="handleBack">
    <div class="draggable-float-slot" v-if="showSlot">
      <slot></slot>
    </div>
    <div class="draggable-float-item" v-else>
      <img class="icon_back" :src="homeImg" alt="" />
      <span>{{ btnText }}</span>
    </div>
  </div>
</template>
<script setup lang="ts" name="DraggableFloat">
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import { getPadding } from './utils'
import homeImg from '../../../assets/img/home-alt.png'
interface Props {
  padding?: string // 安全距离
  isOverflowClient: boolean // 是否可以溢出窗口
  bottom: number
  isSticky: boolean // 是否可以溢出窗口
  imgUrl: string
  showSlot: boolean
  btnText: string
  isFn: boolean
  fn: Function
}
const props = withDefaults(defineProps<Props>(), {
  padding: '30,5,50,10',
  isOverflowClient: false,
  isSticky: true,
  bottom: 100,
  imgUrl: homeImg,
  btnText: '返回',
  showSlot: false,
  isFn: false,
  fn: () => {},
})

const emit = defineEmits(['handleOk', 'handleMove', 'handleEnd'])

const floatRef = ref<HTMLElement | any>() // 拖动dome
const clientWidth = ref<number>(0) // 视口宽度(元素 + 边框大小)
const clientHeight = ref<number>(0) // 视口高度
const currentTop = ref<number>(0) // 当前滚动的距离
const floatWidth = ref<number>(0) // 当前拖动元素的宽(内容 + padding + border)
const floatHeight = ref<number>(0) // 当前拖动元素的高
const top = ref<number>(0)
const left = ref<number>(0)

const paddingArr = computed(() => {
  return getPadding(props.padding)
})

function getInit() {
  clientWidth.value = document.documentElement.clientWidth
  clientHeight.value = document.documentElement.clientHeight
  currentTop.value = document.documentElement.scrollTop || document.body.scrollTop
  floatWidth.value = floatRef.value.offsetWidth
  floatHeight.value = floatRef.value.offsetHeight
}

function handleBack() {
  let isClick = floatRef.value.getAttribute('data-flag')
  if (isClick !== 'true') {
    return false
  }
  props.isFn && props.fn()
  handleEmit('handleOk', {
    left: left.value,
    top: top.value,
  })
}

function touchPc() {
  floatRef.value.style.cursor = 'pointer'
  let firstTime: number = 0
  let lastTime: number = 0
  let X: number = 0
  let Y: number = 0
  floatRef.value.onmousedown = function (e: any) {
    firstTime = new Date().getTime()
    floatRef.value.setAttribute('data-flag', 'false')
    floatRef.value.style.transition = 'none'

    if (e.preventDefault) {
      e.preventDefault()
    } else {
      e.returnValue = false // 解决快速频繁拖动滞后问题
    }

    document.onmousemove = function (e) {
      //实时移动: 元素位置 = 鼠标位置-鼠标相对元素位置
      X = e.clientX - floatRef.value.offsetWidth / 2
      Y = e.clientY - floatRef.value.offsetHeight / 2

      // 拖动是否可以溢出窗口
      if (!props.isOverflowClient) {
        if (X <= 0) {
          // 靠近左侧
          X = paddingArr.value[3]
        } else if (X > clientWidth.value - floatRef.value.clientWidth) {
          // 靠近右侧
          X = clientWidth.value - floatRef.value.clientWidth - paddingArr.value[1]
        }

        if (Y <= 0) {
          // 靠近顶部
          Y = paddingArr.value[0]
        } else if (Y > clientHeight.value - floatRef.value.clientHeight) {
          // 靠近底部
          Y = clientHeight.value - floatRef.value.clientHeight - paddingArr.value[2]
        }
      }
      left.value = X
      top.value = Y

      handleEmit('handleMove', {
        left: X,
        top: Y,
      })
    }

    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null
      lastTime = new Date().getTime()
      // 处理点击与拖动冲突问题
      if (lastTime - firstTime < 200) {
        return floatRef.value.setAttribute('data-flag', 'true')
      }

      // 吸边效果
      if (props.isSticky) {
        if (X > clientWidth.value / 2) {
          // 放下坐标靠近右侧
          X = clientWidth.value - floatRef.value.offsetWidth
          left.value = X
        } else {
          // 放下坐标靠近左侧
          left.value = paddingArr.value[3]
        }
      }

      floatRef.value.style.transition = 'all 0.3s'

      handleEmit('handleEnd', {
        left: X,
        top: Y,
      })
    }
  }
}

function touch() {
  let firstTime: number = 0
  let lastTime: number = 0
  let X: number = 0
  let Y: number = 0
  // 获取滚动元素
  // scrollContainer.value.addEventListener('scroll', handleScrollStart);
  // 设置位置

  floatRef.value.addEventListener('touchstart', () => {
    firstTime = new Date().getTime()
    floatRef.value.setAttribute('data-flag', 'false')
    floatRef.value.style.transition = 'none'
  })
  floatRef.value.addEventListener('touchmove', e => {
    // 阻止默认动作
    e.preventDefault()
    if (e.targetTouches.length === 1) {
      const touch = e.targetTouches[0]

      //实时移动: 元素位置 = 鼠标位置-鼠标相对元素位置
      X = touch.clientX - floatRef.value.offsetWidth / 2
      Y = touch.clientY - floatRef.value.offsetHeight / 2

      // 拖动是否可以溢出窗口
      if (!props.isOverflowClient) {
        if (X <= 0) {
          // 靠近左侧
          X = paddingArr.value[3]
        } else if (X > clientWidth.value - floatRef.value.clientWidth) {
          // 靠近右侧
          X = clientWidth.value - floatRef.value.clientWidth - paddingArr.value[1]
        }

        if (Y <= 0) {
          // 靠近顶部
          Y = paddingArr.value[0]
        } else if (Y > clientHeight.value - floatRef.value.clientHeight) {
          // 靠近底部
          Y = clientHeight.value - floatRef.value.clientHeight - paddingArr.value[2]
        }
      }

      left.value = X
      top.value = Y
      handleEmit('handleMove', {
        left: X,
        top: Y,
      })
    }
  })
  floatRef.value.addEventListener('touchend', () => {
    lastTime = new Date().getTime()
    // 处理点击与拖动冲突问题
    if (lastTime - firstTime < 200) {
      return floatRef.value.setAttribute('data-flag', 'true')
    }

    // 吸边效果
    if (props.isSticky) {
      if (X > clientWidth.value / 2) {
        // 放下坐标靠近右侧
        X = clientWidth.value - floatRef.value.offsetWidth
        left.value = X
      } else {
        // 放下坐标靠近左侧
        left.value = paddingArr.value[3]
      }
    }

    floatRef.value.style.transition = 'all 0.3s'

    handleEmit('handleEnd', {
      left: X,
      top: Y,
    })
  })
}

function handleDefaultValue() {
  left.value = clientWidth.value - floatWidth.value - paddingArr.value[1]
  top.value = clientHeight.value - floatWidth.value - props.bottom
}

function handleEmit(key, val) {
  emit(key, val)
}

onMounted(() => {
  nextTick(() => {
    getInit()
    touchPc()
    touch()
    handleDefaultValue()
  })
})
</script>

<style lang="less" scoped>
.draggable-float-wrap {
  position: fixed;
  z-index: 9999;
}

.draggable-float-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  .icon_back {
    object-fit: cover;
  }
  span {
    font-size: 16px;
  }
}
</style>
