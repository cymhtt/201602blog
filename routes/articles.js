var express = require('express');
//路由的实例
var router = express.Router();
//注册
router.get('/post', function(req, res, next) {
  res.render('index', { title: '发表文章' });
});

module.exports = router;
