var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{});
});
router.post('/reg', function(req, res, next) {
  var user = req.body;
  new Model('User')(user).save(function(err,user){
    if(err){
      res.redirect('/users/reg');
    }else{
      res.redirect('/users/login');
    }
  })
});

router.get('/login', function(req, res, next) {
  res.render('user/login',{})
});
router.post('/login', function(req, res, next) {
    var user = req.body;
    new Model('User')(user).save(function(err,user){
      if(err){
        res.redirect('/users/login');
      }else{
        res.redirect('/articles/add')
      }
    })
});
router.get('/logout', function(req, res, next) {
  res.send('logout');
});

module.exports = router;
