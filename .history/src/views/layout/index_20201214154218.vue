<template>
  <el-container class="layout-container">
    <el-aside
    class="layoutAside"
    width="200px">
      Aside
    </el-aside>
    <el-container>
      <el-header class="headerAside">Header</el-header>
      <el-main class="mainAside">
        
      </el-main>
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
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.layoutAside {
  background-color: #d3dce6;
}

.headerAside {
  background-color: #b3c0d1;
}

.mainAside {
  background-color: #e9eef3;
}
</style>
