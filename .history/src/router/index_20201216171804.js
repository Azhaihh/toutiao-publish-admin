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
  },s
  {
    path: '/',
    // name: 'layout',
    // 因为此路由有下面的默认子路由，这里取名没有意义，如果写会报警告
    component: Layout,
    children: [
      {
        // path为空，会作为默认子路由渲染
        path: '/home',
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
