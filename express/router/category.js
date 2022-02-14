const express = require('express');
const { addcategory, getcategory,updatecat, deletecategory } = require('../controllers/category');
const { verifyadminandauth, verifyuserandauth, verifytoken } = require('../middleware');
const router = express.Router();
 require("../database/connect");

router.post("/create",verifyadminandauth,addcategory);

router.get("/get",verifyuserandauth,getcategory);

router.put("/update/:id",verifyadminandauth,updatecat);

router.delete("/delete/:id",verifyadminandauth,deletecategory);
module.exports = router;