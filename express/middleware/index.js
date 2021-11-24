const jwt = require("jsonwebtoken");
const User = require("../models/userSchema.js");
exports.adminmiddleware = async (req, res, next) => {
  console.log("colling")
  try {
    const userToken = req.headers.authorization;
    console.log(userToken);
    if (userToken == undefined) {
      res.send("token is required");
    } else {
      const decodeData = await jwt.verify(userToken, process.env.SECRET_KEY);
      const { _id } = decodeData;
      const user = await User.findById(_id);
      if (user) {
        const { role } = user;
        if (role == "admin") {
          next();
        } else {
          res.send("only admin can access this");
        }
      }
    }
  } catch (err) {
    res.send("something wrong");
  }
};
