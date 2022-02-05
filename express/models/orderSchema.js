const mongoose=require("mongoose")
const { ObjectId } = mongoose.Schema

const orderSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    products:[{
        productId:{
            type: ObjectId,
            ref: "Product"
        },
        quantity:{
            type:Number,
            default:1
        }
    }],
    amount:{
        type:String,
        required:true
    },
  address:{
       type: Object,
       required: true 
    },
    status:{
     type: String, 
     default: "pending"
     },
},{timestamps:true});

const Order =  mongoose.model("order",orderSchema)
module.exports= Order;
//module.exports=mongoose.model("order",orderSchema);