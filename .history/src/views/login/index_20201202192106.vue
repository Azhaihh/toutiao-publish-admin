<template>
  <div class="login-container">
      <!-- 
          el-form 表单组件
          每个表单项都必须使用 el-form-item 组件包裹
       -->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style scoped lang="less">
</style>
