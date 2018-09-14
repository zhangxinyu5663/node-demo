#!/usr/bin/node

const user={
  name:'zhangxinyu',
  age:20,
  qq:'1976871412'
};

const log=console.log;

//方法一：占位符
log('name:%s',user.name);
log('age:%d',user.age);
log('user:%j',user);

//方法二：拼接
log('qq: '+user.qq);

//方法三：模板字符串
log(`qq: ${user.qq}`);

//向标准错误流中输出信息
console.error('error message!');

