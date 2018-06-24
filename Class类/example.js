'use strict'
//立即执行
let user=new class User{
    constructor(name){
        this.name=name;
    }
}('李 过噢');



//变量不会被提升

 var Student=new Student();
 class Student {
     constructor(name){
         this.name=name;
     }
 }
  console.log(Student)//Identifier 'Student' has already been declared