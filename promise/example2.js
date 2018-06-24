' use strict'
var promise=Promise.resolve('dasd')
var promise1=new Promise(function (resolve,reject) {
    resolve('sfds');
     })
var promise3=Promise.reject('error')

 promise.then(function (result) {
     console.log(result)
 })
promise1.then(function (result) {
    console.log(result)
})
promise3.then(function (result) {
    console.log(result)
},function (e) {
    console.log(e);
})
    .catch(err>={

    })