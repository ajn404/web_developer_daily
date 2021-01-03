const { stubArray } = require("lodash")
var _ = require("lodash");

function squire(n){
    return n*n;
}
console.log(_.map([1,2,3,4],squire));
console.log(_.map({"value1":1,"value2":2,"value5":5}, squire));

