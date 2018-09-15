#!/usr/bin/node

const log=console.log;

log('arch:',process.arch); //CPU架构信息
log('platform:%s\n',process.platform); //操作系统版本信息
log('pid:',process.pid); //进程id信息
log('exePath:',process.execPath); //Node.js可执行文件的绝对路径信息

//process.stdin.resume();//暂停程序

log('node.js version:',process.version); //Node.js版本信息
log('uid:',process.getuid());//登录用户id信息
log('gid:',process.getgid()); //登录用户所属组id信息
log('path:%s\n',process.cwd());//当前脚本所在路径

log('rss:',process.memoryUsage().rss);
log('heapTotal:',process.memoryUsage().heapTotal);
log('heapUsed:',process.memoryUsage().heapUsed);
log('external:',process.memoryUsage().external);

log('env:',process.env);
log('LOGNAME:',process.env.LOGNAME);
