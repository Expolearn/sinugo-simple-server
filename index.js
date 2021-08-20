const http = require('http');

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.write('Hello World');
    res.end();
}

if(req.url === '/expolearn/names'){
    res.write(JSON.stringify([`Joel, Murendeni, Tshifhiwa`]));
    res.end();
}

});

server.listen(3000);
console.log('Llistening to port 3000')