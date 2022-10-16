<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 假如没有传内容默认就会展示这里的你好 -->
    <slot :games="games"></slot>
    
    
  </div>

</template>

<script>
export default {
  name:"Category",
  props: ['listData','title'],
  // 这里可能好奇为什么要把数据放到Category组件里面，因为这样写方便项目管理，都写到App里面太乱了
  data(){
      return {
        foods:['火锅','烧烤','小龙虾','鱿鱼'],
        games:['红色警戒','血战上海滩','qq飞车','穿越火线'],
        films: ['《琅琊榜》','《大考》',"《最美新年》","《战狼》"]
      }
  }

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