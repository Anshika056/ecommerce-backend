const Cart = require("../models/cartSchema");
require("../database/connect");;
const User = require("../models/userSchema");
const Product = require("../models/productSchema");

//add cart
exports.addCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const isValiProduct = await Product.findById(req.body.productId);
    if (isValiProduct) {
        // console.log("ok");
      const data = await newCart.save();
      if (data) {
        res.status(200).json({data})
      } else {
        res.status(400).json("invalid product added");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("something is wrong");
  }
};

//update cart
exports.updatecart = async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  };

//get cart
exports.getcart = async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.id });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  };

//delete cart
exports.removeToCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete(req.params.id);

    if (data) {
      res.status(200).json("removed from cart");
    } else {
      res.status(400).json("something wrong");
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};
