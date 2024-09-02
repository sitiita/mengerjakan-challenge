http = require('http');
port = 8000;

server = http.createServer(function(req,res){
    res.end("Hello Word")
}).listen(port);

console.log(port);