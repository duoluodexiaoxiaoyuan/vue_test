<template>
  <!--  组件的结构 -->
  <div class="demo">
    <h2>学生姓名: {{studentName}}</h2>
    <h2>学生姓名: {{sex}}</h2>
    <h2>学生年龄: {{age}}</h2>
  </div>
</template>

<script>
  // 终结写法，Vue.extend可以省略
   export default {
    name: "Student",   // 组件名, 现在我们只是创建了组件，用的时候还要注册该组件 
    data(){
      return {
        studentName:"张三",
        sex: "男",
        age:20
      }
    }
  }
</script>

<style>
  /*  组件的样式 */
  .demo {
    background-color: skyblue ;
  }
</style>