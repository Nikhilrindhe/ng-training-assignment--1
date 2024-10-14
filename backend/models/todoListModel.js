const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoList = new Schema({
  assignedTo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo_list_task", todoList);
