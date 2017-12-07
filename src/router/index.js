import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Start/Login'
import Registration from '@/components/Start/Registration'
import Home from '@/components/Respondent/Home'
// import NewQuestion from '@/components/Admin/NewQuestion'
import SubmitQuestion from '@/components/Questionare/SubmitQuestion'
import SubmitAnswer from '@/components/Admin/SubmitAnswer'

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
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/home/questioner',
    //   name: 'QuestionerHome',
    //   component: QuestionerHome
    // },
    // {
    //   path: '/new/question',
    //   name: 'NewQuestion',
    //   component: NewQuestion
    // },
    {
      path: '/submit/question',
      name: 'SubmitQuestion',
      component: SubmitQuestion
    },
    // {
    //   path: '/show/question/:question_id',
    //   name: 'ShowQuestion',
    //   component: ShowQuestion
    // },
    {
      path: '/submit/answer',
      name: 'SubmitAnswer',
      component: SubmitAnswer
    }
  ]
})
