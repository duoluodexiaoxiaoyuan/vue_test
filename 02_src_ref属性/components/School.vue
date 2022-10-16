<template>
  <!--  组件的结构 -->
  <div class="demo">
    {{schoolName}}
  </div>
</template>

<script>
   export default {
    name: "School",   // 组件名, 现在我们只是创建了组件，用的时候还要注册该组件 
    data(){
      return {
        schoolName:"家里蹲"
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