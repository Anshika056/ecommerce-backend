const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
//const bodyParser=require('body-parser');

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

const userroutes = (require("./router/auth"));
require("./database/connect");                                  // linking the database to app 
app.use(express.json());                                        //to understand the json format in connect(middleaware) converts the data into the object
//app.use(bodyParser.json());
const User = require('./models/userSchema');                     // import mongoose model

//app.use(require("./router/auth"));                              //
app.use('/api',userroutes);                                                                      


app.get("/",(req, res) =>{                                     //get the the response from the server(request data )
    res.send("hello world")                                   //sending response to server to show
});

app.listen(PORT,() => {
    console.log(`server running at : http://localhost:${PORT}/`)
});