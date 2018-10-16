#!/usr/bin/node

//使用全局对象global，就不用再导出了
global.diameter=(r)=>2*r;
global.area=(r)=>Math.PI*r*r;

