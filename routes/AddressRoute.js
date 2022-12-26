import express from "express";
import {
    getAddress,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress
} from "../controllers/Address.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/addresses', getAddress);
router.get('/address/:id', getAddressById);
router.post('/address', createAddress);
router.patch('/address/:id', updateAddress);
router.delete('/address/:id', deleteAddress);

export default router;