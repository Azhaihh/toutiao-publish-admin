import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/logi',
    name: 'logi',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
