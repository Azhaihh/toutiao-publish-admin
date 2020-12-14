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
      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
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
        password: '',
        // 是否同意协议
        agree: false
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
        ],
        agree: [
          { 
            // 自定义校验规则
            // 验证通过 callback()
            // 验证通过 callback()
            validator: (rule, value, callback) => {
              return false
            },
            trigger: 'blur'
          }
        ]
      },
      // // 是否同意协议的选中状态
      // checked: false,
      // 登录的 loading 状态
      loginLoading: false
    }
  },
  methods: {
    onLogin () {
    // console.log('submit!')
      // 表单验证
      // console.log(this)
      this.$refs.loginFormRef.validate(valid => {
        // console.log(valid)
        // console.log(err)
        // 如果表单验证失败，停止请求提交
        if (!valid) {
          // return
        }

        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 开启登陆中 loading...
      this.loginLoading = true
      request({
        method: 'post',
        url: '/login',
        // data用于设置post请求体
        data: this.user
      }).then(res => {
        console.log(res)
        if (res.data.meta.status === 200) {
          // 登录成功
          this.$message({
            message: res.data.meta.msg,
            type: 'success'
          })
          // 关闭登陆中 loading...
          this.loginLoading = false
        } else {
          // 登录失败
          this.$message({
            message: res.data.meta.msg,
            type: 'error'
          })
        }
      }).catch(err => {
        // 系统错误
        this.$message({
          message: err,
          type: 'error'
        })
        // 关闭登陆中 loading...
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
