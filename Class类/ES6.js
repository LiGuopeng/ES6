'use strict'
 class  User {
    //构造函数
     constructor(name,age){
         this.name=name;
         this.age=age;
     }
     //静态方法
     static  getClassName(){
         return 'User'
     }

     //类的方法
     changeName(name){
         this.name=name;
     }
      changeAge(age){
         this.age=age;
      }

      // 定义方法
     get info(){
         return 'name:'+this.name +'|age:'+this.age;
     }
 }



 //子类继承
 class  Manger extends User {
     constructor(name,age,password){
         super(name,age) //相当于call     call先创建子类   super先找父类
         this.password=password;
     }

    changePassword(password){
         this.password=password;
    }

 }
   console.log(typeof User,typeof  Manger);
    var manger=new Manger('E','E','E');
    .changePassword('asda');
    console.log(manger.password)
   console.log(manger.info);




    //当参数一样时   class i extents User{默认有两个参数}