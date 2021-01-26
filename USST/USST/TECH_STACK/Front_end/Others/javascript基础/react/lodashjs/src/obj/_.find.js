var _=require("lodash");

var data = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];
console.log(_.find(data,'active'))
// { user: 'barney', age: 36, active: true }