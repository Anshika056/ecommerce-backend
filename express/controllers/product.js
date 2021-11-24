const Product = require("../models/productSchema");
exports.uploadProduct=async(req,res)=>{
    try{

    const newProduct= {
        name: req.body.name,
        slug:req.body.slug,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        categories: req.body.categories
    }
    // console.log(newProduct)

    const product = new Product(newProduct);          //create a product using productschema
    console.log(product)
    const prod = await product.save();
    console.log(prod);

    if(prod){
        res.status(200).json({message:"added the product"});
    }
    else{
        res.status(400).json({error:"error"});
    }
      


}catch(err){
    console.log(err)
    res.status(400).json({err});
}

}