import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home'
import Qa from '@/container/Qa'
import Login from '@/container/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Qa',
      component: Qa
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
