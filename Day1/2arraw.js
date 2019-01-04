//箭头函数不具备arguments和this
//没有this就找上一级this
//改变this的指向方法
//call applay bind
//var that = this;
// =>
//如何确定this是谁，谁调用this就是谁
// function a(){
//     return b+1;
// }
// let a = b =>b+1;
//去掉function关键字，参数如果有一个可以省略小括号，小括号和大括号之间有一个箭头，
    // 如果没有大括号则直接是返回值，有大括号必须写return

// function a(b) {
//     return function (c) {
//         return b+c;
//     }
// }
// a(1)(2)
//let  a(b) = c =>c+b;z自己写的 错错错
//小括号和大括号之间有一个箭头,匿名函数删去关键字
 //改i）
// let a = b => {
//     return (c) => {//参数如果有一个可以省略小括号
//         return b+c; //有大括号必须写return  同样去掉return也要删去大括号
//     }
// }

//改ii)
let a = b => c => b+c;//高阶函数类两个及以上的箭头
console.log(a(1)(2));

//闭包：函数执行的一瞬间叫闭包（不销毁的作用域），当执行后返回上午结果必须是引用数据类型的，被外界变量接收，此时这个函数不会销毁(模块化),闭包如下所示
// let s = function a(b) {
//     return function (c) {
//         return b+c;
//     }
// }()
//闭包利用二
// [1,2,3].forEach(item =>{return console.log(item)})
    //[1,2,3].forEach(item =>{ console.log(item)}) 加不加return都一样