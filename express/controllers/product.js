const Product = require("../models/productSchema");
exports.uploadProduct=async(req,res)=>{
    try{

    const newProduct= {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        categories: req.body.categories
    }

    const product = new Product(newProduct);          //create a product using productschema
    const prod = await product.save();

    if(prod){
        res.status(200).json({message:"added the product"});
    }
    else{
        res.status(400).json({error:"something wrong"});
    }
      


}catch(err){
    console.log(err)
    res.status(400).json({err});
}

}