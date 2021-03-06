const User = require("../models/userSchema");
require("../database/connect");
const { check, validationResult } = require("express-validator");
const CryptoJS=require("crypto-js");
const jwt = require("jsonwebtoken");


//register a user
exports.signup =async (req,res) => {                  //to get the data(The data sent to the server with POST is stored in the request body of the HTTP request:)

 const errors = validationResult(req);

 if (!errors.isEmpty()) {
   return res.status(422).json({
     error: errors.array()[0].msg
   });
 }
 try{
    const user = new User({
           username:req.body.username,
           email:req.body.email, 
           phone:req.body.phone, 
           isAdmin:req.body.isAdmin,
           password:CryptoJS.AES.encrypt(                            //hashing the password using the crypto dep
                req.body.password,
                process.env.SECRET_KEY
              ).toString(),
    });                           
        const signup = await user.save();
            if(signup){
               res.status(201).json({useris:signup});                     // if data is saved to the  mongo then this will happen
              console.log(signup);  
              }
    }catch (err){
       res.status(400).json(err);
    }

 }


//login a user
exports.login= async (req,res)=>{
 const errors = validationResult(req);                        //validation of the req.body to check any empty field

if (!errors.isEmpty()) {
     return res.status(422).json({
     error: errors.array()[0].msg
       });
 }

  try{
      const finduser = await User.findOne({email:req.body.email});
         if(!finduser){
             res.status(400).json("wrong credinatials!")
        }
   //decrypt the encrypted password
        const hashedPassword = CryptoJS.AES.decrypt(         
            finduser.password,
            process.env.SECRET_KEY
          );

const userpassword = hashedPassword.toString(CryptoJS.enc.Utf8);       //convert it into the string to compare the password
if(userpassword != req.body.password){
    res.status(401).json("wrong info entered!");
}
   
const token = jwt.sign({                                        //generation of token
  id:finduser._id,
  isAdmin:finduser.isAdmin,
 },process.env.SECRET_KEY, {expiresIn:"1d"})


 
const { password, ...others } = finduser._doc;                  //send all details expect password in res

res.status(200).json({...others,token});


}catch(err){
    res.status(500).json({err});
}
}