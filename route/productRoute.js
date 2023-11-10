import express from "express";
const router = express.Router();
import { isAdmin, requireSigning } from '../middleware/authMiddleware.js'
import {
     ProductCountController,
     ProductFilterController,
     ProductListController,
     brainTreePaymentController,
     braintreeTokenController,
     createProductController,
     deleteProductController,
     getProductController,
     getSingleProductController,
     productCategoryController,
     productPhotoController,
     realtedProductController,
     searchProductController,
     updateProductController
} from "../controller/productController.js";
import formidable from "express-formidable";

//create category
router.post("/create-product", requireSigning, isAdmin, formidable(), createProductController)
//update product
router.put("/update-product/:pid", requireSigning, isAdmin, formidable(), updateProductController)
//get products
router.get("/get-product", getProductController)
//single product
router.get("/get-product/:slug", getSingleProductController);

//get Photo
router.get("/product-photo/:pid", productPhotoController);
//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//filter rproduct
router.post("/filter-product", ProductFilterController);
//count Product
router.get("/product-count", ProductCountController);
// Product par pages
router.get("/product-list/:page", ProductListController);
//search product
router.get("/search/:keyword", searchProductController);
//similar product
router.get("/related-product/:pid/:cid", realtedProductController);
//category wise product
router.get("/product-category/:slug", productCategoryController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSigning, brainTreePaymentController);

export default router;