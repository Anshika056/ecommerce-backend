const express = require('express');
const router = express.Router();
const { addCart,removeToCart} = require('../controllers/cart');
//const {adminmiddleware}=require("../middleware/index.js")



 router.post("/cart/add",addCart);
 router.delete("/cart/remove/:id",removeToCart)


module.exports = router;