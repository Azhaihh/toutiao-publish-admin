<template>
 <!-- el-menu中启用router模式会在激活导航时以 index 作为 path 进行路由跳转 -->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>

    <el-menu-item index="/home">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-setting"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="el-icon-setting"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-setting"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-setting"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-setting"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less"></style>
