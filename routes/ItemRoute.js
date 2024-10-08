import express from "express";
import {
  getItems,
  getItemsTypePets,
  getItemsTypeProduct,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  dashboardAdminData,
  dashboardAdminData2,
  getItemsLastUploadAdmin,
  getTopProductAdmin,
} from "../controllers/Items.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/items", getItems);
router.get("/items/pets", getItemsTypePets);
router.get("/items/product", getItemsTypeProduct);
router.get("/item/:id", getItemById);
router.get("/items/lastuploadadmin", getItemsLastUploadAdmin);
router.get("/items/topproduct", getTopProductAdmin);
router.post("/item", createItem);
router.patch("/item/:id", updateItem);
router.delete("/item/:id", deleteItem);

router.get("/dashboard/dataadmin1", dashboardAdminData);
router.get("/dashboard/dataadmin2", dashboardAdminData2);

export default router;
