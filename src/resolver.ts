import type { ComponentResolveResult, ComponentResolver } from 'unplugin-vue-components/types';

function getIoResolved(name: string): ComponentResolveResult {

    const packageName = 'vue3-draggable-float';

    const style = `${packageName}/dist/style.css`;

    const compName = name.replace(name[0], name[0].toLocaleLowerCase());

    return {
        name,
        from: compName,
        sideEffects: style
    };
}

const CompResolver = (): ComponentResolver => {
    return {
        type: "component",
        resolve: (name) => {
            //name就是组件的名称，name传入进来时，首字母默认就是大写的
            if (name.startsWith("Dr")) {
                //这里对是否为fy开头的组件做一个过滤处理
                return getIoResolved(name);
            }
        },
    };
};

export { CompResolver };
export default CompResolver;

