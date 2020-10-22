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
