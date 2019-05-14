import KaForm from "./src/form";
KaForm.install = function (Vue) {
  Vue.component(KaForm.name, KaForm);
}
export default KaForm;
