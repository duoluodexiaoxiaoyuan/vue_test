<template>
  <!--  组件的结构 -->
  <div class="demo">
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
  // 终结写法，Vue.extend可以省略
   export default {
    name: "Student",   // 组件名, 现在我们只是创建了组件，用的时候还要注册该组件 
    data(){
      return {
        name:"张三",
        sex:'男'
      }
    },
    // methods: {
    //  showName(){
    //   alert(this.name)
    //  }
    // }, 
  
  }
</script>


<style>
  /*  组件的样式 */
  .demo {
    background-color: skyblue ;
  }
</style>