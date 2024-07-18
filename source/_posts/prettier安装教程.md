---
title: prettier 安装教程
date: 2024-01-24 16:04:59
index_img:
tags:
---

1. 安装Prettier ,参考[官网教程](https://www.prettier.cn/docs/install.html)
```
npm install --save-dev --save-exact prettier
```
2. 创建配置文件，.prettierrc.js文件或者.prettierrc文件，例子：
```
{
  "printWidth": 120,
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "arrowParens": "always",
  "endOfLine": "auto",
  "singleAttributePerLine": true
}
```
3. 创建.prettierignore文件，例子：
```
dist/
deploy_versions/
.temp/
.rn_temp/
node_modules/
.DS_Store
.idea/
.swc/
env/

src/mock.json
pnpm-lock.yaml
dingtalk.js
```

4. [VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)安装Prettier

###FQA:
 - [VS Code Prettier插件配置](https://github.com/prettier/prettier-vscode)
 - 保存文件自动格式化代码：
   1. 打开VS Code 设置，输入save，Editor：Format On Save打钩
 - [Git Hook设置](https://www.prettier.cn/docs/precommit.html)