// var hello = "Hello World";
// console.log(hello);

var http = require('http');

http.createServer(function (req, res) {
    // if(req.url == '/todo' && req.method == 'get'){

    // }
    console.log(req.url);
    res.write('Hello');
    res.end();
}).listen(8080);
