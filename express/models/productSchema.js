const mongoose=require("mongoose")
const { ObjectId } = mongoose.Schema;

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        maxlength: 5,
        unique:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
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
         type:Buffer,
         contentType:String,
        },   

},{timestamps:true} );

const Product =  mongoose.model("product",productSchema)
module.exports= Product;