#### babel转码器

- 官方：Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中

- 使用ES6+的方式编写程序而不用担心环境是否支持

#### [babel配置](https://www.babeljs.cn/docs/configuration)

- .babelrc:设置转码规则和插件

  ```json
  {
  	"presets":[],
  	"plugins":[]
  }
  ```

- presets字段设定转码规则

```bash
# es2015转码规则
$ npm install --save-dev babel-presets-es2015
# react转码规则
$ npm install --save-dev babel-preset-react

```

- 然后添加规则

```json
{
"presets"：["es2015","react"],
"plugins":[]
}
```

**所有Babel工具和模块的使用，都必须写好.babelrc**

#### babel也同样提供命令行转码`babel-cli`

```bash
$ npm install --global babel-cli
```



```bash
#转码结果输出到标准输出
$ babel example.js

$转码结果写入到一个文件
$ babel example.js --out-file complied.js

#或者
$babel example.js -o compled.js
```

**这里实践的时候发件example和complied没什么不同**