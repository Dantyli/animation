<template>
    <div>
        <h3>头部内容,标题...</h3>
        <div :class="fixed?'':'fixed'" class="auto_fixed"  >
          <button @click="back">返回列表</button> 选项栏，需要一直展示的<button>返回列表</button>
        </div>
        <div class="auto_fixed" v-if="!fixed"></div>
        <div class="content">
             <ul>
                <li v-for="item in contents">{{item}}</li>
             </ul>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            fixed:true,
            contents:[]
        }
    },
    created(){
        let cons=[]
        for(let i=0;i<18;i++){
           if(i%2==0){
               cons.push('白骨露於野')
           }else{
               cons.push('千里无鸡鸣')
           }
        }
        this.contents=cons;
        this.$nextTick(function () {  
           window.addEventListener('scroll', this.onScroll)  
        })  
    },
    methods:{
        onScroll(){
            //计算页面滚动的距离
            let scrolled=document.documentElement.scrollTop||document.body.scrollTop
            let fixed=scrolled<50;
            console.log(fixed)
            this.fixed=fixed
        },
        back(){
            window.history.go(-1);
        }
    }
}
</script>
<style>
.content {
    background:#fff;
}
.content li{
    height:50px;
    line-height:50px;
}
.auto_fixed{
    height:60px;
    line-height:60px;
    background:rgb(243,243,243)
}
.fixed{
    position:fixed;
    top:0;
    width:100%;
}
</style>