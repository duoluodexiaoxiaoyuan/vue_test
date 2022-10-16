<template>
  <!--  组件的结构 -->
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名: {{name}}</h2>
    <h2>学生姓名: {{sex}}</h2>
    <h2>学生年龄: {{myAge}}</h2>
    <!-- money*1进行了类型转换 -->
    <h2>钱: {{money*1+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
  // 终结写法，Vue.extend可以省略
   export default {
    name: "Student",   // 组件名, 现在我们只是创建了组件，用的时候还要注册该组件 
    data(){
      return {
        msg: "我是一个尚硅谷的学生",
        myAge: this.age,
      }
    },
    methods: {
      updateAge(){
        this.myAge++
      }
    }, 
    // props:['name','sex','age', 'money']   //简单接收
    // 接收的同时对数据类型进行限制
    // props: {
    //   name:String,
    //   age: Number,
    //   sex: String
    // }

    // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    props: {
      name:{
        type:String,  // name的类型
        required:true,  // 名字是必传的
      },
      age:{
        type:Number,
        default:99,  // 默认值 
      },
      sex:{
        type:String,
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