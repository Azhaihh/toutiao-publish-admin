import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import ('../views/login/')

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  routes
})

export default router
