<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">占位的位子</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { User,Lock } from '@element-plus/icons-vue'
  import { reactive } from 'vue'
  //引入用户相关的小仓库
  import useUserStore from '@/store/modules/user'
  let useStore = useUserStore()
  //收集账号与密码的数据
  let loginForm = reactive({username:'',password:''})
  //登录按钮回调
  const login = () => {
    //通知仓库发登录请求
    //请求成功->首页展示数据
    //请求失败->弹出登录失败信息
    useStore.userLogin(loginForm)
  }
</script>

<style scoped lang="scss">
  .login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
  }
  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
</style>