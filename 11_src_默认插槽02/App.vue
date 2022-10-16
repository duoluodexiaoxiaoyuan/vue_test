<template>
  <div class="container">
    <!-- <Category title="美食" :listData="foods"/>
    <Category title="游戏" :listData="games"/>
    <Category title="电影" :listData="films"/> -->
    <Category title="美食">
       <!-- 这里就是放插槽里面的内容，插槽里面的内容是可以放多个标签的 -->
       <img  src="https://tse3-mm.cn.bing.net/th/id/OIP-C.XOztT32mwEkQb1RaTMbuagHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt=""> 
    </Category>
    <Category title="游戏">
       <ul >
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
       </ul>
    </Category>
    <Category title="电影">
       <iframe frameborder="0" src="https://tv.sohu.com/s/sohuplayer/iplay.html?bid=93558846&autoplay=true&disablePlaylist=true" allowFullScreen="true" scrolling="no"></iframe>
    </Category>
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
  /* 这个img我写到app里面所以样式我觉得这里写比较好，其实放到Category里面也是可以的 */
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
  }
</style>

