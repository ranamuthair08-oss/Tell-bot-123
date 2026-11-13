const http = require('http');
const port = Number(process.env.PORT) || 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
}).listen(port);

require('./mrmani-nopair.js');
