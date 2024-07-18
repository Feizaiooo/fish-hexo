---
title: JS实现图片不存在时显示默认图片
date:  2022-02-21 15:18
index_img:
tags: [html]
---
图片丢失的情况，或者图片不存在时，网页上的红叉会显得很难看，这时候我们可以选择显示默认图片来代替
``` javaScript
<img src="assets/image/img/logo.png" onerror="javascript:this.src='http://82.156.211.214:94/static/bg_page.webp'"  /> 
```
