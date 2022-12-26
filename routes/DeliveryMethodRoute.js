import express from "express";
import {
    getDeliveryMethod,
    getDeliveryMethodById,
    createDeliveryMethod,
    updateDeliveryMethod,
    deleteDeliveryMethod
} from "../controllers/DeliveryMethod.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/deliveries', getDeliveryMethod);
router.get('/delivery/:id', getDeliveryMethodById);
router.post('/delivery', createDeliveryMethod);
router.patch('/delivery/:id', updateDeliveryMethod);
router.delete('/delivery/:id', deleteDeliveryMethod);

export default router;