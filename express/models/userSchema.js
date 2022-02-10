const mongoose = require("mongoose");             //schema for signup 
const validator=require("validator");
const UserSchema = new mongoose.Schema({         //schema based on which data will be needed in mongo documents
    username: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20,
        lowercase: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: (value) => {                             //validation the email
            if (!validator.isEmail(value)) {
              throw new Error("Invalid Email Address");
            }
          },
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    isAdmin: {
         type:Boolean,
         default:false,
    },
},{timestamps: true});


//generate the token
// UserSchema.methods.generateAuthToken = async function(){
//     try{
//          let token = jwt.sign({_id: this._id},process.env.SECRET_KEY,{expiresIn: '1d'});   //generation of token 
//          await this.save();
//          return token;
//     }catch (err){
//         console.log(err);
//     }
// }


const User = new mongoose.model('USER', UserSchema);      // a model which is used in front part (add the data in userschema colllection)
                                                          
module.exports = User;

