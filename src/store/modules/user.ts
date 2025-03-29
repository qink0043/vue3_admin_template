//创建用户相关的小仓库
import { defineStore } from "pinia";
//引入接口
import { reqLogin, reqUserInfo } from "@/api/user";
//引入数据类型
import type { loginForm, loginResponseData } from "@/api/user/type";
import type { UserState } from "./types/types"
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
//引入路由（常量路由）
import { constantRoute } from "@/router/routes";
//创建用户小仓库
let userStore = defineStore('User', {
  //小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),//用户唯一标识token
      menuRoutes: constantRoute,//仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginForm) {
      //登录请求
      let result: loginResponseData = await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登陆失败错误的信息
      if (result.code === 200) {
        //pinia仓库存储token
        this.token = (result.data.token as string)
        //本地存储持久化存储一份
        SET_TOKEN((result.data.token as string))
        //保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息
    async userInfo() {
      //获取用户信息存储到仓库中[用户头像、名字]
      let result = await reqUserInfo()
      //如果获取用户信息成功，存储一下信息
      if (result.code === 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },
    userLogout() {
      //目前没有mock接口(通知服务器本地用户唯一标识失效)
      console.log(this);

      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    }
  },
})
//对外暴露获取小仓库的方法
export default userStore