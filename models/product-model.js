const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ronak:ronak123@cluster0.42rmq.mongodb.net/miniP");

const productSchema=mongoose.Schema({
    name : String,
    image:Buffer,
    price:Number,
    discount:{
        type:Number,
        default:0
    },

    bgcolor:String,
    panelcolor:String,
    textcolor:String
    

   

});

module.exports=mongoose.model("product",productSchema);