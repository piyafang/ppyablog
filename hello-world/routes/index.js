//router/router.js

module.exports = function(app){
  app.get('/',function(req,res){
    res.send('我是动态生成的网页');
  });
  app.get('/customer',function(req,res){
    res.send('customer page');
  });
  app.get('/admin',function(req,res){
    res.send('admin page');
  });
}
