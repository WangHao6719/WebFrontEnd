import Vue from 'vue'
import App from './App.vue'
import vSlideIn from './utils/vSlideIn'
// 注册
Vue.directive('slide-in', {
  inserted: vSlideIn.inserted,
  unbind: vSlideIn.unbind
})
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
