<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
        <el-main>Main</el-main>
    </el-container>
  </el-container>
 <!-- 子路由出口：其位置决定着子路由渲染的位置 -->
    <router-view></router-view>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less"></style>
