#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter();

emitter.on('hello',()=>{  //事件响应
  console.log('hello event');
});
emitter.on('bye',()=>{
  console.log('bye event');
  process.exit();
});
//hello和bye等事件是自己定义，该事件可有多个订阅者，一旦触发，所有的订阅者都会同时执行
emitter.on('hello',()=>{
  console.log('HELLO EVENT');
})

console.log(emitter.listeners('hello'));  //查看有几个订阅者
console.log(emitter.listeners('bye'));
global.setInterval(()=>{
  emitter.emit('hello'); //事件触发
},1000);
global.setTimeout(()=>{
  emitter.emit('bye');
},5000);
