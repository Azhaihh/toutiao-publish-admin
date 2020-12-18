<template>
  <div>
    <div>
      <i class="el-icon-s-fold"></i>
    <span>江苏传智播客科技教育有限公司</span>
    </div>
    <el-dropdown>
        <div class="avatar-wrap">
        <img src="../../../assets/img/avatar2.jpg" alt="" class="avatar"/>
        <span>用户昵称</span>
        <!-- 使用element的下拉菜单 -->
        <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {}
  }
}
</script>

<style lang="less">
.avatar-wrap {
  display: flex;
  align-items: center;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
