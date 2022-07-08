const productModel=require('../models/product.model');

exports.addProduct=(req,res)=>{
    const body=req.body;

    const document=new productModel(body);
    document.save((err,docs)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            if(docs._id){
                res.send("Successfully added one Product.");
                cosnole.log(docs);
            }
        }
    })
};


exports.getProduct=(req,res)=>{

    productModel.find({},(err,docs)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            if(docs){
                res.send(docs);
            }
        }
    })
}
