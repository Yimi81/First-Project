import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        redirect:'/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/Register',
      name: 'Register',
      component: Register
    },
    {
      path:'/main',
      name: 'main',
      component: main
    }

  ]
})
