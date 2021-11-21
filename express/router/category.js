const express = require('express');
const router = express.Router();
const { addcategory , getcategory} = require('../controllers/category');
//const {adminmiddleware} = require('../middleware/index');
 require("../database/connect");

//router.post("/category/create",adminmiddleware,addcategory)
router.post("/category/create",addcategory);
router.get("/category/getcategory",getcategory);

module.exports = router;