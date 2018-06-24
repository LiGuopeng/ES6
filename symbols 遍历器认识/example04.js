'use strict'
//for 根据for 后面的值去创建前面name
let name=Symbol.for('name');
let name1=Symbol.for('name');
console.log(name===name1);
//返回字符串keyFor
console.log(Symbol.keyFor(name));