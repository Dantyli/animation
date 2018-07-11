import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import stick from '../components/sticky/stick'
import sticky from '../components/sticky/sticky'
Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'*',
     redirect:'/index'
    },
    {
     path:'/index',
     component:index
    },
    {
      path:'/demo/stick',
      component:stick
    },
    {
      path:'/demo/sticky',
      component:sticky
    }  
  ]
})