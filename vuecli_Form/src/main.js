import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.directive("border", function () {
});
//{
// bind(el, binding, vnode) {}, //重要
// inserted(el, binding, vnode) {},
// update(el, binding, vnode, oldvnode) {}, //重要
// componentUpdated(el, binding, vnode, oldvnode) {},
// unbind(el, binding, vnode) {},
// });

new Vue({
  render: h => h(App)
}).$mount("#app");
