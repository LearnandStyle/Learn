## vue 学习第一天
- vm =>viewModel数据最终会被vm代理
- {{a}} 取值表达式，通过{{}}来进行取值，默认可以不写this，表达式 赋值运算 计算 三元表达式
尽量少写逻辑(computed)

### 指令：dom元素的行间属性 vue提供了内置的指令，必须是v-开头，后面的值均为变量
  - v-model(表达元素) 忽略value checked selected，将数据绑定在视图上，视图修改后会影响数据的变化
 
  - v-text 取代{{}} v-clock解决闪烁问题，后期都可以不采用，使用v-clock要加样式
  - v-once 绑定一次，数据变化不影响视图变化，写在不想刷新的标签上
  - v-html将html字符串转化为html
  - v-for 循环 （数组 对象 字符串 数字）
  ```
    <div v-for="value in/of 数组"></div>   
    <div v-for="(value,index) in/of 数组"></div> 
    ...
 ```  
### 事件 v-on  （@来取代）
- 绑定dom元素，函数需要定义在methods上，不能和data里面的内容重名
   this指向的是实例，不能使用箭头函数 事件源对象如果不写括号可以自动传入，否则只能手动传入$event

```
<div @事件名="fn"></div>
```