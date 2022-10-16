<template>
  <div class="category">
    <h3>{{title}}</h3>
    <ul >
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
    <!-- <img v-show="title ==='美食'" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XOztT32mwEkQb1RaTMbuagHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">  -->
    
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
  img {
    width: 100%;
  }
</style>