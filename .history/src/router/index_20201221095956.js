import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/index.vue')
const Home = () => import('../views/home/index.vue')
const Layout = () => import('../views/layout/index.vue')
const Article = () => import('../views/article/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // name: 'layout',
    // 因为此路由有下面的默认子路由，这里取名没有意义，如果写会报警告
    component: Layout,
    children: [
      {
        // path为空，会作为默认子路由渲染
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 注意：由于接口问题，，这里的功能并不完善，，仅仅适用于用户退出后再次登录
// 如若没有退出，本地一直保存有token，，再次输入url可能将直接进入（这里需再学习sessionStorage与localStorage）

// 路由导航守卫：说白了所有页面的导航都会经过这里
// 守卫页面的导航，，即拦截页面
// to：要去的路由信息
// from：来自哪里的路由信息
// next：放行方法
router.beforeEach((to, from, next) => {
  // 如果要访问的页面不是 /login，校验登录状态
  // 如果没有登录，则跳转到登录页面
  // 如果登录了，则允许通过
  // 允许通过
  // next()

  // 登录页面设置了如果登录成功，则将token保存至客户端的sessionStorage中
  // 这里是将储存的token值取出，用于判断
  const token = window.sessionStorage.getItem('token')

  // 校验非登录页面的登录状态
  if (to.path !== '/login') {
    if (token) {
      // 已登录，允许通过
      next()
    } else {
      // 没有登录，跳转到登录页面
      next('/login')
    }
  } else {
    // 登录页面，正常允许通过
    next()
  }
})

export default router
