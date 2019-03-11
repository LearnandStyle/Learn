// //发布 emit 订阅 on  {女生失恋:['哭'，'购物'，'吃']}   不加参数
// function  Girl() {
//     this._events = {};//私有的
// }//{失恋:[cry]}
// Girl.prototype.on = function(eventName,callback){
//     if(this._events[eventName]){//this._events.eventName .eventName是字符串   属性有值  不是第一次
//         this._events[eventName].push(callback);//失恋 cry shopping eat
//     }else{//是第一次执行
//         this._events[eventName] = [callback];//{失恋:[eat,cry,shopping]}
//         // console.log([callback])
//     }
// };
// Girl.prototype.emit = function(eventName){
//     if(this._events[eventName]){
//         this._events[eventName].forEach(cb => cb())
//     }
// };
// let girl = new Girl();
//
// let cry = () => {console.log('哭')}
// let shopping = () => {console.log('购物')}
// let eat = () => {console.log('吃')};
// girl.on("失恋",cry);//[失恋：[cry]}
// girl.on("失恋",eat);//[失恋：[cry,eat]}
// girl.on("失恋",shopping);//[失恋：[cry,eat,shopping]}
//
// girl.emit('失恋')












/*加参数*/
//发布 emit 订阅 on  {女生失恋:['哭'，'购物'，'吃']}
function  Girl() {
    this._events = {};//私有的
}//{失恋:[cry]}
Girl.prototype.on = function(eventName,callback){
      if(this._events[eventName]){//this._events.eventName .eventName是字符串   属性有值  不是第一次
        this._events[eventName].push(callback);//失恋 cry shopping eat
    }else{//是第一次执行
        this._events[eventName] = [callback];//{失恋:[eat,cry,shopping]}
        // console.log([callback])
    }
};
Girl.prototype.emit = function(eventName,...args){//...arg是将剩下的参数当做数组
    //[].slice.call(arguments,1)
    //Array.from(arguments).splice(1) //类数组转化为数组后


    if(this._events[eventName]){
        // this._events[eventName].forEach(cb => cb.apply(this,args)) 此方法也可以
        this._events[eventName].forEach(cb => cb(...args));
    }
};
let girl = new Girl();

let cry = (who) => {console.log(who+'哭')}
let shopping = (who) => {console.log(who+'购物')}
let eat = (who) => {console.log(who+'吃')}; //[...[1,2,3]] => [1,2,3] 展开运算符
girl.on("失恋",cry);//[失恋：[cry]}
girl.on("失恋",eat);//[失恋：[cry,eat]}
girl.on("失恋",shopping);//[失恋：[cry,eat,shopping]}

girl.emit('失恋','我','你')

