#!/usr/bin/node

const http=require('http');

const server=http.createServer();
server.listen(8080);
server.on('request',(req,res)=>{
  res.end('hello world');
});
