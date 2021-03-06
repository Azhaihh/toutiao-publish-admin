import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 创建 Vue 根实例
// 把router
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
