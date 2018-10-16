#!/usr/bin/node

const stdin=process.stdin,
      stdout=process.stdout;
stdin.setEncoding('utf8');
/*
stdin.on('data',(data)=>{
  stdout.write(data);
});
*/

/*
stdin.push('hello world');
stdin.push(' hello');
stdin.push(null);
stdin.pipe(stdout);
*/

var c='a';
for(c='a'.charCodeAt(0);c<='z'.charCodeAt(0);c++){
  stdout.write(String.fromCharCode(c));
}
stdout.write('\n');

