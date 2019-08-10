$(function(){
  //获取路由名称
  
  let menuPost=$('#menu-posts');
  let menuSettings=$('#menu-settings');
  let routerName=itcast.getRouterName(location.href);
  if(routerName=='post'||routerName=='post-add'||routerName=='categories'){
    //展开
    menuPost.addClass('in').attr('aria-expanded',true);
    menuPost.parent().find('.collapsed').removeClass('collapsed');
  }
  if(routerName=='nav-menus'||routerName=='slides'||routerName=='setings'){
    menuSettings.addClass('in').attr('aria-expanded',true);
  }
  $('#'+routerName).addClass('active');
})