<template>
  <el-container>
    <el-aside
    class="layoutAside"
    width="200px">
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
  background-color: #d3dce6;
}

.header {
  background-color: #b3c;
}
</style>
