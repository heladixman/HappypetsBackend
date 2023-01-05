import express from "express";
import {
    getItems,
    getItemsTypePets,
    getItemsTypeProduct,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    countItemsTypePets,
    dashboardAdminData
} from "../controllers/Items.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/items', getItems);
router.get('/items/pets', getItemsTypePets);
router.get('/items/product', getItemsTypeProduct);
router.get('/items/totalpets', countItemsTypePets);
router.get('/dashboard/dataadmin', dashboardAdminData);
router.get('/item/:id', getItemById);
router.post('/item', createItem);
router.patch('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;