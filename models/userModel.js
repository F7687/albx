//增加删除修改查询操作
const mysql=require('mysql');
let conn=mysql.createConnection({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'117',
  database:'bx'
});
exports.login=function(email,callback){
  let sql=`select * from users where email='${email}'`;
  // console.log(sql);
  conn.query(sql,(err,result)=>{
    //console.log('--------------')
  //  console.log(result);
    if(err)callback(err);
    callback(null,result[0]);
  });
}



/*
const mysql=require('mysql');
let conn=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'117',
  database:'bx'
});
exports.login=(email,callback)=>{
  //创建sql
  var sql=`select * from users where email='${email}'`;
  console.log(sql);
  conn.query(sql,(err,result)=>{
    if(err)callback(err);
    callback(null,result[0]);
  })
}
*/
/*
var mysql=require('mysql');
var conn=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'117',
  database:'bx'
})
exports.login=(email,callback)=>{
  //创建sql
  var sql=`select * from users where email='${email}'`;
  //调用sql
  conn.query(sql,(err,results)=>{
     //返回操作结果
     if(err){
       callback(err);
     }else{
       callback(null,results[0]);
     }
  })
 
}
*/