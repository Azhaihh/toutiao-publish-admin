<template>
  <div>
    <i class="el-icon-s-fold"></i>
    <span>江苏传智播客科技教育有限公司</span>
</div>
    <el-dropdown>
    <div class="avatar-wrap">
    <img src="../../assets/img/avatar2.jpg" alt="" class="avatar"/>
    <span>用户昵称</span>
    <!-- 使用element的下拉菜单 -->
    <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>设置</el-dropdown-item>
    <el-dropdown-item>退出</el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style lang="less"></style>
