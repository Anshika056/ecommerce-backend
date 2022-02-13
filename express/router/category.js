const express = require('express');
const { addcategory, getcategory,updatecat, deletecategory } = require('../controllers/category');
const { verifyadminandauth, verifyuserandauth, verifytoken } = require('../middleware');
const router = express.Router();
 require("../database/connect");

router.post("/category/create",verifyadminandauth,addcategory);

router.get("/category/get",verifyuserandauth,getcategory);

router.put("/category/update/:id",verifyadminandauth,updatecat);

router.delete("/category/delete/:id",verifyadminandauth,deletecategory);
module.exports = router;