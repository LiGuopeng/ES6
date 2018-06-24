'use strict'
/*var  obj={
    name:'李国鹏',
     'my name':'立体那'
};
  obj.name;
  obj["my name"]*/

//ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。
let name=Symbol('name');
// let name2=Symbol('name');
// //console.log(name===name2)
let obj={
    [name](){
        return '李国鹏'
    }
};
 console.log(obj[name]());