#!/usr/bin/node
//自己实现事件机制 不使用EventEmitter类
//const EventEmitter=require('events').EventEmitter;

function Radio(station){
 // EventEmitter.call(this);
  var _listeners={};
  var self=this;

  global.setTimeout(()=>{
    emit('play',station);
  },0);
  global.setTimeout(()=>{
    emit('stop',station);
  },5000);
  
  this.on=(e,fn)=>{
    if(typeof(_listeners[e])==="undefined"){
      _listeners[e]=[];
    }
    _listeners[e].push(fn);
  }

  function emit(e,arg){
    _listeners[e].forEach((fn)=>{
      fn.call(self,arg);
    })
  }
}
module.exports=Radio;
