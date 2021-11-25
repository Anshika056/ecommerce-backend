const Cart = require("../models/cartSchema");
require("../database/connect");;
const User = require("../models/userSchema");
const Product = require("../models/productSchema");
exports.addCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const isValidUser = await User.findById(req.body.user_id);
    const isValiProduct = await Product.findById(req.body.product_id);
    if (isValidUser && isValiProduct) {
      // res.send({isValidUser,isValiProduct})
      const data = await newCart.save();
      if (data) {
        res.send("added to cart");
      } else {
        res.send("invalid user");
      }
    }
  } catch (err) {
    console.log(err);
    res.send("something is wrong");
  }
};

exports.removeToCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete(req.params.id);

    if (data) {
      res.send("removed from cart");
    } else {
      res.send("something wrong");
    }
  } catch (err) {
    res.send("something wrong!");
  }
};
