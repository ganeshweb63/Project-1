const express=require('express');
const productController=require('../controllers/product.controller');

const router=express.Router();

router.post('/addProduct',productController.addProduct);
router.get('/getProduct',productController.getProduct);


module.exports=router;
