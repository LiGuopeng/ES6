'use strict'
class User {
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
    validateName(){
        let name=this.name;
    return  new Promise(function (resolve,reject) {
      setTimeout(function () {
              if(name==='leo'){
              resolve('success')
          }else{
              reject('error');
          }
      });
  });
    }

    validatepassword(){
        let password=this.password;
        return  new Promise(function (resolve,reject) {
            setTimeout(function () {
                if(password==='123'){
                    resolve('success')
                }else{
                    reject('error');
                }
            });
        });
    }
}
 const user=new  User('leo','333');
 user.validateName().then(function (result) {
      return     'dasd';
 })
 /*如果返回的不是promise对象,内部就会创建promise对象,继续往下处理
      var promise=Promise.resolve('dasd')
        //相当于
          new Promise(function (resolve,reject) {
          
      })*/
     .then(function (result) {
         console.log(result);
     }).catch(function (result) {
       console.log(result)
 })
   


