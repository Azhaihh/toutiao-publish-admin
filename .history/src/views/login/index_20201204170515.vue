<template>
  <div class="login-container">
    <div class="login-head"></div>
      <!--
          el-form 表单组件
          每个表单项都必须使用 el-form-item 组件包裹
       -->
    <el-form ref="loginFormRef" :rules="loginFormRule" :model="user" class="login-form">
        <!-- 手机号 -->
      <el-form-item prop="username">
        <el-input
        v-model="user.username"
        placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="password">
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
        <el-button @click="onLogin" class="login-btn" type="primary" :loading="loginLoading">登录</el-button>
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
      // 表单验证规则
      loginFormRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      },
      // 是否同意协议的选中状态
      checked: false,
      // 登录的 loading 状态
      loginLoading: false
    }
  },
  methods: {
    onLogin () {
    // console.log('submit!')
    // 获取表单数据
      const user = this.user
      // 表单验证
      // console.log(this)
      this.$refs.loginFormRef.validate((valid, err) => {
        // console.log(valid)
        // console.log(err)
      })

      // 验证通过，提交登录
      // 开启登陆中，loading...
      this.loginLoading = true
      request({
        method: 'post',
        url: '/login',
        // 请求体：post请求必须携带的参数
        data: user
      }).then(res => {
        // res 为返回的整个成功请求
        // console.log(res)
        if (res.data.meta.status === 200) {
          // console.log(this)
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          // 关闭 loading
          this.loginLoading = false
        } else {
          this.$message({
            message: res.data.meta.msg,
            type: 'error'
          })
          // 关闭 loading
          this.loginLoading = false
        }
      }).catch(err => {
        // 注意定义方法时的入参一定要使用
        // console.log(err)
        this.$message({
          message: err,
          type: 'error'
        })
        // 关闭 loading
        this.loginLoading = false
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
