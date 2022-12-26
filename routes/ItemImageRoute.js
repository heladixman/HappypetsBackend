import express from "express";
import {
    getImage,
    getImageById,
    createImage,
    updateImage,
    deleteImage
} from "../controllers/ItemImage.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/images', getImage);
router.get('/image/:id', getImageById);
router.post('/image', createImage);
router.patch('/image/:id', updateImage);
router.delete('/image/:id', deleteImage);

export default router;