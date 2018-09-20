#!/usr/bin/node

const pid=process.argv[2],
      sig=process.argv[3];
if(process.argv.length !=4 || isNaN( Number(pid) )){
  console.error('命令行参数错误');
  process.exit();
}

process.kill(pid,sig);

