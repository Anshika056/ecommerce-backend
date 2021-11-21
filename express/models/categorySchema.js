const mongoose = require('mongoose');
const categoryschema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    parentId: {
        type: String
    }
},
{timestamps: true});


const Category = new mongoose.model('CATEGORY', categoryschema);        //new collection created based on schema
module.exports = Category;