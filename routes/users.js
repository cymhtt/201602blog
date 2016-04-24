var express = require('express');
//路由的实例
var router = express.Router();
//注册
router.get('/reg', function(req, res, next) {
  res.render('index', { title: '注册' });
});
//只要写后半段就可以了，不同path的全部内容
//登陆
router.get('/login', function(req, res, next) {
  res.render('index', { title: '登陆' });
});

//退出
router.get('/logout', function(req, res, next) {
  res.render('index', { title: '退出' });
});

module.exports = router;
