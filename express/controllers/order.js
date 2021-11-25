const Order=require("../models/orderSchema")
const User=require("../models/userSchema")
//const Product = require("../models/productSchema");
exports.addOrder=async(req,res)=>{
    try{
        const{user_id,orders}=req.body
        const isValidUser=await User.findById(user_id)
        if(isValidUser)
        {
            const newOrder=new Order(req.body)
            const ordered = await newOrder.save()
            if(ordered)
            {
                res.send("order successfull")
            }
            else{
                res.send("something wrong")
            }

        }
        else
        {
            res.send("invalid user")
        }



    }
    catch(err)
    {
        console.log(err)
        res.send("something is wrong")
    }
    

}  

exports.cancleOrder=async(req,res)=>{
    try{
        const data=await Order.findByIdAndDelete(req.params.id)
        if(data)
        {
            res.send("order removed")
        }
        else
        {
            res.send("order not found")

        }

    }
    catch(err)
    {
        console.log(err)
        res.send("something is wrong")
    }

}