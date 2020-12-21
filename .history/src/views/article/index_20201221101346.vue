<template>
  <div class="article-container">
    <!-- element组件实现面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'ArticleIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less"></style>
