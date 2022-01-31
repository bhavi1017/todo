const express = require("express");
const createHttpError = require("http-errors");
const todoModel = require("../model/todo.model");

/**
 * List all todos
 *
 * @param {express.Request} req - Express router request object
 * @param {express.Response} res - Express router response object
 
 */

const todoController = [];

todoController.create = async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    return res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};

todoController.fetchTodos = async (req, res) => {
  try {
    const todos = await todoModel.find().exec();
    res.json(todos);
    return todos;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};

todoController.fetchTodosByCategory = async (req, res) => {
  try {
    const todos = await todoModel
      .find({ category: req.params.category })
      .exec();
    res.json(todos);
    return todos;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};

todoController.fetchTodosByTitle = async (req, res) => {
  try {
    const todos = await todoModel.find({ title: req.params.title }).exec();
    res.json(todos);
    return todos;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};
todoController.fetchById = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params._id);
    res.json(todo);
    return todo;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};

todoController.deleteById = async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndDelete(req.params._id);
    res.json(todo);
    return todo;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};

todoController.deleteMultiple = async (req, res) => {
  try {
    // console.log(req.params._id);
    const todos = await todoModel.deleteMany({ _id: { $in: req.body._id } });
    res.json(todos);
    return todos;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};

todoController.updateStatus = async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(req.params._id, {
      taskStatus: true,
    });
    res.json(todo);
    return todo;
  } catch (err) {
    console.log(err);
    return res.json(createHttpError(500, `${err}`));
  }
};
module.exports = todoController;
