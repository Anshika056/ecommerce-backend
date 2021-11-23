const express = require('express');
const router = express.Router();
const { addCart} = require('../controllers/cart');
//const {adminmiddleware}=require("../middleware/index.js")
 require("../database/connect");

 router.post("/cart/add",addCart)


module.exports = router;