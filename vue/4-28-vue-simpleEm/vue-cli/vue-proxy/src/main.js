// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入axios
import axios from 'axios'

// axios配置token
axios.defaults.headers.common['token'] = ""
axios.defaults.headers.post["Content-type"] = "application/json"

// 配置原型
Vue.prototype.$axios = axios
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
