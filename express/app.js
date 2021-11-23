const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
//const bodyParser=require('body-parser');

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;
require("./database/connect");                                  // linking the database to app 

const userroutes = (require("./router/auth"));
const adminroutes = (require("./router/admin/auth"));
const categoryroutes = (require("./router/category"));
const productroutes = (require("./router/product"));
const cartroutes = (require("./router/cart"));

app.use(express.json());                                        //to understand the json format in connect(middleaware) converts the data into the object
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());

const User = require('./models/userSchema');                     // import mongoose model
const Category = require('./models/categorySchema');
const Products = require('./models/productSchema');
const Cart = require('./models/cartSchema');


app.use('/api',userroutes);                                       //use of api prefix    
app.use('/api',categoryroutes);                                                   
app.use('/api',adminroutes); 
app.use('/api',productroutes); 
app.use('/api',cartroutes); 


// app.get("/",(req, res) =>{                                     //get the the response from the server(request data )
//     res.send("hello world")                                   //sending response to server to show
// });

app.listen(PORT,() => {
    console.log(`server running at : http://localhost:${PORT}/`)
});