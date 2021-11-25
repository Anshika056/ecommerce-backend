const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    user_id:String,
    orders:Array
})

const Order =  mongoose.model("order",orderSchema)
module.exports= Order;
//module.exports=mongoose.model("order",orderSchema);