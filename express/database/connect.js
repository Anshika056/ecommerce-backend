const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;                    // protected the url

mongoose.connect(DB,{
   // useNewUrlParser:true,
   // useCreateIndex: true,
   // useUnifiedTopology:true,
   // useFindAndModify: false
}).then(() => {                                        //connecting the database using moogoose which sends a promise
    console.log(`connection successfull`);
}).catch((err) => console.log(err));
 