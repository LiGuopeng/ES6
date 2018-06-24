'use strict'
/*let arr ={
    length:2,
    '0':'Lihihsd',
    '1':'45'
};
arr[Symbol.iterator]=[][Symbol.iterator];
for (let d of arr){
    console.log(d);
}**/
 let aa='dasd';
 //console.log(aa[Symbol.iterator]);
  var itertor=aa[Symbol.iterator]();
 for (let char of itertor){
     console.log(char)
 }