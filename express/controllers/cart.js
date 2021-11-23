const Cart = require("../models/cartSchema");
require("../database/connect");

exports.addCart = (req,res) => {
      
    res.status(200).json({message:"cart"})
};