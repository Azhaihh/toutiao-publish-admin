<template>
  <el-container class="layout-container">
    <el-aside
    class="layoutAside"
    width="200px">
      <app-aside class="aside-menu"></app-aside>
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

import { getUserProfile } from '../../api/user'

export default {
  name: 'LayoutIndex',
  components: {
    AppAside,
    AppHeader
  },
  data () {
    return {}
  },
  created () {
    // 组件初始化完成，即
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
