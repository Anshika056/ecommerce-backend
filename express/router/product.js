const express = require('express');
const router=require("express").Router()
const {uploadProduct}=require("../controllers/product");
const {adminmiddleware}=require("../middleware/index.js")
require("../database/connect");
router.post("/product/upload",adminmiddleware,uploadProduct);

module.exports = router;