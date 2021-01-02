const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world!\n');
})

server.listen(3000, () => {
    console.log('The server is listening on port 3000 now')
})