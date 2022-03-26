const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
//const bodyParser=require('body-parser');

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT || 5000;
require("./database/connect");                                  // linking the database to app 


const authroutes = (require("./router/auth"));
const userroutes = (require("./router/user"));
const categoryroutes = (require("./router/category"));
const productsroutes = (require("./router/product"));
const cartroutes = (require("./router/cart"));
const orderroutes = (require("./router/order"));
const paymentroutes = (require("./router/payment"));


app.use(express.json());                                        //to understand the json format in connect(middleaware) converts the data into the object
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());


const User = require('./models/userSchema');                     // import mongoose model
const Category = require('./models/categorySchema');
const Cart = require('./models/cartSchema');
const Order = require('./models/orderSchema');
const Product = require("./models/productSchema");


 
app.use('/api/users',userroutes);                                       //use of api prefix    
app.use('/api/category',categoryroutes);                                                   
app.use('/api/users',authroutes);  
app.use('/api/product',productsroutes); 
app.use('/api/cart',cartroutes); 
app.use('/api/order',orderroutes);
app.use('/api',paymentroutes);



app.listen(PORT,() => {
    console.log(`server running at : http://localhost:${PORT}/`)
});