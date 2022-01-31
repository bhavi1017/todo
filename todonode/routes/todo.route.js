const todoRouter = require("express").Router();
const todoController = require("../controller/todo.controller");

todoRouter.get("/", (req, res) => res.json("todoRouter"));
todoRouter.post("/create", todoController.create);
todoRouter.get("/fetchTodos", todoController.fetchTodos);
todoRouter.get(
  "/fetchTodosByCategory/:category",
  todoController.fetchTodosByCategory
);
todoRouter.get("/fetchTodosByTitle/:title", todoController.fetchTodosByTitle);
todoRouter.get("/fetchById/:_id", todoController.fetchById);
todoRouter.delete("/deleteById/:_id", todoController.deleteById);
todoRouter.delete("/deleteMultiple", todoController.deleteMultiple);
todoRouter.post("/updateStatus/:_id", todoController.updateStatus);

module.exports = todoRouter;
