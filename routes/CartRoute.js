import express from "express";
import {
    getUserCart,
    getUserCartById,
    createUserCart,
    updateUserCart,
    deleteUserCart
} from "../controllers/Cart.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/carts',  getUserCart);
router.get('/cart/:id',  getUserCartById);
router.post('/cart',  createUserCart);
router.patch('/cart/:id',  updateUserCart);
router.delete('/cart/:id',  deleteUserCart);

export default router;