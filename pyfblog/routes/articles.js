var express = require('express');
var router = express.Router();

/* 当访问/add的时候，渲染此模板*/
router.get('/add', function(req, res, next) {
  res.render('article/add',{title:'发表文章'});
});
router.get('/add', function(req, res, next) {
  res.send('发表文章');
});


module.exports = router;
