# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

pacage-lock.json 没有它版本就锁不住了 


# Vue脚手架报错 Component name “Student“ should always be multi-word vue/multi-word-component-names

```
参考地址:https://blog.csdn.net/qq_51612558/article/details/124329234
```

## ref属性
  1.被用来给元素或子组件注册引用信息(id的替代者)
  2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
  3.使用方式:
      打标识: <h1 ref='xxx'></h1>
      获取: this.$refs.xxx

props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据

## scoped的使用
  作用:让样式在局部生效，防止冲突
  加入不使用scoped会造成样式的覆盖，不同组件假设存在相同的类名就会造成样式的覆盖，加上scoped就可以解决这个问题

# 组件化编码流程
  其实组件的划分是按照功能点来划分的
  1.实现静态组件:抽取组件，使用组件实现静态页面效果
  2.展示动态数据
    2.1.数据的类型，名称是什么
    2.2.数组保存在哪个组件?
  3.交互(从绑定事件监听开始)

# localStorage存储
  好像存储的也不是特别重要的数据，感觉用于后端没有返回数据，但是前端要记录历史的时候才会用到

# 全局事件总线
  任意组件间通信


