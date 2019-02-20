let vm = new  Vue({
    el:"#app",

    directives:{
        focusAa(el,bindings){//方法的名字用驼峰命名法
            //当点击当前li时让内部的输入框获取焦点
            console.log(bindings.value)
            if(bindings.value){
                el.focus();//获取焦点
            }
        }
    },
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        cur:'',
        hash:''
    },
    computed:{
        count(){
            return this.todos.filter(item =>!item.isSelected).length
        },
        filterTodos(){
            if (this.hash ==='all') return this.todos;
            if (this.hash ==='finished') return this.todos.filter(item => item.isSelected);
            if (this.hash ==='unfinished') return this.todos.filter(item => !item.isSelected);
            return this.todos;
        }
    },
    created(){//ajax获取 初始化数据    localStorage不存在获取todos的 增加容错性
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;
        // 监控hush值变化 如果页面已经有hash值了 重新刷新页面也要获取函数hash值
        this.hash = window.location.hash.slice(2) || "all";
        window.addEventListener('hashchange',()=>{
            //当hash值变化 重新操作记录的数据
            this.hash = window.location.hash.slice(2);
        },false)
        // window.addEventListener("hashchange",()=>{
        //     this.hash = window.location.hash.slice(2);
        // },false)
      },
    watch:{
        // todos(){//watch默认只监控一层的数据
        //     alert(); 添加的时候监控到变化，改变每项的某一属性的话监控不到变化
        // }
        todos:{
            handler(){//默认写成函数 相当于默认写了个handler
                localStorage.setItem('data',JSON.stringify(this.todos));
                // alert();
            },deep:true
        }
    },
    methods:{
        add(){//keydown/keyup差一个单词，keydown的时候内容没有输入到框内
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title =  '';
        },
        remove(todo){//拿到当前点击的和数组里的比对相等则返回false即可
            this.todos = this.todos.filter(item=>item!==todo);
        },
        remember(todo){//当期那传的的是todo（当前点击的这一项）
            this.cur = todo;
        },
        cancel(){
            this.cur = '';
        }
    }
});
//1.将数据循环到页面上，
//2.敲回车时添加新数据，需要加isSelected属性，
//3.删除功能
//4.计算一下当前没被选中的个数