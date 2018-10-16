#!/usr/bin/node

//管理事件
const Radio=require('./03-radio.js');

const station={
  freq:'106.7',
  name:'music radio'
};

var radio=new Radio(station);

radio.on('play',playone);
radio.on('play',playtwo);

radio.on('stop',(station)=>{
  console.log('%s FM %s closed',station.name,station.freq);
});

function playone(station){
  console.log('%s FM %s played ',station.name,station.freq);
  console.log('lalala...');
}
function playtwo(station){
  console.log(radio.eventNames()); //返回radio的事件名称
 // console.log(radio.listeners('play').length); //打印play事件的监听数量
  console.log(radio.listenerCount('play'));
  console.log(radio.listeners('play')); //打印play事件的监听者
}
//radio.removeListener('play',playtwo);  去除监听器，playtwo函数不会被调用
