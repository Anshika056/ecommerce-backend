const express = require('express');
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("../database/connect");

exports.signup = async (req,res) => {                  //to get the data(The data sent to the server with POST is stored in the request body of the HTTP request:)
    const {name, email , phone , password, confirmpassword } = req.body; //object destructing
   
    if(!name|| !email || !phone || !password || !confirmpassword){       // to check if all details are filled
     return res.status(422).json({error:"Enter all details"});
    }
   
    try{
         const userexists = await User.findOne({email:email})    // check if email already exists in database
                                   
           if(userexists){
                 return res.status(422).json({error:"user already exists"});
             }else if(password != confirmpassword){
                 return res.status.json({error:"password are not same"});
             }
     
          const user = new User({name, email , phone , password, confirmpassword});        // new data filled will be saved in user
         
          const signup = await user.save();
         if(signup){
           res.status(201).json({message:"Registation sucessful"});                     // if data is saved to the  mongo then this will happen
         }
   
       }catch (err){
         console.log(err);
       }
    };
   
exports.signin = async (req,res) => {
       
        try{
           let token;
          const {email , password} = req.body;             //object destruction
      
          if(!email || !password){
            return res.status(400).json({error:"please fill the details"});
          }
            const signinuser = await User.findOne({email:email});
           // console.log(loginuser);
      
            if(signinuser){
              const loginpass = await bcrypt.compare(password, signinuser.password);
      
               token = await signinuser.generateAuthToken();
              //console.log(token);
      
              if(!loginpass)
              {
                res.status(400).json({error:"Invalid password"});
              }
              else{
                res.json({ message:"user login sucessfull"});
                }}
              else{
               res.status(400).json({error:"Invaild details"})
              }
                   
           
      
        }
        catch(err){
           console.log(err);
        }
      };
      