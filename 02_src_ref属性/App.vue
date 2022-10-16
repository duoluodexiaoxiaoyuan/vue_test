<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button  @click="showDom">点我输出上方的dom元素</button>
    <School ref="sch"/>
    <Student/>
  </div>
</template>


<script>
  // 引入组件
  import School from './components/School.vue';
  import Student from './components/Student.vue'

  export default {
    name:'App',
    components:{
      School,
      Student
    },
    data(){
      return {
        msg: "欢迎来学校学习"
      }
    },
    methods: {
      showDom(){
        // 获取dom
        console.log(this.$refs.title);
        // 拿到的是组件的实例对象(组件间通信会用到)
        console.log(this.$refs.sch);
      }
    }
  }
</script>