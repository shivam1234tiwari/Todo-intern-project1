import express from "express";
import {
  root,
  health,
  alltask,
  singletask,
  createtask,
  updatetask,
  deletetask,
} from "../controllers/taskController.js";

const router = express.Router();

/**
 * @swagger
 * /
 *   get:
 *     summary: API Home
 *     description: Returns API information
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: API information
 */
router.get("/", root);

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health Check
 *     description: Check if API is running
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: API is healthy
 */
router.get("/health", health);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: List of all tasks
 */
router.get("/tasks", alltask);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task found
 *       404:
 *         description: Task not found
 */
router.get("/tasks/:id", singletask);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Buy milk
 *     responses:
 *       201:
 *         description: Task created
 *       400:
 *         description: Validation error
 */
router.post("/tasks", createtask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Learn Node.js
 *               done:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Task updated
 *       404:
 *         description: Task not found
 */
router.put("/tasks/:id", updatetask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task deleted
 *       404:
 *         description: Task not found
 */
router.delete("/tasks/:id", deletetask);

export default router;