<template>
  <div class="article-container">
    <!-- element组件：面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- element组件：表单 -->
    
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
