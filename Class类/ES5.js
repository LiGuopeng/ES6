function User(name,age) {
    this.name=name;
    this.age=age;
}
//静态方法
User.getClassName=function () {
    return  'User';
};

//类的方法
User.prototype.changeName=function (name) {
     this.name=name;
}
User.prototype.changeAge=function (age) {
     this.age=age;
}


//取/存值函数  定义info方法
Object.defineProperty(User.prototype,'info',{
  get(){
      return 'name:'+this.name +'|age:'+this.age;
  }

});
    /*var user=new User('das',22);
     console.log(user);*/


    //做一个子类
    function  Manager(name,age,password) {
         User.call(this,name,age);
         this.password=password;
    }
    //继承静态方法
    Manager._proto_=User;

    //继承prototype方法
  Manager.prototype=User.prototype;

   //添加新方法
Manager.prototype.changepassword=function (pwd) {
         this.password=pwd;
}
      var manger=new Manager('E','E','E');
     manger.changepassword('李国鹏');
       console.log(manger.password)
        console.log(manger.info);