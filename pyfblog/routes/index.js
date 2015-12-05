var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello' });
});
router.get('/iphone7', function(req, res, next) {
  res.render('index', { title: 'iphone7' });
});

module.exports = router;
