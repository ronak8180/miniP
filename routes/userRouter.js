const express=require("express");
const router=express.Router();
const isLoggedin=require("../middleweare/isLoggedin");
const { registerUser,loginUser ,logout }=require("../contrllers/authcontroller");




router.get("/",function(req,res){
    res.send("hey is ronak");
})



router.post("/register",registerUser);


router.post("/login",loginUser);
router.get("/logout",logout);

module.exports=router;