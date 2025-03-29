<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px;" @click="changeIcon">
    <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting';
let LayoutSettingStore = useLayoutSettingStore()
//点击图标的方法
const changeIcon = () => {
  LayoutSettingStore.fold = !LayoutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: "Breadcrumb"
}
</script>

<style scoped></style>