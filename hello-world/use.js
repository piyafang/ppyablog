 var express = require('express');
 var http = require('http');
 var app = express();


//方法一
 // app.use('/',function(request, response, next) {
 //     response.writeHead(200, { "Content-Type": "text/plain" });
 //     response.end("Welcome to the homepage!\n");
 // });
 //
 // app.use('./about',function(request, response, next) {
 //     response.writeHead(200, { "Content-Type": "text/plain" });
 //    response.end("welcome to about page!")
 // });
 //
 // app.use(function(request, response) {
 //   response.writeHead(404, { "Content-Type": "text/plain" });
 //   response.end("404 error!\n");
 // });

//方法二
app.all("*",function(request,response,next){
  response.writeHead(200,{"Content-Type":"text/plain"});
  next();
})

app.get("/",function(request,response){
  response.end("welcome to homepage");
})
app.get("/about",function(request,response){
  response.end("welcome to about page");
})
app.get("*",function(request,response){
  response.end("404");
})

 http.createServer(app).listen(8999);
