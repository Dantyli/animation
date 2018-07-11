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