'use strict'
let arr={'ldd':'Lihihsd','dsd':'45'};
/*let iterator=function () {
    let i=0;
    let self=this;
    //拿到对像
    const key=Object.keys(this);
    const length=key.length;

    //返回iterator对象
    return{
        //iterator的next方法必须定义
        next:function () {
            let name=key[i++]
            let qq=self[name];
            return{value:{name,qq},done:i>length}
        }

    }
}
arr[Symbol.iterator]=iterator;
for (let item of arr) {
    console.log(item)
}*/