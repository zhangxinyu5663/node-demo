#!/usr/bin/node

var count=0; //定义模块级变量 若想私有，应定义在函数作用域
function Num(){}
Num.prototype.add=()=>count++;
Num.prototype.getCount=()=>count;
module.exports=Num;


