<template>
  <div class="login-container">
    <div class="login-head"></div>
      <!--
          el-form 表单组件
          每个表单项都必须使用 el-form-item 组件包裹
       -->
    <el-form :model="user" class="login-form">
        <!-- 手机号 -->
      <el-form-item>
        <el-input
        v-model="user.username"
        placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item>
        <el-input
        v-model="user.password"
        placeholder="请输入用户密码"
        ></el-input>
      </el-form-item>
      <!-- 复选框 -->
      <el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button @click="onLogin" class="login-btn" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '../../utils/request'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        // 用户名
        username: '',
        // 密码
        password: ''
      },
      // 是否同意协议的选中状态
      checked: false
    }
  },
  methods: {
    onLogin () {
    // console.log('submit!')
    // 获取表单数据
      const user = this.user
      // 表单验证

      // 验证通过，提交登录
      request({
        method: 'post',
        url: '/login',
        // post请求必须携带的参数
        data: user
      }).then(res => {
        console.log(res)
        console.log(this)
        // this.$message({
        //   message: '登录成功',
        //   type: 'success'
        // })
      }).catch(err => {
        console.log('登录失败', err)
        // this.$message({
        //   message: '登录成功',
        //   type: 'success'
        // })
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("../../assets/img/login_bg.jpg") no-repeat;
  background-size: cover;

  .login-head {
    width: 300px;
    height: 57px;
    background: url("../../assets/img/logo_index.png") no-repeat;
    margin-bottom: 30px;
  }

  .login-form {
      background-color: #fff;
      padding: 50px 60px;
      min-width: 300px;
  }

  .login-btn {
      width: 100%;
  }
}
</style>
