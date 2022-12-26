import express from "express";
import {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
} from "../controllers/Items.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/items', getItems);
router.get('/item/:id', getItemById);
router.post('/item', createItem);
router.patch('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;