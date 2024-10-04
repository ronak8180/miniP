
const userModel=require("../models/user-model");
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const { GenrateToken }=require("../utils/GenrateToken");






module.exports.registerUser =  async function (req,res) {
    try{
        let { email , password , fullname } = req.body;
        let user = await userModel.findOne({email: email});
        if (user) return res.status(401).send("you already have a account , please login");


        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt, async function (err,hash){
                if(err)
                     return res.send(err.message);
                else{
                    let user = await userModel.create({
                        email,
                        password : hash,
                        fullname,
                    });

                  //let token=jwt.sign({email,id: user._id},"ronakkk");
                  let token=GenrateToken(user);
                  res.cookie("token",token);
                  res.send("created successfully");
                }
                 
            });
        });
        
    }
    
    catch (err){
        res.send(err.message);
    }
};

module.exports.loginUser = async function (req,res){
    let { email , password }=req.body;

    let user = await userModel.findOne({email:email});
    if(!user){
        res.send("Email or password incorrect");
        return res.redirect("/");
    }   

    bcrypt.compare(password,user.password,function (err,result){
        if(result){
            let token = GenrateToken(user);
            res.cookie("token",token);
            res.redirect("/shop");
        }else{
            req.flash("error","Email or password incorrect");
            return res.redirect("/");
        }
    });
};

module.exports.logout = function (req,res){
    res.cookie("token",'');
    res.redirect("/");
}