//创建用户相关的小仓库
import {defineStore} from "pinia";
//引入接口
import { reqLogin } from "@/api/user";
//引入数据类型
import type { loginForm } from "@/api/user/type";
//创建用户小仓库
let userStore = defineStore('User',{
  //小仓库存储数据的地方
  state:()=>{
    return {}
  },
  //异步|逻辑的地方
  actions:{
    //用户登录的方法
    async userLogin(data:loginForm){
      //登录请求
      let result =  await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登陆失败错误的信息
    }
  },
  getters:{

  }
})
//对外暴露获取小仓库的方法
export default userStore