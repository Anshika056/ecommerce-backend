const Product = require("../models/productSchema");
exports.uploadProduct=async(req,res)=>{
    try{

    const newProduct= {
        name: req.body.name,
        slug: req.body.slug,
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

exports.getProduct=async(req,res)=>{

    const productfind =await Product.find({});
    if(productfind){
    res.send(productfind)
    }
    else
    {
        res.send("product not found")
    }

}

exports.deleteProduct=async(req,res)=>{
    try
    {
        const {id}=req.params
        const productdelete = await product.findByIdAndDelete(id);
        if(productdelete)
        {
            res.send("deleted")
        }
        else
        {
            res.send("product not found")
        }
        

    }
    catch(err)
    {
        console.log(err)
        res.send("err")
    }
    
}