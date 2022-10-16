<template>
  <!--  组件的结构 -->
  <div class="test">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
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
    methods:{
      sendStudentName(){
        // 触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name) 
      }
    }
  
  }
</script>


<style scoped lang="css">
  /* scoped表示局部作用域 */
  /* lang="css" 用来指定css的编写方式 lang="less" */
  /*  组件的样式 */
  .test {
    background-color: orange ;
  }
</style>