- this 关键字是对定义方法的对象的引用

```javascript
var points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];
points.dist = function () {
  var p1 = this[0];
  var p2 = this[1];
  var a = p1.x - p2.x;
  var b = p1.y - p2.y;
  return Math.sqrt(a * a + b * b);
};
points.dist();
//1.4142135623730951
```

- [BOM,DOM,AJAX](https://techbrood.com/h5b2a?p=js-bom)

- 

  ```markdown
  ==和===操作符
  ```

  |              输入               | 输出  |
  | :-----------------------------: | ----- |
  | console.log("packt"?true:false) | true  |
  |   console.log('packt'==true)    | false |
  |   console.log('packt'==false)   | false |

  分析:'packt'==true为什么是flase

  1. toNumber()将布尔值转换为数字true===>1
  2. toNumber()将字符串转换为数字,字符串中包含字符,所以'packt'===>NaN
  3. 结果就是NaN==1,false

  ===简单一些,值和类型都相同才为true

- [关于Babel.js](https://www.babeljs.cn/)

- ES6新特性
  1. let,const
  
     ```javascript
     /*
     let，const相对于var最大的区别在于引入了块级作用域(之前只有全局和局部)
     */
     ```
  
     例如下面的代码（输出为？）
  
     ```javascript
     let x="hahahah";
     if(true){
       let x="niuniu";
       console.log(x);
     }
     //niuniu
     ```
  
  2. 模板字面量
  
  3. 解构
  
  4. 展开操作符
  
  5. 箭头函数
  
  6. 类
  
     