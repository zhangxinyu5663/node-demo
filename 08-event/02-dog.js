#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;

function Dog(name,energy){
  //var _name=name;   //定义两个私有变量
 // var _energy=energy;
  var self=this; //this指针不进行作用域传递，得软绑定(用that或this);
  EventEmitter.call(this);
  var timer=global.setInterval(()=>{
    if(energy>0){
      self.emit('bark');   //触发bark事件
      energy--;
    }else{
      global.clearInterval(timer);
    }
  },1000);
  this.name=()=>name;  //返回实例对象的名字
  this.energy=()=>energy; //返回实例对象的能量

}
Dog.prototype=EventEmitter.prototype;  //继承EventEmitter类,只能继承EventEmitter原型上的方法，要想也继承它构造函数中的方法，则需间接调用，即  EventEmitter.call(this);

/* 实现继承的另一种方法
const util=require('util');
util.inherits(Dog,EventEmitter);
*/
module.exports=Dog;  //导出Dog类
