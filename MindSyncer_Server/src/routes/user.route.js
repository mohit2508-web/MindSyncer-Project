import express from 'express';
import { registerUser, loginUser, logoutUser, getUserById,getAllUsers,updateUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/users', getAllUsers); 
// Yeh new route:
router.get('/:id', getUserById);
router.put('/:id', updateUserById);

export default router;
