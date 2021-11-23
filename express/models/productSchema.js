const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    } 
})

const Product = new mongoose.model("PRODUCT",productSchema)
module.exports= Product;