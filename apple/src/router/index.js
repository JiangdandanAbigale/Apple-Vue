import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Mac from '../pages/Mac.vue'
import IPad from '../pages/IPad.vue'
import IPhone from '../pages/IPhone.vue'
import Watch from '../pages/Watch.vue'
import Music from '../pages/Music.vue'
import Support from '../pages/Support.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/Mac',
      name: 'Hello',
      component: Mac
    },
    {
      path: '/iPad',
      name: 'Hello',
      component: IPad
    },
    {
      path: '/iPhone',
      name: 'Hello',
      component: IPhone
    },
    {
      path: '/Watch',
      name: 'Hello',
      component: Watch
    },
    {
      path: '/Music',
      name: 'Hello',
      component: Music
    },
    {
      path: '/Support',
      name: 'Hello',
      component: Support
    }
  ]
})
