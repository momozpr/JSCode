import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)




const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // 滚到第一个btn的位置
    // return {selector:'.btn'}

    // 回到有前进或者后退操作的页面位置
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  }
})

// 全局守卫:类似拦截登陆一样
// router.beforeEach((to,from,next) =>{
//   // 判断访问的路劲是否登陆或者注册
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }
//   else{
//     alert("还没登陆，请先登陆！");
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach((to,from)=>{
//   alert("后置钩子")
// })
  

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
