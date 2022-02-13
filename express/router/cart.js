const express = require('express');
const router = express.Router();
const { addCart,removeToCart, updatecart, getcart} = require('../controllers/cart');
const {verifytoken,verifyuserandauth}= require("../middleware/index");


 router.post("/add",verifyuserandauth,addCart);
 router.get("/get/:id",verifyuserandauth,getcart);
 router.put("/update/:id",verifyuserandauth,updatecart);
 router.delete("/remove/:id",verifyuserandauth,removeToCart)


module.exports = router;