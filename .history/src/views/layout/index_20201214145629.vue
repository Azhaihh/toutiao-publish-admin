<template>
  <div class="layout-container">
    <div>顶部导航栏</div>
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
