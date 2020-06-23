import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import index from '@/components/index'
import Profile from "../components/Profile"
import Project from "@/components/Project"
import Task from "../components/Task"
import Discussion from "../components/Discussion"
import Login from '@/components/member/Login'
import Register from '@/components/member/Register'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/member',
      component: () => import('@/components/layout/IndexLayout'),
      children:[{
        path:"login",
        name:'login',
        component:Login,
      },{
        path:"register",
        name:'register',
        component:Register,
      }]
    },
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
    }
  ]
})
