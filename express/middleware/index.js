const jwt = require("jsonwebtoken");

const verifytoken = (req,res,next)=>{
 const authtoken = req.headers.authorization
 try{
 if(authtoken){
  console.log("bts");
        const verifieduser = jwt.verify(authtoken,process.env.SECRET_KEY,(err,user)=>{
          if(err){
           return res.status(403).json("Token is not valid!");
          }
           req.user = user;                        //will check if the user requested is similar to the user got
           next();
           console.log(verifieduser);
        })
 }
 }catch(err){
  return res.status(400).json(err);
 }
}

const verifyuserandauth = (req,res,next) =>{
   verifytoken(req,res,()=>{
    console.log("sk");
    //const {role} = req.user.role  || (role ="admin")
      if(req.user.id === req.params.id){
      console.log("skjjj");
       next();
     }else{
       res.status(401).json("you are not allowed to do anything to other's account");
     }
   })
 
}

const verifyadminandauth = (req, res, next) => {
  verifytoken(req, res, () => {
    const {role} = req.user.role
    if (role="admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {verifytoken,verifyuserandauth,verifyadminandauth};