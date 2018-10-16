#!/usr/bin/node

function Dog(name,energy){
  var _listeners={};
  this.name=name;
  this.energy=energy;

  var timer=global.setInterval(()=>{
    if(this.energy>0){
      emit('bark');   //触发bark事件
      this.energy--;
    }else{
      global.clearInterval(timer);
    }
  },1000);
  this.on=(e,fn)=>{
    if(typeof(_listeners[e])==='undefined'){
       _listeners[e]=[];
    }
     _listeners[e].push(fn);
  }
  var self=this;
  function emit(e,arg){
     _listeners[e].forEach((fn)=>{
       fn.call(self,arg);
    })
  }
}
module.exports=Dog;


