import KaButton from "./button"
import KaForm from "./form"
import KaFormItem from "./formItem"
import KaInput from "@/packages/input/index.js"

const components = [
  KaButton,
  KaForm,
  KaFormItem,
  KaInput
]

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map(component => Vue.component(component.name, component));
}
export default {
  install,
  KaButton,
  KaForm,
  KaFormItem,
  KaInput
}
