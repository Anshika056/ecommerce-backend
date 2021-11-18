const mongoose = require("mongoose");             //schema for signup 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({         //schema based on which data will be needed in mongo documents
    name: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
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
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default:'user'
    },
    tokens: [
        {
        token:{
            type:String,
            required: true
           }
        }
    ]
},{timestamps: true});

UserSchema.pre("save",async function(next){                   // to  bcrpty
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword,12);
    }
    next();
})

UserSchema.methods.generateAuthToken = async function(){
    try{
         let token = jwt.sign({_id: this._id},process.env.SECRET_KEY);
         this.tokens = this.tokens.concat({token:token});
         await this.save();
         return token;
    }catch (err){
        console.log(err);
    }
}


const User = new mongoose.model('USER', UserSchema);      // a model which is used in front part (add the data in userschema colllection)
                                                          
module.exports = User;

