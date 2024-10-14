const mongoose = require("mongoose");
const todoListModel = require("../models/todoListModel");

const addTodoTask = async (req, res) => {
  try {
    const body = req.body;

    const todoModelData = new todoListModel({
      assignedTo: body.assignedTo,
      status: body.status,
      dueDate: body.dueDate,
      priority: body.priority,
      description: body.description,
    });

    console.log("here");

    let a = await todoModelData.save();

    console.log(a);

    res.status(201).send({
      status: true,
      message: "List Item Added Successfully",
    });
  } catch (er) {
    res.status(400).send(er);
  }
};

const todoTask = async (req, res) => {
  try {
    const tasks = await todoListModel.find();

    res.status(200).send(tasks);
  } catch (er) {
    res.status(400).send(er);
  }
};

const getUserList = async (req, res) => {
  try {
    res.status(200).send(["Shubham Chavan", "Manav Bagul", "Alli D"]);
  } catch (er) {
    res.status(400).send(er);
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);

    const deletedTask = await todoListModel
      .findByIdAndDelete({
        _id: id._id,
      })
      .then((res) => {
        console.log(res);
      });

    if (deletedTask) {
      return res.status(404).send("Task Not Found");
    }
    res.status(204).send("task found");
  } catch (er) {
    res.status(400).send(er.message);
  }
};

const UpdateTask = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const updatedTask = req.body;
    console.log(id);
    console.log(updatedTask);

    // Find the task by ID and update it
    const updatingTask = await todoListModel.findByIdAndUpdate(
      id,
      updatedTask,
      {
        new: true,
      }
    );

    if (!updatingTask) {
      return res.status(404).send("Task Not updated");
    }

    res.status(204).send("task Updated");
  } catch (er) {
    res.status(400).send(er.message);
  }
};
module.exports = { addTodoTask, todoTask, getUserList, deleteTask, UpdateTask };
