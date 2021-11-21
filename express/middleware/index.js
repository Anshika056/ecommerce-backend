// exports.adminmiddleware = (req,res,next) =>{
//     if(req.User.role !== admin){
//         return res.status(400).json({ message:"admins can only access"});
//     }
//     next();
// }

// exports.usermiddleware = (req,res,next) =>{
//     if(req.user.role !== user){
//         return res.status(400).json({ message:"user can only access"});
//     }
//     next();
// }