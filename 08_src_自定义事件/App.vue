<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父出传递数据 -->
    <School :getSchoolName="getSchoolName"/>
     <!-- 通过父组件给子组件绑定一个自定义事件:子给父出传递数据 -->
    <Student v-on:atguigu="getStudentName"/>
    <!-- this.$refs.student -->
    <!-- <Student ref="student"/> -->
   
  </div>
</template>


<script>
  import Student from './components/Student.vue'
  import School from './components/School.vue'

  export default {
    name:'App',
    components:{
      Student,
      School
    },
    data(){
      return {
        msg: "你好啊"
      }
    },
    mounted(){
      // 报错好像是因为把这个方法移除了
      // this.$refs.student.$on('atguigu',this.getStudentName)
    },
    methods:{
      getSchoolName(name){
        console.log('app收到了学校名字',name);
      },
      getStudentName(name){
        console.log('demo被调用了',name);
      }
    },
   
  }
</script>

<style scoped>
  #app {
    background-color: gray;
    padding: 5px;
  }
</style>