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
           console.log(user);
        })
 }
 }catch(err){
  return res.status(400).json(err);
 }
}

const verifyuserandauth = (req, res, next) => {
  verifytoken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};


const verifyadminandauth =  (req, res, next) => {
  verifytoken(req, res, () => {
    if (req.user.isAdmin){
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {verifytoken,verifyuserandauth,verifyadminandauth};