const mysql=require('mysql');
let conn=mysql.createConnection({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'117',
  database:'bx'
});
module.exports=conn;