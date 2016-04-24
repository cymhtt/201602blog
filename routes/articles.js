var express = require('express');
var models = require('../models');
var auth = require('../middleware/auth');
//路由的实例
var router = express.Router();
//注册
router.get('/add',auth.checkLogin, function(req, res, next) {
  res.render('article/add', { title: '发表文章' });
});

router.post('/add',auth.checkLogin,function(req,res,next){
  var article = req.body;
  //把当前登陆的用户的ID赋给user
  article.user = req.session.user._id;
  models.Article.create(article,function(err,doc){
    if(err){
      req.flash('error','文章发表失败!');
    }else{
      req.flash('success','文章发表成功');
      res.redirect('/');
    }
  });
});
module.exports = router;
