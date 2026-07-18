import express from 'express';
import {root,health} from '../controllers/taskController.js';
const router=express.Router();

router.get('/',root);
router.get('/health',health);

export default router;