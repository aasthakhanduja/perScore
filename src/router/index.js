import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Start/Login'
import Registration from '@/components/Start/Registration'
import Response from '@/components/Respondent/Response'
import Category from '@/components/Admin/Category'
import SubmitQuestion from '@/components/Questionare/SubmitQuestion'
import AdminHome from '@/components/Admin/AdminHome'
import Question from '@/components/Admin/Question'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/home',
      name: 'Response',
      component: Response
    },
    // {
    //   path: '/home/questioner',
    //   name: 'QuestionerHome',
    //   component: QuestionerHome
    // },
    {
      path: '/admin/ques',
      name: 'Question',
      component: Question
    },
    {
      path: '/submit/question',
      name: 'SubmitQuestion',
      component: SubmitQuestion
    },
    {
      path: '/admin/cat',
      name: 'Category',
      component: Category
    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome
    }
  ]
})
