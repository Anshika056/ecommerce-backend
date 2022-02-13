const express = require('express');
const { neworder, updateorder, getorder , getall } = require('../controllers/order');
const { verifyadminandauth, verifyuserandauth, verifytoken } = require('../middleware');
const router = express.Router();



router.post("/add",verifyuserandauth,neworder);
router.get("/get/:id",verifyadminandauth,getorder)
router.get("/get",verifyadminandauth,getall)
router.put("/update/:id",verifyadminandauth,updateorder);

module.exports=router;