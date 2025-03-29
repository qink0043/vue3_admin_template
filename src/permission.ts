//路由鉴权，项目中路由能不能被的权限的设置（某个路由什么条件下可以访问，什么条件下不能访问）  
import router from "./router";
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"

//获取用户相关的小仓库内部token数据，去判断用户是否登录成功
import useUserStore from './store/modules/user'
import pinia from "./store";
let userStore = useUserStore(pinia)
//全局守卫:项目中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to, from, next) => {
  //to:你将要访问哪个路由
  //from:你从哪个路由而来
  //next:路由的放行函数
  nprogress.start()
  //获取token，去判断用户登录，还是未登录
  let token = userStore.token
  //获取用户名字
  let userName = userStore.username
  if (token) {
    //用户登录判断
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      //登录成功访问其余的六个（排除登录）
      //有用户信息
      if (userName) {
        next()
      } else {
        //如果没有用户信息 获取用户信息再放行
        try {
          //获取用户信息以后放行
          await userStore.userInfo()
        } catch (error) { }
      }
    }
  } else {
    //用户未登录判断
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
//全局后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})

//第一个问题:任意的路由的切换实现进度条的业务 ---nprogress
//第二个问题:路由鉴权（路由组件访问权限的设置）
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理（三个子路由）|商品管理（四个字路由）


//用户未登录:可以访问login，其余六个不能访问（指向login）
//用户登录成功:不可以访问login（指向首页），其余的路由可以访问