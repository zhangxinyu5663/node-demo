#!/usr/bin/node

const Readable=require('stream').Readable,
      util=require('util');

var c='a'.charCodeAt(0); //返回指定位置字符的Unicode编码
var MyReadable=function(){
  Readable.call(this);
};
MyReadable.prototype._read=function(){
  this.push(String.fromCharCode(c++)); //可接受一个指定的Unicode值，然后返回一个字符串
  if(c>'z'.charCodeAt(0)){
    this.push(null);
  }
}
util.inherits(MyReadable,Readable);

var src=new MyReadable();
src.pipe(process.stdout);
