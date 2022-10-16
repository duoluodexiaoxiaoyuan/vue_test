<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition>
      <h1 v-show="isShow">你好啊</h1>
    </transition> -->

    <!-- 起了name的名字  类名就是.hello-enter-active -->
    <!-- :appear="true一出来的时候就有动画效果 -->
    <transition name='hello' :appear="true">
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:"Test",
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
  /* .v-enter-active {
    animation: atguigu 1s linear;
  }

  .v-leave-active  {
    animation: atguigu 1s linear reverse;
  } */


  .hello-enter-active {
    animation: atguigu 1s linear;
  }

  .hello-leave-active  {
    animation: atguigu 1s linear reverse;
  }

  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>