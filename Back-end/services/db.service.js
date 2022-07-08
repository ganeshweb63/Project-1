const mongoose=require('mongoose');

exports.connectToDB=(mongoURL)=>{
    mongoose.connect(mongoURL,err=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log("connected to DB");
        }
    })
}