<template>
    <div>
        <button style="margin-top:50px;" @click="slide=!slide">{{slide?'收起':'展开'}}</button>
        <div class="slide-wrap"  >
            <ul :style="{transform:'translateY('+slidedown+')'}">
                <li>姑苏城外寒山寺</li>
                <li>江枫渔火对愁眠</li>
                <li>黄四娘家花满蹊</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            slide:false
        }
    },
    computed:{
        slidedown(){
            if(this.slide){
                return '0';
            }else{
                return '-100%';
            }
        }
    }
}
</script>
<style>
.slide-wrap{
    width:100%;
    overflow:hidden;
}
.slide-wrap ul{
    width:100%;
    transition:.5s;
    line-height:30px;
}
</style>