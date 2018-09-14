#!/usr/bin/node

//方法一(bad)
//var file=__dirname+'/view/data.html';

//方法二：
/*
var file;
switch(process.platform){
  case 'linux':
    file=__dirname+'/view/data.html';
    break;
  case 'win32':
    file=__dirname+'\\view\\data.html';
    break;
  default:
    file='error';
}
*/

//方法三：(best) 以后进行文件路径拼接都用此方法
var file;
const path=require('path');
file=path.join(__dirname,'view','data.html');

console.log(file);
