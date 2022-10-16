<template>
  <div class="container">
    <Category title="电影">
      <!-- 新版本的作用域变成这样写了 -->
       <template v-slot:default="{games}">
        <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
       </template>
      <template v-slot:footer>
         <div>更多电影</div>
       </template>
    </Category>
  </div>
</template>


<script>
  import Category from "./components/Category.vue"

  export default {
    name:'App',
    components: {
      Category
    }
  }
</script>
<style lang="css">
  .container {
    display: flex;
    justify-content: space-around;
  }
  /* 这个img我写到app里面所以样式我觉得这里写比较好，其实放到Category里面也是可以的 */
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
  }
</style>

