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
      return     user.validatepassword()
 }).then(function (result) {
      console.log('验证成功')
 }).catch(function (err) {
     console.log(err)
 })
   


