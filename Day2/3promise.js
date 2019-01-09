function buyPack() {
    return new Promise((resolve ,reject) =>{//必须新创建一个实例
        setTimeout(() =>{
            if (Math.random() >0.5){
                resolve('买')
            } else {
                reject('不买')
            }
        },Math.random()*1000);
    });
}
buyPack().then(function (data) {
    console.log(data);
},function (data) {
    console.log(data)
})