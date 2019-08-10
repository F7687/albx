$(function(){
  $('.btnLogin').on('click',function(){
    let data=$('form').serialize();
    console.log(data);
    $.ajax({
      type:'post',
      url:'http://127.0.0.1:7687/login',
      data:data,
      dataType:'json',
      success:function(res){
        console.log(res);
        if(res.code==400){
          $('.alert-danger').html('<strong>'+res.msg+'</strong>');
          $('.alert-danger').show();
          setTimeout(()=>{
            $('.alert-danger').hide();
          },1500);       
        }else{
          alert(res.msg);
          location.href='/admin'
        }
      }
    })
  })
})

/*
$(function(){
  $('.btnLogin').on('click',function(){
    console.log($('form').serialize());
    $.ajax({
      type:'post',
      url:'http://127.0.0.1:7687/login',
      data:$('form').serialize(),
      dataType:'json',
      success:function(res){
        console.log(res);
        if(res.code==400){
          $('.alert-danger').html('<strong>'+res.msg+'</strong>');
          // $('.alert-danger>strong').text();
          $('.alert-danger').show();
        }else{
          $('.alert-danger').hide();
          alert(res.msg);
          location.href='/admin';
        }

      }
    })
  })
})*/
// $(function(){
//   $('.btnLogin').on('click',function(){
//     console.log($('form').serialize());
//     $.ajax({
//       type:'post',
//       url:'http://127.0.0.1:7687/login',
//       dataType:'json',
//       data:$('form').serialize(),
//       success:function(res){
//         console.log(res);
//        if(res.code==400){
//         $('.alert-danger>span').text(res.msg);
//         $('.alert-danger').fadeIn(500).delay(2000).fadeIn(500);
//        }else{
         
//          location.href='/admin';
//        }
//       }
//     })
//   })
  
// })