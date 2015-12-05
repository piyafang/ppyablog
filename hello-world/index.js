//index.js

// var express = require('express');
// var app = express();
//
// //静态打开文件
// app.use(express.static(__dirname+'/public'));
//
// //动态生成网页
// app.get('/',function(req,res){
//   res.send('我是动态生成的网页');
// });
// app.get('/customer',function(req,res){
//   res.send('customer page');
// });
// app.get('/admin',function(req,res){
//   res.send('admin page');
// });
// app.listen(8080);


var express = require('express');
var app = express();
var routes = require('./routes')(app);
app.listen(8080);


//运行原理
// var http = require("http");
//
// var app = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello world!");
// });
//
// app.listen(8080, "localhost");
