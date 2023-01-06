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
    dashboardAdminData,
    dashboardAdminData2
} from "../controllers/Items.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/items', getItems);
router.get('/items/pets', getItemsTypePets);
router.get('/items/product', getItemsTypeProduct);
router.get('/items/totalpets', countItemsTypePets);
router.get('/dashboard/dataadmin1', dashboardAdminData);
router.get('/dashboard/dataadmin2', dashboardAdminData2);
router.get('/item/:id', getItemById);
router.post('/item', createItem);
router.patch('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;