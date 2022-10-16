<template>
  <div class="container">
    <Category title="美食" :listData="foods"/>
    <Category title="游戏" :listData="games"/>
    <Category title="电影" :listData="films"/>
  </div>
</template>


<script>
  import Category from "./components/Category.vue"

  export default {
    name:'App',
    components: {
      Category
    },
    data(){
      return {
        foods:['火锅','烧烤','小龙虾','鱿鱼'],
        games:['红色警戒','血战上海滩','qq飞车','穿越火线'],
        films: ['《琅琊榜》','《大考》',"《最美新年》","《战狼》"]
      }
    }
   
  }
</script>
<style lang="css">
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>

