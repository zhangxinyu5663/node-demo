#!/usr/bin/node

var time;
var timerID;
function Bomb(){
  this.message="Bomb";
}
Bomb.prototype.explode=function(){
  console.log(this.message);
}
// 自己规定时间
/*
console.log('请输入你要设定的时间(单位:ms):');
process.stdin.on('data',(data)=>{
  time=data;
});
var b=new Bomb();
process.stdin.on('end',()=>{ 
  timerID=setTimeout(b.explode.bind(b),time);
});
*/
//clearTimeout(timerID);


var b=new Bomb();
timerID=setTimeout(b.explode.bind(b),3000); //爆炸时间写死

//clearTimeout(timerID);



