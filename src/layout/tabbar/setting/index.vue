<template>
  <el-button type="primary" size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" style="width: 30px; margin: 0 10px; border-radius: 15px;">
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
//获取骨架的小仓库
import useLayoutSettingStore from '@/store/modules/setting';
let layoutSettingStore = useLayoutSettingStore()
let userStore = useUserStore()
//获取路由器对象
let $router = useRouter()
let $route = useRoute()
//刷新按钮点击的回调
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
const fullScreen = () => {
  //DOM对象的一个属性，可以用来判断当前是不是全屏模式[全屏:true]
  let full = document.fullscreenElement
  //切换为全屏
  if (!full) {
    //文档根节点的方法requestFullscreen，实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
//退出登录点击的回调
const logout = () => {
  //第一件事：向服务器发请求
  //第二件事：仓库中关于用户相关的数据清空[token|username|avatar]
  //第三件事：跳转到登录页面
  userStore.userLogout()
  //跳转到登录页面
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<script lang="ts">
export default {
  name: "Setting"
}
</script>

<style scoped></style>