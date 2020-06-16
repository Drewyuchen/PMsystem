import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import index from '@/components/index'
import Profile from "../components/Profile"
import Project from "@/components/Project"
import Task from "../components/Task"
import Discussion from "../components/Discussion"
import test from "../components/test"


Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component:index,
      redirect:'/home',
      children:[{
        path: 'home',
        name: 'home',
        component:Home
      },
      {
        path: 'project',
        name: 'project',
        component:Project,
      }]
    },
    {
      path: '/profile',
      name: 'profile',
      component:Profile
    },
    {
      path: '/:projectid',
      name: 'projectid',
      component:()=>import('@/components/layout/ProjectLayout'),
      children:[{
        path: 'task',
        name: 'task',
        component:Task
      },{
        path: 'discussion',
        name: 'discussion',
        component:Discussion
      }]
    },
    {
      path: '/test',
      name: 'test',
      component:test
    }
  ]
})
