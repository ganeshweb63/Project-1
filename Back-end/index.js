const express=require('express');
const env=require('dotenv');

env.config();

const dbServer=require('./services/db.service');
const productRoute=require('./routes/product.route');


dbServer.connectToDB(process.env.MONGO_URL);
const app=express();
app.use(express.json());
app.use(productRoute);

app.get('/healthcheck',(req,res)=>{
    res.send("<h1>App is Running...");
});

app.listen(process.env.PORT_NO,()=>{
    console.log("server started on " + process.env.PORT_NO);
});

