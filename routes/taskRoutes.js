import express from 'express';
import {root,health,alltask} from '../controllers/taskController.js';
const router=express.Router();

router.get('/',root);
router.get('/health',health);
router.get('tasks',);
router.get('/tasks/:id',);

export default router;