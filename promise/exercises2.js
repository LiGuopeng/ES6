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
                    reject('error  error');
                }
            });
        });
    }
}
 /*const user=new  User('leo22','333');
user.validateName().then(function (result) {
      throw  new Error('first-error');
    return     user.validatepassword()
},function (err) {
    console.log("second--error")
})
    .then(function (result) {
    console.log('验证成功')
})
    .catch(function (err) {
    console.log('three--error')
})*/

const user=new  User('leo','123');
user.validateName().then(function (result) {
    throw  new Error('first-error');
   },function (err) {
    console.log("second--error")
   })
    .catch(function (err) {
        console.log('three--error')
        return  user.validatepassword()

    })
    .then(function (result) {
        console.log(result)
    },function (ru) {
        console.log(ru)
    })
    .catch(function (err) {
         console.log('sadadasd')
    })
