const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1 style="text-align: center;">Welcome to World of Leo Das Mamae</h1>');
});

server.listen(3003, () => console.log('Server is running at http://localhost:3003'));
