const mongoose = require("mongoose")
const cartschema = new mongoose.Schema({
    user_id:String,
    product_id:String
})

const Cart = new mongoose.model('CART',cartschema );        //new collection created based on schema
module.exports = Cart; 