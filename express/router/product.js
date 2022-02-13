const express = require('express');
const { createproduct, getpro, updatepro, getproducts ,deletepro } = require('../controllers/product');
const { verifyuserandauth ,verifytoken, verifyadminandauth } = require('../middleware/index');
const router = express.Router();
require("../database/connect");


router.post("/add",verifyadminandauth,createproduct);

router.get("/get/:id",verifyuserandauth,getpro);

router.put("/update/:id",verifyadminandauth,updatepro);

router.get("/getall",getproducts);

router.delete("/delete",verifyadminandauth,deletepro);

module.exports=router;