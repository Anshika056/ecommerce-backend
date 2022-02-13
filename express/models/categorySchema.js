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
    parentId: {                           //to create a sub categories for categories
        type: String
    }
},
{timestamps: true});


const Category = new mongoose.model('Category', categoryschema);        //new collection created based on schema
module.exports = Category;