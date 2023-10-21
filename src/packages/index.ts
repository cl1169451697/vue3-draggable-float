import DraggableFloat from './components/draggableFloat'

const components = {
  DraggableFloat,
}

const install = function (app) {
  Object.keys(components).forEach(key => {
    app.component(key, components[key])
  })
}

export { DraggableFloat }
export default {
  install,
}
