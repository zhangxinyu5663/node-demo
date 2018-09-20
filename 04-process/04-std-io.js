#!/usr/bin/node

const msg=['name','email','qq','mobile'];
var me={};
var i=0;
console.log(msg[i]+':');
process.stdin.on('data',(data)=>{

    //console.log(data.slice(0,data.length-1).toString('utf8'));
    me[msg[i]]=data.slice(0,data.length-1).toString('utf8');
    i++;
    if(i>3){
     // console.log(me);
     // process.exit();
     console.log('请输入ctrl+d退出输入，输出me对象');
    }else{
      console.log(msg[i]+':');
    }
});

process.stdin.on('end',()=>{
  console.log(me);
});

