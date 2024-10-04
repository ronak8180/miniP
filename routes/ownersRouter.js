const express=require('express');
const router=express.Router();
const ownerModel=require("../models/owners-models");





   
 router.get("/",function(req,res)
{
    res.send("hey  is");
})


if(process.env.NODE_ENV==="development"){
    router.post("/create",async function(req,res){
        let owners= await ownerModel.find();
        if(owners.length>0)
        { 
            return res
            .status(503)
            .send("you dont have premission to CREATE");
    
        }
      

        let { fullname , email , password }=req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,

        });

         res
         .status(201)
         .send(createdOwner);s
    })

}

router.get("/admin",function(req,res){
    res.render("createproduct",{ success: '' });

})

module.exports = router;