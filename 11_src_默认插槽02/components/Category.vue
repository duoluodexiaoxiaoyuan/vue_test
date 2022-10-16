<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 假如没有传内容默认就会展示这里的你好 -->
    <slot>你没有传入内容</slot>
    
    
    
  </div>

</template>

<script>
export default {
  name:"Category",
  props: ['listData','title']

}
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }
 
</style>