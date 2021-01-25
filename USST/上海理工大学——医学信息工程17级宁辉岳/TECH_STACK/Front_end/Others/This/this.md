```js
function fun(){
    console.log(this.s)
}

var obj={
    s:'1',
    f:fun
}

var s='2';

obj.f();//1,this指向当前作用域对象obj
fun();//2,this指向全局作用域对象window
```



```js
var obj1={
	name:'张三',
	f:function(){
		console.log('姓名'+this.name);
	}
}

var obj2={
    name:'李四'
}

obj2.f=obj1.f;

obj1.f();//张三
obj2.f();//李四
```





this使用最频繁的几种情况：

- 事件绑定

```js
//如果事件绑定不是一个函数调用
//直接在当前节点环境下使用this
//那么显然this指向的就是当前节点对象
```

- 构造函数

```
function Pro(){
	this.x='1';
	this.y=function(){};
}

var obj=new Pro();
```



```js
//new构造函数步骤
//1.创建一个空对象
//2.将本对象的原型链指向Pro.prototype
//3.将构造函数的this指向本对象
//4.执行构造函数的代码为对象赋值
//5.返回对象地址
```



- 定时器

```js
var obj={
    fun:function(){
        this;
    }
}

setInterval(obj.fun,1000);//window

setInterval('obj.sun()',1000);//obj

//注意setInterval()参数机制
//setInterval() 是window对象下内置的一个方法，接受两个参数，第一个参数允许是一个函数或者是一段可执行的 JS 代码，第二个参数则是执行前面函数或者代码的时间
//间隔；







```

- 函数对象的call和reply方法

  



###### 文献

[彻底搞懂JavaScript中的this指向问题](https://zhuanlan.zhihu.com/p/42145138)

