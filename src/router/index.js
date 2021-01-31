import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Deom from '@/components/deom'
import Home from '@/views/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/deom',
      name: 'Deom',
      component: Deom
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
