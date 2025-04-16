const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const name = parsedUrl.query.name;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (name) {
        res.end('Hello ' + name);
    } else {
        res.end('You should provide name parameter');
    }
});

server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});


