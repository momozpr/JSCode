import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
        },{
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
