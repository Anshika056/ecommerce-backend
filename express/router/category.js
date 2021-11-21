const express = require('express');
const router = express.Router();
const Category = require("../models/categorySchema");
const slugify = require('slugify');

router.post("/category/create",async (req,res) => {

    try{
    const newcategory = {
        name: req.body.name,
        slug: slugify(req.body.name)
     } 

     if(req.body.parentId){
         newcategory.parentId = req.body.parentId;
     }

     const category = new Category(newcategory);
     //console.log(category);
     //console.log(newcategory);
     
     const cat = await category.save();

     if(cat){
          return res.status(201).json({message:'category added'});
      }
     else(error) => {
         return res.status(400).json({error:"already exists"});
    }
}
catch(err){
    res.status(400).json({error:'something went wrong'})
}
 });

module.exports = router;