const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../../db/db.json");

//Allows all tasks to have a unique ID
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Return all saved tasks as JSON.
 *     responses:
 *       200:
 *         description: Return all saved tasks as JSON.
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: The task ID.
 *                    example: 1
 *                  title:
 *                    type: string
 *                    description: The task title.
 *                    example: Task 1
 *                  description:
 *                    type: string
 *                    description: The task description
 *                    example: Task 1 description
 *                  completed:
 *                    type: boolean
 *                    description: The task completed status
 *                    example: false
 */
router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../../db", "db.json"), (err, data) => {
    ///error logging
    if (err) throw err;
    let dbData = JSON.parse(data);
    //Returns new database
    res.json(dbData);
  });
});

/**
 * @swagger
 * /tasks:
 *    post:
 *      summary: Add new task to JSON.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  description: New task title
 *                  example: Task 1
 *                description:
 *                  type: string
 *                  description: New task description
 *                  example: Task 1 description
 *      responses:
 *        201:
 *          description: Return all saved tasks as JSON.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The task ID.
 *                     example: 1
 *                   title:
 *                     type: string
 *                     description: The task title.
 *                     example: Task 1
 *                   description:
 *                     type: string
 *                     description: The task description
 *                     example: Task 1 description
 *                   completed:
 *                     type: boolean
 *                     description: The task completed status
 *                     example: false
 */
router.post("/", (req, res) => {
  const { title, description } = req.body;

  const id = uuidv4();

  db.push({ id, title, description, completed: false });

  fs.writeFileSync(
    path.join(__dirname, "../../db", "db.json"),
    JSON.stringify(db)
  );

  res.status(201).json(db);
});

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Retrieve a single task item
 *    description: Retrieve a single task item
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the task to retrieve.
 *         schema:
 *           type: string
 *           example: 9b23966b-5f4a-4bb1-be2e-ddb820c8b649
 *    responses:
 *      200:
 *        description: A single task item
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: The task ID.
 *                  example: 1
 *                title:
 *                  type: string
 *                  description: The task title
 *                  example: Task 1
 *                description:
 *                  type: string
 *                  description: The task description
 *                  example: Task 1 description
 *                completed:
 *                  type: boolean
 *                  description: The task completed status
 *                  example: false
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const task = db.filter((data) => data.id === id)[0];

  return res.status(200).json(task);
});

/**
 * @swagger
 * /tasks/{id}:
 *  patch:
 *    summary: Update a specific task
 *    description: Update a specific task
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the task to retrieve.
 *         schema:
 *           type: string
 *           example: 9b23966b-5f4a-4bb1-be2e-ddb820c8b649
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                completed:
 *                  type: boolean
 *                  description: New task status
 *                  example: true
 *    responses:
 *      200:
 *        description: A single task item
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: The task ID.
 *                  example: 9b23966b-5f4a-4bb1-be2e-ddb820c8b649
 *                title:
 *                  type: string
 *                  description: The task title
 *                  example: Test
 *                description:
 *                  type: string
 *                  description: The task description
 *                  example: Test
 *                completed:
 *                  type: boolean
 *                  description: The task completed status
 *                  example: true
 *
 */
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { completed = false } = req.body;

  const updatedTasks = db.map((data) =>
    data.id === id ? { ...data, completed } : data
  );

  fs.writeFileSync(
    path.join(__dirname, "../../db", "db.json"),
    JSON.stringify(updatedTasks)
  );

  return res.status(200).json(updatedTasks.filter((data) => data.id === id)[0]);
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the task to delete
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Task successfully deleted
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               type: boolean
 *               example: true
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const updatedTasks = db.filter((task) => task.id !== id);

  fs.writeFileSync(
    path.join(__dirname, "../../db", "db.json"),
    JSON.stringify(updatedTasks)
  );

  return res.status(200).json({ success: true });
});

module.exports = router;
