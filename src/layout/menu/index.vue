<template>
  <div>
    <template v-for="(item, index) in menuList" :key="item.path">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有且仅有一个子路由 -->
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden">
          <template #title>
            <component :is="item.children[0].meta.icon"></component>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由且个数大于1 -->
      <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
        <template #title>
          <component :is="item.meta.icon"></component>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])
//点击菜单的回调
const goRoute = (vc:any)=>{
  console.log(vc.index);
  
}
</script>

<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<style scoped></style>