/*
  该文件是整个项目的入口文件 
  困惑的点(都是脚手架帮我们做的 )
    1.怎么注册的组件
    2.index.html没有引入main.js怎么用的   
*/
import { createApp } from 'vue'
// 引入App组件，它是所有组件的父组件 
import App from './App.vue'

// 之前的写法
// new Vue({
//   render(h) {
//     return h(App)
//   },
// }).$mount('#app')

// 第二种写法
// new Vue({
//   el: "#app",
//   render(h) {
//     return h(App)
//   },
// })


// 将App组件放入容器中
createApp(App).mount('#app')
 