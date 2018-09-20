#!/usr/bin/node

var code=process.argv[2];

if(process.argv.length<3){
  console.error('请给出命令行参数！');
  process.exit(1);
}
//isNaN():若参数为数字则返回false，否则返回true
if(isNaN(Number(code))){
  console.error('命令行参数类型应该是数值！');
  process.exit(1);
}
console.log('退出码为：',code); //echo $?命令可查看退出码
process.exit(code);
