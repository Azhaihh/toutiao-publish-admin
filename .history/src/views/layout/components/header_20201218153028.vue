<template>
  <div class="header-container">
    <div>
      <!--
        绑定样式：:class="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'"
       -->
      <i @click="setBarCollapse()"
         :class="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'">
      </i>
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
        <!--
          注意组件默认不识别原生事件，除非内部做了处理
          给vue组件绑定事件时候，必须加上native
          等同于在子组件中，子组件内部处理click事件然后向外发送click事件
        -->
        <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {}
  },
  methods: {
    // ES6引入了rest参数，在函数的命名参数前添加三个点（...），就表明这是一个rest参数，用于获取函数的多余参数
    // mapMutations(['setBarCollapse'])：表示将this.setBarCollapse()映射为this.$store.commit('setBarCollapse')
    ...mapMutations(['setBarCollapse']),

    // 退出
    onLogout () {
      // console.log('onLogout')
      //element的messageBox弹框
      // 把用户的登录状态清除
      window.sessionStorage.removeItem('token')

      // 跳转至登录页面
      this.$router.push('/login')
    }
  },
  computed: {
    // 将this.isCollapse映射为store.state.isCollapse
    ...mapState(['isCollapse'])
  }
}
</script>

<style lang="less">
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

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
}

</style>
