const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema


const cartschema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    productId:{
       type: ObjectId,
       ref: "Product"
    },
     quantity:{
        type:Number,
        default:1
    }

},{timestamps:true});

const Cart = new mongoose.model('CART',cartschema );        //new collection created based on schema
module.exports = Cart; 