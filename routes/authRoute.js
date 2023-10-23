import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetpasswordController,
  updateProfileController,
  getOrderController,
  getAllOrderController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//routes object
const router = express.Router();

//routing
//register || method post
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forget password
router.post("/forget-password", forgetpasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user rout auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protect auth admin rout
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrderController);

//orders admin
router.get("/all-orders", requireSignIn, isAdmin, getAllOrderController);

//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
