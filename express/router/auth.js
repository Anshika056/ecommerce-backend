const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {                      //read the stuff
res.send(`hello world`);
});
 
router.post('/signup',(req,res) => {               //to get the data
    console.log(req.body);                            //to write on postman body
    res.json({message:req.body});                  //to read the stuff from postman in json format 
  //  res.send("register page");
})

module.exports = router;