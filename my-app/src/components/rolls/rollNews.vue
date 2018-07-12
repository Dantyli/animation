<template>
   <div>
      <h3>热点新闻</h3>
      <div class="rolls-wrap">
         <ul :style={top} :class="{trans:activeIndex}">
            <li v-for="item in news">{{item}}</li>
         </ul>
      </div> 
      <p class="opt">
      <input type="text" maxlength='30' v-model="insert" /> <button @click="add">发布新闻</button>
      </p>
   </div>
</template>
<script>
    export default{
        data(){
            return{
                news:['中美贸易战何时休？看专家怎么说','铲屎官再爆惊天大秘密','世界杯花落谁家，我来告诉你','中美贸易战何时休？看专家怎么说'],
                activeIndex:0,
                insert:''
            }
        },
        methods:{
            add(){
                if(!this.insert){
                    return 
                }
                this.news.shift();
                this.news.unshift(this.insert)
                this.news.push(this.insert)
                this.insert=''
            }
        },
        computed:{
            top(){
                return -this.activeIndex*50+'px';
            }
        },
        mounted(){
            window.timer=setInterval(()=>{
                if(this.activeIndex+1<this.news.length){
                    this.activeIndex+=1
                }else{
                    this.activeIndex=0
                }
            },2500)
        },
        destroyed(){
            clearInterval(window.timer)
        }

    }
</script>
<style>
.rolls-wrap{
    margin-top:100px;
    height:50px;
    overflow:hidden;
    background:#fff;
}
.rolls-wrap ul{
     line-height:50px;
     font-size:16px;
     color:#333;
     position:relative;
}
.rolls-wrap .trans{
     transition:.5s .5s cubic-bezier(0.55, 0.09, 0.68, 0.53);
}
.rolls-wrap ul li{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.opt{
    margin-top:10px;
    font-size:14px;
}
</style>