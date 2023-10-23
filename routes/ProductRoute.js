import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductcontroller,
  deleteproductcontroller,
  getproductcontroller,
  getsingleproductcontroller,
  productFilterController,
  productcountcontroller,
  productListController,
  productphotocontroller,
  updateProductcontroller,
  searchProductController,
  relatedproductcontroller,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} from "../controllers/Productcontroller.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductcontroller
);

//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductcontroller
);

//get products
router.get("/get-product", getproductcontroller);

//single productss
router.get("/get-product/:slug", getsingleproductcontroller);

//get photo
router.get("/product-photo/:pid", productphotocontroller);

//delet product
router.delete("/delete-product/:pid", deleteproductcontroller);

//filter product
router.post("/product-filters", productFilterController);

//count products
router.get("/product-count", productcountcontroller);

//product get page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar project
router.get("/related-product/:pid/:cid", relatedproductcontroller);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payment route
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
