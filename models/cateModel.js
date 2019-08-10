const conn=require('../utils/mysql')
exports.getAllCate=(callback)=>{
  //获取所有分类数据
  var sql=`select * from categories`
  conn.query(sql,(err,data)=>{
    if(err)callback(err);
    callback(null,data);
  })
}