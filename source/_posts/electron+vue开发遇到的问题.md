---
title: electron+vue开发遇到的问题
date: 2024-02-01 14:55:44
index_img:
tags:
---

### 在运行 npm install electron 时，有些用户会偶尔遇到安装问题。

在大多数情况下，这些错误都是由网络问题导致，而不是因为 electron npm 包的问题。 如 ELIFECYCLE、EAI_AGAIN、ECONNRESET 和 ETIMEDOUT 等错误都是此类网络问题的标志。

- 最佳的解决方法是尝试切换网络，或是稍后再尝试安装。
- 更换镜像
  根目录新建.npmrc 文件，

```
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
```

### .build git

1. electron-builder

- 若安装遇到问题，参考 1
- "https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z"
  类似的错误还有 winCodeSign、nsis、nsis-resources，可手动下载压缩包，
  解压至 windows 目录：
  C:\Users\a\AppData\Local\electron-builder\Cache\winCodeSign
  C:\Users\a\AppData\Local\electron-builder\Cache\nsis

2. vue 开发下，electron 运行后 app 节点中的内容为空

- 将 router 模式改成 hash 模式，[原因](https://juejin.cn/post/7123165938031017997)
