$(function(){
  //console.log('aahahha');
  // $('#feature').on('change',function(){
  //   // 1获取文件对象
  //   var myfile=document.querySelector('#feature').files[0];
  //   //2 创建formdata对象
  //   var formdata=new FormData();
  //   // 3在formdata中追加数据
  //   formdata.append('img',myfile);
  //   formdata.append('username','名字叫：hjhjkhkj');
  //   // 4发起ajax请求
  //   $.ajax({
  //     type:'post',
  //     url:'http://127.0.0.1:7687/uploadFile',
  //     data:formdata,
  //     contentType:false,//让ajax不要进行数据编码处理
  //     processData:false,//让ajax不要进行数据处理，Formdata已经处理好了
  //     dataType:'json',
  //     success:function(res){
  //       console.log(res);
  //       if(res.code==200){
  //         $('.thumbnail').attr('src','/uploads/'+res.img).show();
  //       }else{
  //         $('.alert-danger>span').text(res.msg).fadeIn(500).delay(3000).fadeOout(500)
  //       }
  //     }
  //   })
  // })
  $('#feature').on('change',function(){
    // 获取文件对象
    var myfile=document.querySelector('#feature').files[0];
    // 创建formdata对象
    var formdata=new FormData();
    // 在formdata中追加数据
    formdata.append('img',myfile);
    console.log(myfile);
    $.ajax({
      type:'post',
      url:'http://127.0.0.1:7687/uploadFile',
      data:formdata,
      contentType:false,
      processData:false,
      dataType:'json',
      success:function(res){
        console.log(res);
        if(res.code==200){
          $('.thumbnail').attr('src','/uploads/'+res.img).show();
          $('[name="feature"]').val(res.img)
        }else{
          $('.alert-danger').show();
        }
      }
    })
  })

  // 创建ckeditor富文本控件替代页面中的textarea
  CKEDITOR.replace('content');

  $('.btnsave').on('click',function(){
    CKEDITOR.instances.content.updateElement();
    var data=$('form').serialize();
    console.log(data);
    $.ajax({
      type:'post',
      url:'http://127.0.0.1:7687/addPost',
      data,
      dataType:'json',
      success:function(res){
        console.log(res);
      }
    })
  })
    //保存文件
    
  
  // //创建ckeditor富文本控件替换页面中的textarea
  // CKEDITOR.replace('content');
  // //保存文件
  // $('.btnsave').on('click',function(){
  //   // console.log(CKEDITOR.instances.content.getData());
  //   CKEDITOR.instances.content.updateElement();
  //   var data=$('form').serialize();
  //   console.log(data);
  //   $.ajax({
  //     type:'post',
  //     url:'/addPost',
  //     data:$('form').serialize(),
  //     dataType:'json',
  //     success:function(res){
  //         if(res.code == 200){
  //             // 提示
  //             // 跳转
  //             location.href = '/admin/posts'
  //         }else{
  //             console.log(res.msg)
  //         }
  //     }
  //   })
  // })


  $.ajax({
    type:'get',
    url:'/getAllCate',
    dataType:'json',
    success:function(res){
        console.log(res)
        // 生成分类下拉列表动态结构
        var str = '<option value="all">所有分类</option>'
        for(var i = 0; i< res.data.length;i++){
            str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
        }
        $('#category').html(str)
    }
  });
  

})