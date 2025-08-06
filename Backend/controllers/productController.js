import Product from '../models/product.js';
import { isAdmin } from './userController.js';

export async function createProducts(req, res) {

    if(!isAdmin(req)){

       res.status(403).json({
            message: "You are not authorized to create products"
        });
        return;
    }

    try {
         const productData = req.body;
    const product = new Product(productData);

    await product.save()

    res.json({
        message: "Product Created Successfully",
        product: product
    });
        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
   
}
export async function getProducts(req, res) {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error ,failed to fetch products",
            error: error.message
        });
    }
    }

export async function deleteProduct(req, res) {
    if(!isAdmin(req)){
        res.status(403).json({
            message: "You are not authorized to delete products"
        });
        return;
    }
    try {
        const productid = req.params.productID;

        if (productid != Product.productID){
            res.status(404).json({
                message: "Product Not Found"
            });
            return;
        } 
    

        await Product.deleteOne({
            productID: productid
        });
        res.json({
            message: "Product Deleted Successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error, failed to delete product",
            error: error.message
        });
    }
}

export async function updateProduct(req, res) {
    if(!isAdmin(req)){
        res.status(403).json({
            message: "You are not authorized to update products"
        });
        return;
    }
    try{
        const productid = req.params.productID;
        const updatedData = req.body;

        await Product.updateOne(
            {productID:productid},
            updatedData
        )
        res.json({
            message: "Product Updated Successfully"
        });
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error, failed to update product",
            error: error.message
        });
    }
}
export async function getProductById(req, res) {
    try {
        const productid = req.params.productID;
        const product = await Product.findOne(
            { 
                productID: productid 

            });

        if (product == null) {
            res.status(404).json({
                message: "Product Not Found"
            });
            return;
        }else{
            res.json(product)

        }

       
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error, failed to fetch product",
            error: error.message
        });
    }
}