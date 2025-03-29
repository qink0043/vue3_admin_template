<template>
  <div class="logo">
    <img :src="setting.logo" alt="" v-if="setting.logoHidden">
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
//引入设置标题与logo配置文件
import setting from '@/setting';
</script>

<script lang="ts">
export default {
  name:"Logo"
}
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: $base-menu-logo-height;
  }
  p {
    font-size: $base-logo-title-fontsize;
    margin-left: 10px;
  }
}
</style>