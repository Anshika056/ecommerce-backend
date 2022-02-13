const Product = require("../models/productSchema");


exports.createproduct = async (req,res)=>{
    try{
      
        const products =  new Product({
            name:req.body.name,
            quantity:req.body.quantity,
            price:req.body.price,
            category:req.body.category,
            desc:req.body.desc,
            
        })
        const productadd = await products.save();
       if(productadd){
           res.status(200).json(productadd);
       }
        
    }catch(err){
        res.status(400).send(err)
        console.log(err);
    }
}

//get productbyid
exports.getpro=async (req,res)=>{
try {
    const product = await Product.findById(req.params.id).populate("category");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}


//update product 
exports.updatepro = async (req,res)=>{
    try{
    const updatepro = await Product.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        { new:true }
        )
        res.status(200).json(updatepro);
    }catch(err){
        res.status(400).json(err)
    }
}

//get all product
exports.getproducts = async (req,res) =>{
    const newquery = req.query.new
     const catquery = req.query.category;
    try{
     let products;
     
     if(newquery){
         products = await Product.find().sort({createdAT:-1}).limit(5);
     }else if(catquery){
         products = await Product.find({
             category:{
                $in:[catquery]                            //will be sharing the id of the category as id is stored in db of cat
             }
         });    
     }
     else{
        products = await Product.find().populate("category");
       }
       res.status(200).json(products);
       console.log(products);

    }catch(err){
        res.status(400).json(err)
        console.log(err);
    }
}

//delete product
exports.deletepro =  async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };