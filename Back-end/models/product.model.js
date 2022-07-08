var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var productSchema=new Schema({
    productId:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    name:{
        type:String,
        required:true,
        minlength:1,
        maxlength:1000
    },
    
    brand:{
        type:String
    },
    
    price:{
        type:String
    },

    colour:{
        type:String
    },
    highlights:{
        type:Array
    },
    description:{
        type:Object
    },
    quantity:{
        type:Number
    
    }
});

module.exports=mongoose.model('product',productSchema);