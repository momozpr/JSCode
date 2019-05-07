// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.config.productionTip = false

// 自定义全局指令
// Vue.directive('rainbow',{
//   bind(el,bingding,vnode){
//     // toString(x):结果以x进制显示
//     el.style.color = '#'+Math.random().toString(16).slice(2,8);
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth = '1260px';
    }else if(binding.value=='narrow'){
      el.style.maxWidth = '560px';
    }

    if(binding.arg=='column'){
      el.style.background = '#6677cc';
      el.style.padding = '20px';
    }
  }
})

// 自定义过滤器:value是管道前面的值
// Vue.filter('to-upcase',function(value){
//   return value.toUpperCase();
// })

  // sinnpet:省略过滤
Vue.filter('sinnpet',function(value){
  return value.slice(0,100)+'...';
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
