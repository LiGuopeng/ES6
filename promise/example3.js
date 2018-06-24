
 //ES6
function asyncFun(a,b) {
    //resolve返回结果       reject结果错误
     return new Promise(function (resolve,reject) {
       //异常判断
         if(typeof a !=='number' || typeof b !=='number'){
             reject(new Error('no nubmle'));
         }
       setTimeout(function () {
           resolve(a+b);
       },200);
     });
}

 var resultList=[];
asyncFun(1,2)
    .then(function (result) {
         resultList.push(result);
        return asyncFun(12,2)
    })
    .then(function (result) {
        return resultList.push(result);
    }).then(function (result) {
     console.log(resultList);
})
 /* var promiss=Promise.all([asyncFun(1,2),asyncFun(2,3)]);
 promiss.then(function (result) {
     console.log(result)
 })*/





