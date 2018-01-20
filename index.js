'use strict';
const http = require('http');
const server = http.createServer((req,res) => {
    const now = new Date().getTime();
    res.setHeader('Set-Cookie',['last_access=' + now + ';','test=testdata;']);
    res.end('hi');
});
const port = 8000;
server.listen(port,() => {
    console.info('Listenning on '+port);
});
