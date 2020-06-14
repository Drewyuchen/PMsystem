import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import index from '@/components/index'
import Profile from "../components/Profile";
import ProjectStatus from "../components/projectStatus";
import test from "../components/test";


Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
{
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/index',
      name: 'index',
      component:index
    },
    {
      path: '/profile',
      name: 'profile',
      component:Profile
    },
    {
      path: '/:projectid',
      name: 'projectStatus',
      component:ProjectStatus
    },
    {
      path: '/test',
      name: 'test',
      component:test
    }
  ]
})
