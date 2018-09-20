#!/usr/bin/node

console.log('start...');
var count=0;
var timerID=setInterval(loop,500);
//法一：运行一定时间后退出

function loop(){
  console.log('I will loop forver');
}
setTimeout(()=>{
  clearInterval(timerID);
  console.log('end!');
},3000);

//法二：运行一定次数后退出
/*
function loop(){
  console.log('I will loop forver');
  count++;
  if(count==10){
    clearInterval(timerID);
    console.log('end!');
  }
}
*/

