<template>
 <!--
   el-menu中启用router模式会在激活导航时以 index 作为 path 进行路由跳转
   el-menu中设置:collapse="isCollapse" 用于控制侧边栏的展开与收起
  -->
  <el-menu
    class="nav-menu"
    default-active="/home"
    background-color="#002033"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse">

    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-document"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="iconfont iconimage"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="iconfont iconpublish"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="iconfont iconicon_comment"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/fans">
      <i class="iconfont iconfans"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="/setting">
      <i class="el-icon-setting"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  
  data () {
    return {
      // 设置侧边栏默认状态-展开
      isCollapse: false
    }
  }
}
</script>

<style lang="less">
.nav-menu {
  .iconfont {
    margin-right: 10px;
    padding-left: 5px;
  }
}
</style>
