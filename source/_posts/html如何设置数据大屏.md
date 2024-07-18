---
title: html如何设置数据大屏
date:  2022-06-29 16:20	
index_img:
tags: [html]
---

为了适应各种屏幕的效果，页面采用了缩放功能，按照设定好的比例全屏铺满。

```html
<body>
  <div class="box" id="body">
    <p>按F11全屏显示</p>
    <div class="bottom">
      <p>底部全屏可见</p>
    </div>
  </div>
</body>
```

#### 页面缩放

```javaScript
function windowResize() {
    let cw = 1920,ch = 1080;
    let body = document.getElementById('body');
    body.style.width = `${cw}px`;
    // 窗口宽高
    let w = window.innerWidth;
    // 缩放比例
    let wr=  w / cw;
    body.style.transform = `scale(${wr})`;
    // 因为scale是以body的原中心点为基准进行缩放，所以缩放之后需要调整外边距，使其位于窗口的中心位置
    body.style.overflow= 'hidden';
}
```

#### 取消缩放

```javaScript
function cancelWindowResize() {
  let body = document.getElementById('body');
  body.style.transform = 'none';
  body.style.margin = '0';
  body.style.width = '100%';
  body.style.height = '100%';
}
```

#### 页面初始化

```javaScript
window.onload = function () {
  windowResize();
  window.addEventListener('resize', windowResize);
  return () => {
      cancelWindowResize();
      window.removeEventListener('resize', windowResize);
  };
}
```

#### css
```css
* {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
body {
  position: relative;
}
.box {
  font-size: 2rem;
  text-align: center;
  background: burlywood;
  height: 100%;
  width: 100%;
  position: fixed !important;
  top: 0;
  left: 0;
  transform-origin: left top;
}
.ddd {
  height: 100px;
  width: 100px;
  background: beige;
}
.bottom {
  position: absolute;
  bottom: 0px;
  width: auto;
  height: auto;
}
```
