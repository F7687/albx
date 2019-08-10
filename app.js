const express=require('express');
const app=express();
const router=require('./router');
const bodyParser=require('body-parser');
const queryString=require('querystring');
const session=require('express-session');
app.listen(7687,()=>{
  console.log('http://127.0.0.1:7687 is running....');
});
//处理静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));
//设置模板引擎
app.set('view engine','ejs');
//express 使用session中间件 默认不开启session
app.use(session({
  //加盐
  secret:'kram7687',//相当于一个加密密钥  可以是任意值
  resave:false,//强制session保存到session store 中，不管session有没有更新 都强制保存
  saveUninitialized:false//强制没有‘初始化’的session保存到storage中
}))
//添加全局的中间件  每次请求都会经过这个中间件
app.use(function(req,res,next){
  //考虑不用登陆的情况
  //1登陆页面，2三个主页面，3已经登陆
 // console.log(req,session);
  if(req.session&&req.session.isLogin=='true'||req.url=='/admin/login'||req.url.indexOf('/admin')==-1){
    next();
  }else{
    //重定向
    res.redirect('/admin/login');
  }
})


/*
app.use(function(req,res,next){
  //考虑不用登陆的情况  三个：
  //1登陆也
  //2三个主页面
  //3已经有登陆状态
  console.log(req.session);
  if(req.session&&req.session.isLogin=='true'||req.url=='/admin/login'||req.url.indexOf('/admin')==-1){
    next();
  }else{
    //redirect 实现重定向
    res.redirect('/admin/login');
  }
})

**/


/**
  * app.use(function(req,res,next){
  var mycook=req.headers.cookie;
  console.log(mycook);
  var obj=queryString.parse(mycook);
  console.log(obj);
  
  if(obj.isLogin&&obj.isLogin=='true'||req.url=='/admin/login'||req.url.indexOf('/admin')==-1){
    console.log('******************');
    next();
  }else{
    //redirect 实现重定向
    // res.writeHead(301,{
    //   'location':'/admin/login'
    // });
    //res.end();
    console.log('123132123')
    res.redirect('/admin/login')
  }
})
  */


app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
