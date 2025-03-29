import component from 'virtual:svg-icons-register';

//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',//菜单标题
      hidden: true,//代表路由标题在菜单中是否隐藏
      icon: "Promotion",//菜单文字左侧图标,支持element-plus全部图标
    },
  },
  {
    //登陆成功后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      icon: 'HomeFilled'
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'Promotion'
    },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'Lock'
    },
    redirect:'/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'acl',
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: '/acl/permisson',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled'
        }
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          icon: 'Monitor',
        },
      },
    ]
  },
  {
    path:'/product',
    component:()=>import('@/layout/index.vue'),
    name:'Product',
    meta:{
      title:'商品管理',
      icon:'Goods',
    },
    redirect:'/product/trademark',
    children:[
      {
        path:'/product/trademark',
        component:()=>import('@/views/product/trademark/index.vue'),
        name:'Trademark',
        meta:{
          title:'品牌管理',
          icon:'ShoppingCartFull',
        }
      },
      {
        path:'/product/attr',
        component:()=>import('@/views/product/attr/index.vue'),
        name:'Attr',
        meta:{
          title:'属性管理',
          icon:'ChromeFilled',
        }
      },
      {
        path:'/product/spu',
        component:()=>import('@/views/product/spu/index.vue'),
        name:'Spu',
        meta:{
          title:'spu管理',
          icon:'Orange',
        }
      },
      {
        path:'/product/sku',
        component:()=>import('@/views/product/sku/index.vue'),
        name:'Sku',
        meta:{
          title:'sku管理',
          icon:'Apple',
        }
      }
    ]
  },
{
  //任意路由
  path: '/pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'Promotion'
  }
}
]
