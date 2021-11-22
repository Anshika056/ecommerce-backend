const express = require('express');
const router = express.Router();
const { signup, signin} = require('../../controllers/admin/user');
const {adminmiddleware}=require("../../middleware/index.js")
require("../../database/connect");
const User = require("../../models/userSchema");

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
 

   
module.exports = router;