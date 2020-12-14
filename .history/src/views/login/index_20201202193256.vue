<template>
  <div class="login-container">
      <!--
          el-form 表单组件
          每个表单项都必须使用 el-form-item 组件包裹
       -->
    <el-form :model="user" label-width="80px">
      <el-form-item label="手机号">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
