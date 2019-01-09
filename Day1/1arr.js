/*数组遍历
* forEach map(映射) filter(过滤） some every reduce  (includes find in ES6)
* 考虑的：是否改变原数组  返回结果    回调函数的返回结果
* */
console.log('ok');
//配置npm和语法
//file的setting中配置
//ES6语法
//编程式语法
//1)
let arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//声明式语法  forEach不支持return
// 面试题 forEach 和for in 和for of的区别
// arr.forEach(function(item){//声明式 不关心如何实现
//     console.log(item)
// })
// for(let key in arr){//key会变成字符串类型，包括数组的私有属性
//     console.log(key)
// }
// for(let val of arr){//支持return，并且是值 of数组(不能遍历对象)
//     // console.log(val)
// }

// let obj = {school:"zfpx",age:8};//object.key将对象的key作为新的数组
// for(let val of obj){   console.log(val)//报错}
// for(let val of Object.keys(obj)){
//     console.log(obj[val])
// }
//2) filter    不操作原数组    返回的是过滤后的新数组  回调函数返回的结果：如果返回true，表示这一项放到新数组中   删除
// let newAry = [1,2,3,4,5].filter(function (item) {
//     return 2<item && item<5;
// });
// console.log(newAry)//[3,4]

//3)map 映射 将原有的数组映射成一个新数组[1,2,3]    更新
// //<li>1</li><li>2</li><li>3</li>  不操作原数组 返回新数组 回调函数中返回什么这项就是什么
// let arr1 = [1,2,3].map(function (item) {
//     // return 2;
//     // return item*=3;
//     return `<li>${item}</li>`  //``是es6中的模板字符串 遇到变量用${}取值
// })
// console.log(arr1)//return 2; 结果是[2,2,2]   return item*=3;结果是[3,6,9]   return `<li>${item}</li>` 结果是[ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]；
// console.log(arr1.join(''))


//4)includes  返回的是boolean
// let arr3 = [1,2,3,4,55,5555];
// console.log(arr3.includes(1))//true
// //5) 返回找到的那一项  不会改变数组 回调函数中true表示找到了，找到后停止循环
// let result  = arr3.find(function (item,index) {//找到具体的某一项用find
//     return item.toString().indexOf(5)>-1;
// });
// console.log(result)//55   找不到的返回的是undefined



//6) some 找true，找到true后停止返回true
// var arr4 = [1,2,3,4,55];
// let result  = arr4.some(function (item,index) {//找到具体的某一项用find
//     return item.toString().indexOf(5)>-1;
// });
// console.log(result)//找到返回true 找不到返回false
//7)every  找false 找到false后停止返回false
// var arr4 = [1,2,3,4,55];
// let result  = arr4.every(function (item,index) {//找到具体的某一项用find
//     return item.toString().indexOf(5)>-1;
// });
// console.log(result)//第一个就false 返回了

//8）reduce  收敛  4个参数   返回的是叠加后的结果
// 原数组不变 回调函数返回的结果：
//第一次prev是数组的第一项 next是数组的第二项
//第二次 prev是undefined next是数组的第三项
    //i）
    // let sum= [1,2,3,4,5].reduce(function (prev,next,index,item) {
    //     // console.log(arguments)
    //     console.log(prev,next);
    //     // return 100;//本次的返回值，会作为下一次的prev（1 2    100 3    100 4  100 5)
    //     return prev+next
    // })
    // console.log(sum)//求和 15


    // ii）
    // let sum2 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev,next) {
    //     console.log(prev,next);
    //     // return prev.price*prev.count + next.price*next.count  返回的第一次是正确的，后面的错误
    //     return prev+next.price*next.count;
    // },0)//0是默认指定第一次的prev  相当于sum2[0,{},{]...]
    // console.log(sum2)//求和 15

    // iii)
    let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
        return prev.concat(next);
});
    console.log(flat)//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

