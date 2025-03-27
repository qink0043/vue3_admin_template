<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout-slider">123</div>
    <!-- 顶部导航 -->
    <div class="layout tabber">456</div>
    <!-- 内容展示区 -->
     <div class="layout-main">789</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: yellow;
  .layout-slide {
    width: $base-menu-width;
    height: 100vh;
    background-color: cyan;
  }
}
</style>