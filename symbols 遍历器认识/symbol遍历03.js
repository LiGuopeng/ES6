'use strict'
let name= Symbol('name');
let name1= Symbol('name1');
let obj={
    age:22,
    [name]:'Leo',
    [name1]:'Leoasd'
};
/*不可以打印出Symbol属性
console.log(Object.keys(obj));

for(let i in obj){
    console.log(k)
}

console.log(Object.getOwnPropertyNames(obj));
*/

//getOwnPropertySymbols返回对象的自有符号属性。对象的自有符号属性是指直接在此对象上定义、而非从对象的原型继承的属性。
let key=Object.getOwnPropertySymbols(obj);    //[Symbol(name),Sumbol(name1)]
console.log(obj[key[0]]);


