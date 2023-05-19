const express=require('express');
const router=express.Router();
const usercontroller=require('../controller/user.js');
router.post('/signup',usercontroller.adduser)
router.post('/login',usercontroller.loguser)










module.exports=router;