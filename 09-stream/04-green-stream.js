#!/usr/bin/node

const Writable=require('stream').Writable,
      util=require('util');
function GreenStream(){
  Writable.call(this);
}
util.inherits(GreenStream,Writable);
GreenStream.prototype._write=function(chunk,encode,cb){
  process.stdout.write('\033[1;32m'+chunk.slice(0,chunk.length-1)+'\033[1;37m'+'\n');
  cb();
}
var dst=new GreenStream();
process.stdin.pipe(dst);
