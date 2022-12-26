import express from "express";
import {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
} from "../controllers/Order.js";
import { verifyUser, } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/orders', getOrders);
router.get('/order/:id', getOrderById);
router.post('/order', createOrder);
router.patch('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);

export default router;