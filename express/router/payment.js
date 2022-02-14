const express = require('express');
const { makepayment } = require('../controllers/stripe');
const { verifyuserandauth } = require('../middleware');
const router = express.Router();

router.post("/payment",verifyuserandauth,makepayment);


module.exports=router;