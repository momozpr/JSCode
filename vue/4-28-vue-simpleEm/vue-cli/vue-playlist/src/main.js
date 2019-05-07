// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由的组件
import HelloWorld from './components/HelloWorld'
// 引入vue-resource
import VueResource from 'vue-resource'
import Home from './components/Home'
// import Users from './components/Users'

Vue.config.productionTip = false
// 使用路由
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/hello",component:HelloWorld}
  ],
  // 去掉访问路径的#
  mode:"history"
})

// 全局注册组件
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
