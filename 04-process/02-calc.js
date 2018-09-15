#!/usr/bin/node

/*
console.log('argv length:',process.argv.length);
console.log('0 argv:',process.argv[0]);
console.log('1 argv:',process.argv[1]);
*/

//查看所有参数
for(var i=0; i<process.argv.length;i++){
  console.log(`${i} argv:${process.argv[i]}`);
}

//console.log('%s=%d',process.argv[2],eval(process.argv[2]));
