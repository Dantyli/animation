import Vue from 'vue'
import App from './App'
import './static/style.css'
import router from './router'
new Vue({
  el: '#app',
  router,
  template:'<App />',
  components:{
    App
  },
  data:{
    eventHub:new Vue()
  }
})
console.log('%c 联系我: leece2012@163.com'," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:4em")