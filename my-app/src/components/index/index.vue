<template>
   <div>
      <h3>效果列表</h3>
      <ul class="menu">
          <router-link to="/demo/sticky"><li>顶部吸附效果</li></router-link>
          <router-link to="/demo/stick"><li>顶部吸附（带动画）</li></router-link>
          <router-link to="/demo/rolls"><li>新闻滚动</li></router-link>
      </ul>
   </div>
</template>
<style>
.menu{
    background:#fff;
    padding:10px;
    margin-top:10px;
}
.menu li{
    border-bottom:1px solid #ddd;
    height:35px;
    line-height:35px;
    text-align:left;
}
</style>