const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1> Welcome to World of Leo Das Mamae </h1>')
});

server.listen(3002, () => console.log('server is runnning in http://localhost:3002'))