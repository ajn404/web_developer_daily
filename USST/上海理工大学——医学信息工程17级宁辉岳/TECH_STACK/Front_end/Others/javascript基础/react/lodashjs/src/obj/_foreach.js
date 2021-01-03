var  _=require("lodash")

_([1,2]).forEach(
    function(value){
        console.log(value);
    }
)
//1
//2
_.forEach({"value1":"key1","value2":"key2"},function(value,key){
    console.log(key);
});
// value1
// value2

