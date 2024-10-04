const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://ronak:ronak123@cluster0.42rmq.mongodb.net/miniP");

const ownerSchema=mongoose.Schema({
    fullname : {
        type:String,
        minlength:3,
        trim:true,
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[],
    },

    gstin: Number,
    picture:String,
});

module.exports=mongoose.model("owner",ownerSchema);