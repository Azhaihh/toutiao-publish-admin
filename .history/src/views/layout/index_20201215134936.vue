<template>
  <el-container class="layout-container">
    <el-aside
    class="layoutAside"
    width="200px">
      <app-aside class="aside-menu"></app-aside>
    </el-aside>
    <el-container>
      <el-header class="headerAside">
        <i class="el-icon-s-fold"></i>
        <span>江苏传智播客科技有限公司</span>
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

export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  data () {
    return {}
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
  background-color: #b3c0d1;
}

.mainAside {
  background-color: #e9eef3;
}
</style>
