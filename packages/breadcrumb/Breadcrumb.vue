<script setup lang="ts">
import { computed } from 'vue'
interface Query {
  [propName: string]: any // 添加一个字符串索引签名，用于包含带有任意数量的其他属性
}
interface Route {
  path: string // 路由地址
  query?: Query // 路由查询参数
  name: string // 路由名称
}
interface Props {
  routes: Array<Route> // 或者Route[] router的路由数组，没有 ? 时，即表示 required: true
  fontSize: number // 字体大小
  height?: number // 面包屑高度
  maxWidth?: number // 文本最大显示宽度，超出后显示省略号
  separator?: string // 自定义分隔符
  target?: '_self'|'_blank' // 如何打开目标URL，当前窗口或新窗口
}
const props = withDefaults(defineProps<Props>(), {
  routes: () => [],
  fontSize: 14,
  height: 21,
  maxWidth: 180,
  separator: '',
  target: '_self'

})
const len = computed(() => {
  return props.routes.length
})
function getUrl (route: Route) {
  var targetUrl = route.path
  if (route.query && JSON.stringify(route.query) !== '{}') {
    const query = route.query
    Object.keys(query).forEach((param, index) => {
      if (index === 0) {
        targetUrl = targetUrl + '?' + param + '=' + query[param]
      } else {
        targetUrl = targetUrl + '&' + param + '=' + query[param]
      }
    })
  }
  return targetUrl
}
</script>
<template>
 <div>44444</div>
</template>
<style lang="less" scoped>
.m-breadcrumb {
  display: flex;
  align-items: center;
  .m-bread {
    display: inline-flex;
    align-items: center;
    line-height: 1.5;
    .u-route {
      color: rgba(0, 0, 0, 0.45);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
      padding: 0 4px;
      border-radius: 4px;
      transition: color 0.2s, background-color 0.2s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.88);
      }
    }
    .active {
      color: rgba(0, 0, 0, 0.88);
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }
    .u-separator {
      margin: 0 4px;
      color: rgba(0, 0, 0, 0.45);
    }
    .u-arrow {
      width: 12px;
      height: 12px;
      fill: rgba(0, 0, 0, 0.45);
    }
  }
  .assist {
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
