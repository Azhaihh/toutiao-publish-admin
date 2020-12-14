<template>
  <el-container>
    <el-aside
    class="layoutAside">
      Aside
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less">
.layoutAside {
  width: 200px;
  background-color: #d3dce6;
}
</style>
