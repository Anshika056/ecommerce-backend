const mongoose = require("mongoose");             //schema for signup 

const UserSchema = new mongoose.Schema({         //schema based on which data will be needed in mongo documents
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    confirmpassword: {
        type:String,
        required: true
    }
})

const User = new mongoose.model('USER',UserSchema);      // a model which is used in front part (add the data in userschema colllection)

module.exports = User;