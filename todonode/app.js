const createError = require("http-errors");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

//configuration
app.use(require("body-parser")());

//routers
const todoRouter = require("./routes/todo.route");

//mongoDB connection
mongoose
  .connect("mongodb://localhost:27017/react")
  .then(() => console.log("Connection established"))
  .catch((e) => createError(401, `Connection Failed due to ${e}`));

app.use("/todo", todoRouter);
app.get("/", (req, res) => res.json("hello"));

app.listen(process.env.PORT || 5000, () =>
  console.log(`PORT : ${process.env.PORT}`)
);
