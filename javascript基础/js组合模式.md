每日一题  12/26

分形：一个粗糙或零碎的[几何形状](https://baike.baidu.com/item/几何形状/12716491)，可以分成数个部分，且每一部分都（至少近似地）是整体缩小后的形状

- 自相拟
- 迭代生

js中实现组合模式的难点：**保证组合对象和叶子对象具有相同的方法**

文件与文件夹的关系非常适合用组合模式来描述：

```js
var Folder=function(name){
    this.name=name;
    this.files=[];
};

Folder.prototype.add=function(file){
    this.files.push(file);
};

Folder.prototype.scan=function(){
    console.log('开始扫描文件'+this.name);
    for (var i=0,file,files=this.files;file=files[i++];){
        file.scan();
    }
}
```

