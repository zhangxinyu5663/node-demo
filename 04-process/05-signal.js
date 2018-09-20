#!/usr/bin/node

console.log('进程的pid:',process.pid);
process.stdin.resume();
process.on('SIGINT',()=>{
  console.log('you have pressed ctrl+c,process end');
  process.exit();
});

process.on('SIGTSTP',()=>{
  console.log('you have pressed ctrl+z,process stop running');
});
