// const formidable=require('formidable');
// var path=require('path');

// exports.unloadController=(req,res)=>{
//   //1创建上传对象
//   var form=new formidable.IncomingForm();
//   //2设置编码 
//   form.encoding='utf-8';
//   //3设置文件存储的目录
//   form.uploadDir=__dirname+'/../uploads'
//   //4设置保留文件扩展名
//   form.keepExtensions=true;
//   //5调用方法实现文件上传
//   form.parse(req,(err,fields,files)=>{
//     if(err){
//       res.json({code:400,msg:'文件上传失败'});
//     }else{
//       //console.log(fields);
//      // console.log(files);
//       var imgname=path.basename(files.img.path)
//       console.log(imgname);
//       res.json({code:200,msg:'文件上传成功',img:imgname});
//     }
//   })
// }

const formidable=require('formidable');
var path=require('path');
exports.uploadFile=(req,res)=>{
  //创建上传对象
  var form=new formidable.IncomingForm();
  //设置编码
  form.encoding='utf-8';
  // 设置文件存储的目录
  form.uploadDir=__dirname+'/../uploads';
  // 设置保留文件扩展名
  form.keepExtensions=true;
  //调用方法实现文件上传
  form.parse(req,(err,fields,files)=>{
    if(err){
      res.json({code:400,msg:'文件上传失败'});
    }else{
      var imgname=path.basename(files.img.path)
      res.json({code:200,msg:'文件上传成功',img:imgname});
    }
  })
}
