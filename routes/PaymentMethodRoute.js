import express from "express";
import {
    getPaymentMethod,
    getPaymentMethodById,
    createPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod
} from "../controllers/PaymentMethod.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/payments', getPaymentMethod);
router.get('/payment/:id', getPaymentMethodById);
router.post('/payment', createPaymentMethod);
router.patch('/payment/:id', updatePaymentMethod);
router.delete('/payment/:id', deletePaymentMethod);

export default router;