#!/usr/bin/node
/*
var pi=require('./02-export-var.js'); //.js可省略
console.log('pi:',pi);
console.dir(module);
*/

/*
var circle=require('./02-export-function');
const log=console.log;
log('直径：',circle(20).diameter());
log('周长：',circle(20).circumference());
log('面积：',circle(20).area());
*/

var circle=require('./02-export-object.js');
const log=console.log;
log('直径：',circle.diameter(20));
log('周长',circle.circumference(20));
log('面积',circle.area(20));
