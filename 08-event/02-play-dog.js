#!/usr/bin/node

const Dog=require('./02-dog.js');
var taidi=new Dog('taidi',5);
var zangao=new Dog('zangao',10);
taidi.on('bark',onBark);
zangao.on('bark',onBark);

function onBark(){  //事件响应函数
  console.log('%s barked!energy:%d',this.name(),this.energy());
}
