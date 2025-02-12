const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello, world!\n')
});

server.listen(3001, () =>{
    console.log('Server running at http://localhost:3000/')
})