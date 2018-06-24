'use strict'
/*
    module.exports 初始值为一个空对象 {}
    exports 是指向的 module.exports 的引用
    require() 返回的是 module.exports 而不是 exports
*/
let getName=Symbol('getName');
 module.exports =class User {
 [getName](){
     return '李国喷'
 }
 print(){
     console.log(this[getName]())
 }
}