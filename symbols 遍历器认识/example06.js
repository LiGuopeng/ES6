'use strict'
class Listpeople {
     constructor(people){
       //json格式{属性：值,属性：值}
         this.people=people;
     }
     [Symbol.iterator](){
         let i=0;
         let self=this;
         //拿到对像
         const key=Object.keys(this.people);
         const length=key.length;

         //返回iterator对象
         return{
             //iterator的next方法必须定义
               next:function () {
                 let name=key[i++]
                 let qq=self.people[name];
                 return{value:{name,qq},done:i>length}
             }

         }
     }
}
let pp=new Listpeople({'leo':'fsdf','fsdf':'fsdfsd'});
/*for(let item of pp){
    console.log(item)
}*/
var iterator=pp[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())