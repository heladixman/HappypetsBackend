import express from "express";
import {
    getOrderDetail,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
} from "../controllers/OrderDetail.js";
import { verifyUser, } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/orderdetails', getOrderDetail);
router.get('/orderdetail/:id', getOrderDetailById);
router.post('/orderdetail', createOrderDetail);
router.patch('/orderdetail/:id', updateOrderDetail);
router.delete('/orderdetail/:id', deleteOrderDetail);

export default router;