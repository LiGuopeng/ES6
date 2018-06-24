
 //ES6
function asyncFun(a,b,time) {
    //resolve返回结果       reject结果错误
     return new Promise(function (resolve,reject) {
       //异常判断
         if(typeof a !=='number' || typeof b !=='number'){
             reject(new Error('no nubmle'));
         }
       setTimeout(function () {
           resolve(a+b);
       },time);
     });
}

//race 返回最先执行完的
  var promiss=Promise.race([asyncFun(1,2,500),asyncFun(2,3,400),asyncFun(6556,2,300)]);
  promiss.then(function (result) {
     console.log(result)
 },function f(result) {
      console.log(result);
 })

   /*.catch(err>={

   })*/


