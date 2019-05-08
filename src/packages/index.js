import KaButton from "./button"

const components = [
  KaButton
]

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map(component => Vue.component(component.name, component));
}
export default {
  install,
  KaButton
}
