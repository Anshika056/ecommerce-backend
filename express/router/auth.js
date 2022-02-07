const express = require('express');
const router = express.Router();
const { signup, login} = require('../controllers/auth');
require("../database/connect");
const User = require("../models/userSchema");
const { check, validationResult } = require("express-validator");

//route to signup
router.post('/signup',
[
    check("username", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required and should be a valid email").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })  ],
   signup);

//route to sign in
router.post('/signin', [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
 login);
 

   
module.exports = router;