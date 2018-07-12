<template>
   <div>
      <h3>轮播图</h3>
      <div class="swiper-wrap">
      <ul class="swiper" :class="{trans:activeIndex}" :style="{transform:'translateX('+swiper+')'}">
         <li v-for="item in imgs">
             <img :src="item" />
         </li>
      </ul>
      </div>
   </div>
</template>
<script>
   export default{
       data(){
           return{
               activeIndex:0,
               imgs:['http://www.dantyli.com/vue/cp/static/img/banner.66aa4f2.png','http://www.dantyli.com/vue/cp/static/img/banner.66aa4f2.png',
               'http://www.dantyli.com/vue/cp/static/img/banner.66aa4f2.png'],
               devwidth:''
           }
       },
       computed:{
           swiper(){
               return -this.activeIndex*this.devwidth+'px';
           }
       },
       created(){
           this.$nextTick(()=>{
              this.devwidth=document.body.clientWidth
           })
           window.timer=setInterval(()=>{
               if(this.activeIndex<this.imgs.length-1){
                   this.activeIndex+=1
               }else{
                   this.activeIndex=0;
               }
           },2000)
       }
   }
</script>
<style>
.swiper-wrap{
    height:250px;
    width:100%;
    overflow:hidden;
}
.swiper{
    white-space:nowrap;
}
.trans{
    transition:.5s ease-in;
}
.swiper li{
    overflow:hidden;
    display:inline-block;
}
.swiper li img{
    width:100%;
}
</style>