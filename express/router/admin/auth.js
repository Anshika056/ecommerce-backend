const express = require('express');
const router = express.Router();
const { signup, signin} = require('../../controllers/admin/user');

require("../../database/connect");
const User = require("../../models/userSchema");

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
 

   
module.exports = router;