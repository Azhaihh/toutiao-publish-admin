<template>
  <el-container class="layout-container">
    <el-aside
    class="layoutAside"
    width="auto">
      <app-aside
        class="aside-menu"
        :is-collapse="isCollapse">
      </app-aside>
    </el-aside>
    <el-container>
      <el-header class="headerAside">
        <app-header></app-header>
      </el-header>
      <el-main class="mainAside">
        <!-- 子路由出口：其位置决定子路由渲染的位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside'
import AppHeader from './components/header'

// // 由于接口问题，暂不考虑获取用户信息
// import { getUserProfile } from '../../api/user'

export default {
  name: 'LayoutIndex',
  components: {
    AppAside,
    AppHeader
  },
  data () {
    return {
      // // 控制侧边菜单栏的默认展示状态，通过props传给子组件数据
      // isCollapse: false
    }
  },
  created () {
    // // 组件初始化完成，即请求获取用户资料
    // this.loadUserProfile()
  },
  methods: {
    // loadUserProfile () {
    //   getUserProfile().then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.layoutAside {
  background-color: #d3dce6;
  .aside-menu {
  height: 100%;
}
}

.headerAside {
  height: 60px;
 }

.mainAside {
  background-color: #e9eef3;
}
</style>
