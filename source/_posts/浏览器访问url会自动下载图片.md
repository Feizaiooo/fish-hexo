---
title: 浏览器访问url会自动下载图片
date: 2022-11-24 14:23
index_img:
tags:
---
### 有时候我们会发现，在浏览器地址输入图片链接，浏览器可以直接下载，或者直接展示图片
- 如果指定了`Content-Type`是`image/jpeg`，则产生的外链是在浏览器上直接显示
- 如果设置的`Content-Type`是`application/octet-stream`这种或者`multipart/form-data`这种，则外链是直接下载的
- `application/octet-stream` 这是应用程序文件的默认值。意思是 *未知的应用程序文件，*浏览器一般不会自动执行或询问执行。浏览器会像对待 设置了 HTTP 头`Content-Disposition` 值为 `attachment` 的文件一样来对待这类文件。
![这是图片](https://img2022.cnblogs.com/blog/2654462/202211/2654462-20221124143422226-895123283.jpg "Magic Gardens")
