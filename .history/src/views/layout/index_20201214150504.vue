<template>
  <div class="layout-container">
    <div>顶部导航栏</div>
    <!-- 子路由出口：其位置决定着子路由渲染的位置 -->
    <router-view></router-view>
    <div>侧边导航栏</div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less"></style>
