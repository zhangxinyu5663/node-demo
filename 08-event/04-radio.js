#!/usr/bin/node

//将EventEmitter类中的方法复制到radio类中
const EventEmitter=require('events').EventEmitter;
//const util=require('util');

function Radio(station){
 // EventEmitter.call(this);
  var self=this;

  for(var m in EventEmitter.prototype){
    this[m]=EventEmitter.prototype[m];
  }
  global.setTimeout(()=>{
    self.emit('play',station);
  },0);
  global.setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}
//util.inherits(Radio,EventEmitter);
module.exports=Radio;
