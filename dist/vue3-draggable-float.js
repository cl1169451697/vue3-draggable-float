import { defineComponent, computed, openBlock, createElementBlock } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
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
      return openBlock(), createElementBlock("div", null, "44444");
    };
  }
});
const Breadcrumb_vue_vue_type_style_index_0_scoped_9def8167_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9def8167"]]);
Breadcrumb.install = (app) => {
  app.component(Breadcrumb.__name, Breadcrumb);
};
const components = [Breadcrumb];
const install = (app) => {
  components.forEach(
    (component) => app.component(component.__name, component)
  );
};
const VueAmazingUI = {
  install
};
export {
  Breadcrumb,
  VueAmazingUI as default
};
