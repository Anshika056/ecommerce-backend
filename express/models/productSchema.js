const mongoose=require("mongoose")
const { ObjectId } = mongoose.Schema;

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        maxlength: 32
    },
    slug:{
        type:String
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
    category:{
        // type:String,
        // required:true
      type: ObjectId,
      ref: "Category"
    },
     photo:{
         type:String
        },   

},{timestamps:true} );

const Product =  mongoose.model("product",productSchema)
module.exports= Product;