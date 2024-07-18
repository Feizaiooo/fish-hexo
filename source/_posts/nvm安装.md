---
title: nvm安装
date: 2022-10-24 13:33	
index_img:
tags:
---
nvm用于切换node版本
### nvm安装步骤：
1. 下载安装包
2. 卸载nodejs （删除nodejs安装时的文件夹）
3. 运行安装包，推荐默认路径（路径最好不要有中文）
4. 打开安装路径下的settings.txt,添加映射并保存
```  
node_mirror: https://npm.taobao.org/mirrors/node/ npm_mirror: https://npm.taobao.org/mirrors/npm
```  
5. 打开cmd到安装路径下（一定要用管理员权限打开cmd，否则nvm use会乱码）
### nvm常用指令
nvm -v 查看nvm版本和其他指令
nvm list 查看已下载版本
nvm list available 查看可下载版本
nvm install 版本号
nvm use 切换版本号
node -v 查看node版本号