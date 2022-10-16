<template>
  <div>
    <MyHeader/>
    <List/>
    <MyFooter/>
  </div>
</template>


<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import List from './components/List.vue'
  export default {
    name:'App',
    components:{
      MyHeader,
      MyFooter,
      List
    }
  }
</script>