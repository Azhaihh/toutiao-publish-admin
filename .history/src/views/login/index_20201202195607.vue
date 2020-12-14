<template>
  <div class="login-container">
      <!--
          el-form 表单组件
          每个表单项都必须使用 el-form-item 组件包裹
       -->
    <el-form :model="user" class="login-form">
      <el-form-item>
        <el-input v-model="user.mobile"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
  justify-content: center;
  align-items: center;

  background: url("../../assets/img/login_bg.jpg") no-repeat;
  background-size: cover;

  .login-form {
      background-color: #fff;
      padding: 50px 60px;
  }
}
</style>
