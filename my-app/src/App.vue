<template>
  <div id="app">
        <transition :name="transitionName">
          <router-view  />
        </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName:'slide-right'
    }
  },
  watch:{
    '$route'(to,from){
      const toTarget=to.path.split('/').length;
      const fromTrget=from.path.split('/').length
      this.transitionName=toTarget<fromTrget?'slide-left':'slide-right'
      console.log(this.transitionName)
    }
  }
}
</script>


