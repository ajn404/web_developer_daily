# 第一章react入门

## 1.1开始之前

### 1.1.1下载node和NPM

```bash
node -v
v10.16.3
```

- npm是node的包管理工具，npm:node package manager
- `npm install <package_name>`

- 使用淘宝镜像

```bash
npm install -g cnpm --registry=https://regitry.npm.taobao.org
cnpm install <package_name>
```

### 1.1.2模块打包工具Browserify

- 基于种种原因，引出了两款较为流行的模块打包工具Browserify和Webpack
- [Browserify](http://browserify.org/)

<img src="http://browserify.org/images/browserify.png">

<h1><center><a href="https://github.com/browserify/browserify#usage">doc</a></center></h1>

**使用类似node的require（）方法加载模块，在html代码中使用script标签引用browserify编译后的文件**

[browserify实践](https://www.jianshu.com/p/8d8b8752d8a0)

[代码](./1.1.2_browserify)

