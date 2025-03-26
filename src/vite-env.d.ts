/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vite-plugin-svg-icons' {
  import { Plugin } from 'vite'
  export default function createSvgIconsPlugin(options: {
    iconDirs: string[]
    symbolId: string
  }): Plugin
}
declare namespace NodeJS {
  interface ProcessEnv {
    readonly VITE_APP_BASE_API: string
    readonly VITE_SERVE: string
  }
}
declare module 'element-plus'
declare module 'nprogress'
declare module 'element-plus/dist/locale/zh-cn.mjs'