const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://ronak:ronak123@cluster0.42rmq.mongodb.net/miniP");

const userSchema=mongoose.Schema({
    fullname : {
        type:String,
        minlength:3,
        trim:true,
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[],
    },

    
    orders:{
        type:Array,
        default:[],
    },

    contact: Number,
    picture:String,
});

module.exports=mongoose.model("user",userSchema);