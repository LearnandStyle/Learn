// console.log(Promise)
//resolve,转向成功态
// ,reject转向失败态 都是回调函数
let  p = new Promise((resolve,reject)=>{
    // console.log(1)
    setTimeout(function () {
        let a ="蘑菇";
        resolve(a);
    },2000)
})
// console.log(2)
p.then((data) =>{console.log(data)},(err)=>{console.log(err)})