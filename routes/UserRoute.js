import express from "express";
import {
    getUsers,
    getUsersTotal,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users',  getUsers);
router.get('/users/total', getUsersTotal);
router.get('/user/:id',  getUserById);
router.post('/user', createUser);
router.patch('/user/:id',  updateUser);
router.delete('/user/:id',  deleteUser);

export default router;