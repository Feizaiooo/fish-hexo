---
title: vue-awesome-swiper的使用
date: 2022-11-02 13:40
index_img:
tags:
---

[官方 git](https://github.com/surmon-china/vue-awesome-swiper)
#### 大坑，安装 vue-awesome-swiper 还需要安装 swiper，并且要安装对应的版本。

VUE2 开发可以用这两个版本：

```
"swiper": "^5.3.6",
"vue-awesome-swiper": "^4.1.0",
```

```
npm install vue-awesome-swiper@4.1.0 --save
npm install swiper@5.3.6 --save
```

main.js:

```javaScript
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
```
