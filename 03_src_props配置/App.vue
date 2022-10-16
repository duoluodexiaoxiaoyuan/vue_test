<template>
  <div>
    <Student name="李四" sex="女" age="18" money=100 />
    <!-- 加个冒号传过去的就是数字了 加:表示我绑定的是引号里面的内容，不加引号就是一个普通的字符串 -->
    <Student name="李四" sex="女" age="18" :money=100 />
    <!--  age="18" money=100  传过去的都是字符串，而且 money=100/>写成这样会报错，写成 money=100 /> 或者 money="100"/> 就好了-->
    <Student name="张三" sex="女" age="18" money=200 />
  </div>
</template>


<script>
  import Student from './components/Student.vue'

  export default {
    name:'App',
    components:{
      Student
    }
  }
</script>