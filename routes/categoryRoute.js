import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categorycontroller,
  createCategoryController,
  deletecategorycontroller,
  singlecategorycontroller,
  updatecategorycontroller,
} from "../controllers/categoryController.js";

const router = express.Router();
//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updatecategorycontroller
);

//get all category
router.get("/get-category", categorycontroller);

//single category
router.get("/single-category/:slug", singlecategorycontroller);

//delet category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deletecategorycontroller
);

export default router;
