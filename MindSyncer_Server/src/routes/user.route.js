import express from 'express';
import { registerUser, loginUser, logoutUser, getUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Yeh new route:
router.get('/:id', getUserById);

export default router;
