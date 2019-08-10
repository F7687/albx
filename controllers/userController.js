//这个控制器完成与用户相关的业务操作
const userModel=require('../models/userModel');
exports.login=function(req,res){
  let obj=req.body;
  userModel.login(obj.email,(err,data)=>{
    //console.log(obj.email);
    //console.log(data);
    if(err)console.log('数据库查询错误。。。');
    if(data){
      if(obj.email==data.email&&obj.password==data.password){
        //session写入登陆状态
        req.session.isLogin='true';
        req.session.currentUser=data;
        res.json({code:200,msg:'登陆成功'});
      }else{
        res.json({code:400,msg:'密码错误，请输入正确的密码'});
      }
    }else{
      res.json({code:400,msg:'请输入正确的邮箱账号。。。'});
    }
  })

}



/*
const userModel=require('../models/userModel');
exports.login=(req,res)=>{
  console.log('this is userController')
  var obj=req.body;
  console.log(obj);
  userModel.login(obj.email,(err,data)=>{
    if(err)res.json({code:400,msg:'服务器异常'});
    // console.log(data);
    if(data){
      if(obj.password==data.password){
        //使用session写入登陆状态
        req.session.isLogin='true';
        req.session.currentUser=data;
        res.json({code:200,msg:'登陆成功~~'});
      }else{
        res.json({code:400,msg:'登陆失败，密码错误'});
      }
    }else{
      res.json({code:400,msg:'登陆失败，邮箱错误'});
    }
  })
}
*/

/*
const userModel=require('../models/userModel.js');
exports.login=(req,res)=>{
  //接收参数
  var obj=req.body;
  //业务处理 --调用数据模块
  console.log(obj);
  userModel.login(obj.email,(err,data)=>{
    console.log(data);
    if(err){
      res.json({code:400,msg:'服务器异常'});
    }else{
      //判断没有查询到结果集
      if(data){
        //判断密码是否正确
        if(data.password==obj.password){
          res.writeHead(200,{
              'Set-Cookie':'isLogin=true'
          });
          res.end(JSON.stringify({code:200,msg:'登陆成功'}));
          // res.json({code:200,msg:'登陆成功'});
        }else{
          res.json({code:400,msg:'密码输入错误'});
        }
      }else{
        res.json({code:400,msg:'邮箱输入错误'});
      }
    }
  })
  // userModel.login(参数，回调函数)

  //返回结果
}
*/
