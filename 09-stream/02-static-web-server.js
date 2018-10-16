#!/usr/bin/node

const http=require('http'),
      path=require('path'),
      fs=require('fs');
var file;
http.createServer((req,res)=>{
  console.log(req.headers);//请求头
  console.log(req.url);//请求的url
  file=path.join(__dirname,req.url);
 /* 
  try{
    res.end(fs.readFileSync(file).toString('utf8'));
  }catch(err){
    res.end(err.message);
  }
  */
  if(fs.existsSync(file)){
   fs.createReadStream(file).pipe(res);
  }else{
    res.statusCode=404;
    res.end(req.url+' not exist!')
  }
}).listen(8080);
