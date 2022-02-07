const User = require("../models/userSchema");
require("../database/connect");
const CryptoJS=require("crypto-js");

//update user
exports.update = async (req,res) =>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString();
      }
    try{
      const updateduser  = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body,}
       , { new: true }
       ); 
      if(updateduser){
      res.status(200).json(updateduser);
      console.log(updateduser);
      }
    }
    catch(err){
       res.status(400).json(err);
       console.log(err);
    }   

}


//delete the user 
exports.deleteuser = async(req,res)=>{
  try{
  const deleteduser = await User.findByIdAndDelete(req.params.id);
  if(deleteduser){
    res.status(200).json("user has been deleted");
    console.log(deleteduser);
  }
}catch(err){
  res.status(400).json(err);
  console.log(err);
}
}


//get user by id
exports.getuserbyid = async (req,res)=>{
  try{
    const getuser = await User.findById(req.params.id);
    if(getuser){
      const{password,...others} = getuser._doc;
      res.status(200).json(others);
    }

  }catch(err){
      res.status(400).json(err);
      console.log(err);
  }
}


//get all users
exports.getusers = async (req,res)=>{
  const query = req.query.new;                                  //setting query of getting new users
  try {
    const users = query                                         //if there is any query then the down conditions will run
      ? await User.find().sort({ _id: -1 }).limit(5)           //if the user wants only new user in db we set limit and sort in descending order
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}