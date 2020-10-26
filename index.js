var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    var obj ={
        data: 'Hello World'
    };
    res.end(JSON.stringify(obj));
 });

 server.listen(3000, '127.0.0.1');
 console.log('Отслеживаем порт 3000');