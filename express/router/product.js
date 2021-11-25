const express = require('express');
const router=require("express").Router()
const {uploadProduct , getProduct}=require("../controllers/product");
const {adminmiddleware}=require("../middleware/index.js")
require("../database/connect");

router.post("/product/upload",adminmiddleware,uploadProduct);  
router.get("/product/get",getProduct);

module.exports = router;