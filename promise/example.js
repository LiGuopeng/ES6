/* ES5
function asyncFun(a,b,cb) {
  setTimeout(function(){
     cb(a+b);
    },200);
}
asyncFun(1,2,function (result) {
    if(result>2){
        asyncFun(result,2,function (result) {
           if(result>4){
               asyncFun(result,2,function (result) {
                   console.log(result)
               })
           }
        })
    }
})
 console.log(2) */

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
//promise方法 中的then方法     指的是调方法有结果，不管对错都被调用
asyncFun(1,2)
    .then(function (result) {
           if(result>5){
          return asyncFun(result,2)
           }else {
               console.log('asdas')
           }
    },function(error){
           console.log('first--error')
   })
     .then(function (result) {
            if(result>4){
                return asyncFun(result,2)
            }
        })
    .then(function (result) {
        if(result>6){
            console.log(result);
        }
    })
     .catch(function (error) {
       console.log('second---error');
       });







