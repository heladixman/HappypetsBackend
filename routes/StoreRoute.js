import express from "express";
import {
    getStores,
    getStoreById,
    createStore,
    updateStore,
    deleteStore
} from "../controllers/Store.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/stores', getStores);
router.get('/store/:id', getStoreById);
router.post('/store', createStore);
router.patch('/store/:id', updateStore);
router.delete('/store/:id', deleteStore);

export default router;