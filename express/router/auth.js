const express = require('express');
const router = express.Router();
const { signup, signin} = require('../controllers/user');

require("../database/connect");
const User = require("../models/userSchema");

router.post('/signup', signup);
router.post('/signin', signin);
 

   
module.exports = router;