'use strict';
const http = require('http');
const server = http.createServer((req,res) => {
    const now = new Date().getTime();
    res.setHeader('Set-Cookie',['last_access=' + now + ';','test=testdata;']);
    const last_access_time = req.headers.coolie ?  parseInt(req.headers.cookie.split('last_access=')[1]) : now;
    res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port,() => {
    console.info('Listenning on '+port);
});
