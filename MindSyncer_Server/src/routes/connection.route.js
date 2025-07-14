
import express from 'express';
import { addConnection, getConnections } from '../controllers/connection.controller.js';

const router = express.Router();

router.post('/', addConnection);
router.get('/:userId', getConnections);

export default router;
