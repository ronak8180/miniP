const express=require("express");
const isLoggedin = require("../middleweare/isLoggedin");
const cookieParser = require('cookie-parser');
const router= express.Router();

router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{ error });

})

router.get("/admin",(req, res)=>{
    res.render("admin");
})

router.get('/shop', (req, res) => {
    const products = [
        {
            name: "Product 1",
            bgcolor: "#ff0000",
            image: "image data"
        },
        // Add more products here
    ];
    res.render('shop', { products: products });
});

router.get("logout" , isLoggedin, function(req,res){
    res.render("logout");
    
    });


    

module.exports=router;