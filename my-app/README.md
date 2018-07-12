# 有关vue与jQuery结构设计简述，源码解析 <br/>
#vue <br>
vue是一个构造函数，使用new Vue()进行调用<br>
vue ‘出生地文件’中导入了五个方法，initMixin,stateMixin,renderMixin,eventsMixin,lifecycleMixin<br>
init方法用来内部初始化<br>
state方法使用Object.defineProperty在Vue.prototype上定义了两个属性，$data,$props,三个方法,set,delete,watch<br>
events方法在Vue.prototype上添加了四个方法，$on,$off,$once,$emit<br>
lifecycle在Vue.prototype上添加了三个方法，_update,$forceUpdate,$destroy<br>
render方法会调用其他函数来给Vue.prototype上添加一系列方法，添加完后追加两个方法，$nextTick和_render<br>
#数据响应系统实现原理  <br>
实例对象代理访问数据data<br>
依赖Object.defineProperty函数，通过该函数为对象的每个属性设置一对getter/setter从而得知属性被读取和被设置（数据劫持模式）<br>
#jquery <br>
jQuery使用不需要实例化jQuery对象<br>
使用$('xxx')这种实例化方式，其内部调用的是 return new jQuery.fn.init(selector,context,rootjQuery)这一句，构造实例交给了jQuery.fn.init()方法去完成<br>
jQuery的特点，sizzle选择器引擎，链式操作（需要的函数返回this），大量钩子函数，
DOM Ready 事件(settimeout事件实现)，Ajax封装
参考文章：<br/>
https://github.com/chokcoco/jQuery-<br>
 https://github.com/HcySunYang/vue-design


