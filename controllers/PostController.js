const PostModel=require('../models/PostModel');
const moment=require('moment');
exports.getAllPost=(req,res)=>{
  var obj=req.query;
 // console.log(obj);
    PostModel.getAllPost(obj,(err,data)=>{
    //  console.log('data:--------');
     // console.log(data);
      if(err){
        res.json({code:400,msg:'数据库获取失败'});
      }else{
        //转换
        for(var i=0;i<data.length;i++){
          data[i].created=moment(data[i].created).format('YYYY-MM-DD HH:mm-ss');
        }
        res.json({code:200,msg:'数据查询成功',data:data})
      }
    })
}
exports.addPost=(req,res)=>{
  var obj=req.body;
  obj.views=0;
  obj.likes=0;
  // obj.category_id=obj.category;
  obj.user_id=req.session.currentUser.id;
  console.log(obj);
  PostModel.addPost(obj,(err)=>{
    if(err){
      console.log(err);
      res.json({code:400,msg:'数据新增失败'});
    }else{
      res.json({code:200,msg:'数据新增成功'});
    }
  })
}
// exports.addPost=(req,res)=>{
//   //接收参数
//   var obj=req.body;
//   //添加数据库需要的三个字段的数据
//   obj.views=0;
//   obj.likes=0;
//   obj.user_id=req.session.currentUser.id;
//   //调用模块中的方法
//   PostModel.addPost(obj,(err)=>{
//     if(err){
      
//       res.json({code:400,msg:'数据新增失败'});
//     }else{
//       res.json({code:200,msg:'数据新增成功'})
//     }
//   })
// }