<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>


<script>
  import axios from 'axios'


  export default {
    name:'App',
    methods: {
      getStudents(){
        axios.get('url地址写进来').then(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        )
      }
    }
   
  }
</script>

