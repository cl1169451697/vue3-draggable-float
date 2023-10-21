import { defineComponent, computed, openBlock, createElementBlock } from "vue";
const __default__ = defineComponent({
  name: "DraggableFloat"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    routes: { default: () => [] },
    fontSize: { default: 14 },
    height: { default: 21 },
    maxWidth: { default: 180 },
    separator: { default: "" },
    target: { default: "_self" }
  },
  setup(__props) {
    const props = __props;
    computed(() => {
      return props.routes.length;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "22");
    };
  }
});
const DraggableFloat_vue_vue_type_style_index_0_scoped_67b2ce3c_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const DraggableFloat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67b2ce3c"]]);
DraggableFloat.install = function(Vue) {
  Vue.component(DraggableFloat.name, DraggableFloat);
};
const components = [
  DraggableFloat
];
const install = function(Vue) {
  if (install.installed)
    return;
  install.installed = true;
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const index = {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
};
export {
  index as default
};
