---
'1': 失效
title: vue2中，子页面有iframe标签，父页面$router.go(-1)失效
tags: [elementui,vue,javaScript]
index_img:
---
浏览器机制的原因，在 iframe 导航变化后手动点击浏览器的后退按钮也依然只是后退 iframe 中的导航。  
打印`history.length`可以看到，加入iframe标签后，个数大于未加入iframe标签时的个数。
### 场景：dialog对话框内嵌入iframe标签，关闭弹框后父页面`$router.go(-1)`失效
### 解决：
使用`v-if`指令，关闭对话框同时移除iframe标签，之后执行一次`this.$router.go(-1)`
以elementui为例
``` javaScript
<template>
  <el-dialog :visible.sync="iframeVisible" width="60%" title="查看进度" @closed="closeDialog">
    <iframe v-if="iframeVisible" width="100%" height="400px" :src="iframeSrc" sandbox="allow-scripts allow-same-origin"> </iframe>
    <span slot="footer">
      <el-button class="btn-red" @click="iframeVisible = false">关 闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      iframeVisible: false,
      iframeSrc: "",
    }
  },
  computed: {},
  methods: {
    openDialog() {
      this.iframeSrc = 'www.baidu.com'
      this.iframeVisible = true
    },
    // 关闭弹框后执行
    closeDialog(){
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="scss"></style>

```