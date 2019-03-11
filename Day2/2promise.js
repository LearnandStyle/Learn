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


// <input class=" fileName"  value="'+ ASP.uploadFileNames[i]+'" oninput ="OnInput(event)"onpropertychange="OnPropChanged(event)" readOnly="readOnly"/>
// if(target.className =" fileName" || (target .tagNane.toLomerCase()==='input'&&  target.parentNode.className ='file-text-tips')){
//     console . log(target);
//     $(target) .removeAttr('readOnly');
//     if(e.keyCode===13){
//         $(target).addAttr('readOnly')
//         console.log($(target).addttr('readOnly' ,true));
//         alert(1)
//     }
//     console.loe($(target ).attr('readOnly');
//
// }if(!target.className==='fileName'){
//     $('input').attr('readOnly' ,true)
// } else return;
