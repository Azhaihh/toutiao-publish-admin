import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/index.vue')
const Home = () => import('../views/home/index.vue')
const Layout = () => import('../views/layout/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: ''
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
