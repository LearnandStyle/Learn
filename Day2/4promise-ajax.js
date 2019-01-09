//jquery的写法
/*
* $.ajax({
    * url:",
    * data:{},
    * type:'json',
    * success:
* })
* */
//es6写法 $.ajax().then(()=>{}.()=>{})
//ajax-promise封装
function ajax({url='',type='get',dataType='json'}) {
    return new Promise((resolve,reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);//同步异步
        xhr.responseType = dataType;
        xhr.onload = function () {//xhr.onreadyStates = 4 &&xhr.status =200
           if (xhr.status === 200){
               resolve(xhr.response);
           } else {
               reject('not found')
           }
        }
        xhr.onerror = function (err) {
            reject(err)//失败调用失败的方法
        };
        xhr.send();
    })
}

