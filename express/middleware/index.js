const jwt = require("jsonwebtoken");

const verifytoken = (req,res,next)=>{
 const authtoken = req.headers.authorization
 try{
 if(authtoken){
  console.log("bts");
        const verifieduser = jwt.verify(authtoken,process.env.SECRET_KEY,(err,user)=>{
          if(err){
            res.status(403).json("Token is not valid!");
          }
           req.user = user;                        //will check if the user requested is similar to the user got
           next();
        })
 }
 }catch(err){
  res.status(400).json("token not defined!")
 }
}

const verifyuserandauth = (req,res,next) =>{
   verifytoken(req,res,()=>{
    console.log("sk");
     if(req.user.id === req.params.id || req.user.isadmin){
       next();
     }else{
       res.status(401).json("you are not allowed to do anything to other's account");
     }
   })

}

const verifyadminandauth =(req,res,next) =>{
  verifytoken(req,res,()=>{
    if (req.user.isadmin) {
      console.log("uijhg");
      next();
    } else {
      res.status(403).json("only admin are allowed!");
  }
});
}

module.exports = {verifytoken,verifyuserandauth,verifyadminandauth};