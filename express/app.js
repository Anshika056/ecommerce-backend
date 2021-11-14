const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

require("./database/connect");                                  // linking the database to app 
app.use(express.json());                                        //to understand the json format in connect(middleaware) converts the data into the object
app.use(require("./router/auth"));                              //
const User = require('./models/UserSchema');


app.get("/",(req, res) =>{                                     //get the the response from the server
    res.send("hello world")                                   //sending response to server to show
});

app.listen(PORT,() => {
    console.log(`server running at : http://localhost:${PORT}/`)
});