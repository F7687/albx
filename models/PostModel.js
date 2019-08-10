const conn=require('../utils/mysql');
exports.getAllPost=(obj,callback)=>{
  console.log('this is obj');
  console.log(obj);
  //创建sql语句查询数据
  sql=`select posts.*,users.nickname,categories.name
        from posts 
        join users on posts.user_id=users.id
        join categories on posts.category_id=categories.id
        where 1=1 `
  if(obj.cate&&obj.cate!='all'){//没有传递分类数据
    sql += ` and category_id = ${obj.cate}`
  }
  if(obj.status&&obj.status!='all'){
    sql += ` and posts.status ='${obj.status}'`
  }
  sql+=`order by id desc
    limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`
  
  conn.query(sql,(err,result)=>{
    if(err){

      callback(err);
    }else{
      sql=`select count(*) as cnt
      from posts
      join users on posts.user_id=users.id
      join categories on posts.category_id=categories.id
      where 1=1`
      if(obj.cate&&obj.cate!='all'){//没有传递分类数据
        sql += ` and category_id = ${obj.cate}`
      }
      if(obj.status&&obj.status!='all'){
        sql += ` and posts.status ='${obj.status}'`
      }
      conn.query(sql,(err2,res2)=>{
        if(err2){
          callback(err);
        }else{
          callback(null,{data:result,total:res2[0].cnt});
        }
      })
    }
   
  })
}
exports.addPost=(obj,callback)=>{
  let sql=`insert into posts set ?`
  conn.query(sql,obj,(err,results)=>{
    if(err){
      callback(err);
    }else{
      callback(null);
    }
  })
}
// exports.addPost=(obj,callback)=>{
//   let sql=`insert into posts values(null,'${obj.slug}','${obj.title}','${obj.feature}','${obj.created}','${obj.content}','${obj.views}','${obj.likes}','${obj.status}','${obj.user_id}','${obj.category}')`;
//   conn.query(sql,(err,results)=>{
//     if(err){
//       callback(err)
//     }else{
//       callback(null);
//     }
//   })
// }