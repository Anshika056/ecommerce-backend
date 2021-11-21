const express = require('express');
const router = express.Router();
const { addcategory , getcategory} = require('../controllers/category');
//const {adminmiddleware} = require('../middleware/index');
 require("../database/connect");

//router.post("/category/create",adminmiddleware,addcategory)
router.post("/product/create",(req, res)=>{
    res.status(200).json({message:"hello!"});
});

module.exports = router;