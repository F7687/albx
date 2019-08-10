$(function(){
   var pageNum=1;
  var pageSize=5;
  function init(search){
    $.ajax({
      url:'/getAllPost',
      type:'get',
      data:{
        pageNum:pageNum,
        pageSize:pageSize,
        ...search
      },
      success:function(res){
        console.log(res);
         let html=template('postListTemp',res.data);
         $('tbody').html(html);
         //生成分页结构
         setPagenation(Math.ceil(res.data.total/pageSize));
      }
    })
  }
  init()

  //分页功能
  function setPagenation(total){
    //初始化
    $('.pagination').bootstrapPaginator({
      //配置
      bootstrapMajorVersion:3,
      currentPage:pageNum,//当前页码
      totalPages:total,//总页数
      onPageClicked:function(event,originalEvent,type,page){
        //page为当前想获取数据的页码
        //修改全局pageNum
        pageNum=page;
        //调用加载数据的方法
        init();
      }
    })
  }
   //加载分类数据
   $.ajax({
     type:'get',
     url:'/getAllCate',
     dataType:'json',
     success:function(res){
      console.log(res);
       str='<option value="all">所有分类</option>';
       for(var i=0;i<res.data.length;i++){
         str+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
       }
       $('.cateSelector').html(str);
     }
   })

   //实现筛选功能
   $('.btn-search').on('click',function(){
     //收集数据
     var obj={
       cate:$('.cateSelector').val(),
       status:$('.statuSelector').val()
     }
     console.log(obj);
     init(obj);
   })
})