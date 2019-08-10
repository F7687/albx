const pagesController=require('./controllers/pagesController');
const userController=require('./controllers/userController');
const express=require('express');
const router=express.Router();
const PostController=require('./controllers/PostController');
const cateController=require('./controllers/cateController');
const uploadController=require('./controllers/uploadController')

//获取主页面
router.get('/',pagesController.getIndexPage)
  .get('/detail',(req,res)=>{
    pagesController.getDetailPage(req,res);
  })
  .get('/list',(req,res)=>{
    pagesController.getListPage(req,res);
  })

  //获取后台管理页面
  .get('/admin',(req,res)=>{
    pagesController.getAdminPage(req,res);
  })
  .get('/admin/categories',(req,res)=>{
    pagesController.getAdCategories(req,res);
  })

  .get('/admin/comments',pagesController.getAdComments)
  .get('/admin/nav-menus',pagesController.getAdNavMenus)
  .get('/admin/login',pagesController.getAdLogin)
  .get('/admin/password-reset',pagesController.getAdPwdReset)
  .get('/admin/post-add',pagesController.getAdPostAdd)
  .get('/admin/posts',pagesController.getAdPosts)
  .get('/admin/profile',pagesController.getAdProfile)
  .get('/admin/settings',pagesController.getAdSetting)
  .get('/admin/slides',pagesController.getAdSlides)
  .get('/admin/users',pagesController.getAdUsers)

  //业务处理
  // .post('/login',userController.login)
  // .post('/login',userController.login)
  .post('/login',userController.login)
  .get('/getAllPost',PostController.getAllPost)
  .get('/getAllCate',cateController.getAllCate)
  .post('/uploadFile',uploadController.uploadFile)
  .post('/addPost',PostController.addPost);

module.exports=router;