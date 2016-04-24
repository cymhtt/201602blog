var express = require('express');
//路由的实例
var router = express.Router();

router.use(function(req,res,next){
  console.log('user use');
  next();
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//只要写后半段就可以了，不同path的全部内容
router.get('/add', function(req, res, next) {
  res.send('respond with a add');
});

module.exports = router;
