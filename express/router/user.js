const express = require('express');
const { update,deleteuser, getuserbyid, getusers } = require('../controllers/user');
const { verifyuserandauth ,verifytoken, verifyadminandauth } = require('../middleware/index');
const router = express.Router();
require("../database/connect");
const User = require("../models/userSchema");

//update the user
router.put("/update/:id", verifyuserandauth,update);


//delete the user
router.delete("/delete/:id",verifyuserandauth,deleteuser);

//get user 
router.get("/get/:id",verifyuserandauth,getuserbyid);

//get all users
router.get("/",verifyadminandauth,getusers);

module.exports = router;