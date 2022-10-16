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
 
  .hello-enter,.hello-leave-to {
    transform: translateX(-100%);
  }

  .hello-enter-to,.hello-leave  {
    transform: translateX(0);
  }
  .hello-enter-active,.hello-leave-active {
    /* linear 匀速 */
    transition: 0.5s linear;  
  }


</style>