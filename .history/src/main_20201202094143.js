import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 创建 Vue 根实例
// 把 router 配置至根实例中
// 通过 render 方法把 APP 根组件渲染到 #app 入口节点（位于public文件夹下的index.html
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
