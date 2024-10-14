const express = require("express");
const router = express.Router();

const todoListController = require("../controllers/todoListController");

router.route("/").get((req, res) => {
  res.send("API Calls Working");
});

// APIs
// GET /api/tasks - Retrieve all tasks.
router.route("/api/tasks").get(todoListController.todoTask);

// GET /api/users - Retrieve all tasks.
router.route("/api/users").get(todoListController.getUserList);

// POST /api/task - Create a new task.
router.route("/api/task").post(todoListController.addTodoTask);

// PUT /api/task/:id - Update a task by ID.
router.route("/api/task/:id").put(todoListController.UpdateTask);

// DELETE /api/task/:id - Delete a task by ID.
router.route("/api/task/:id").delete(todoListController.deleteTask);

module.exports = router;
