import express from "express";
import {
    getAttribut,
    getAttributById,
    createAttribut,
    updateAttribut,
    deleteAttribut
} from "../controllers/Attribut.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/atributs', getAttribut);
router.get('/atribut/:id', getAttributById);
router.post('/atribut', createAttribut);
router.patch('/atribut/:id', updateAttribut);
router.delete('/atribut/:id', deleteAttribut);

export default router;