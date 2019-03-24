import { NuxtAxiosInstance } from '@nuxtjs/axios'


// declare module '*.vue' {
//   import Vue from 'vue'
//   const _default: Vue
//   export default _default
// }

declare module "vue/types/vue" {
  interface Vue {
    $axios: NuxtAxiosInstance;
    $auth: {
      loginWith<T = any>(schema: string, value: Object): Promise<T> ;
      login: Function;
    },
    $toast: {
      success: Function;
    }
  }
}