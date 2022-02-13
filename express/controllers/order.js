const Order = require("../models/orderSchema");

//create order
exports.neworder = async (req, res) => {
    const newOrder = new Order(req.body);
  
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  };


  //update order
  exports.updateorder = async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  };


//get order
exports.getorder = async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.id });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };

 //all orders 
exports.getall = async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };

//delete order
exports.deleteorder = async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }  