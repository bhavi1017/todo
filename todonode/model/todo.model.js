const mongoose = require("mongoose");
const moment = require("moment");

//date-time
const currentTime = new Date().toLocaleTimeString();
const date = Date.now(moment().format("DD MMM YYYY"));

//schema
const todoSChema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      default: "",
    },
    date: {
      type: Date,
      default: date,
    },
    time: {
      type: String,
      default: currentTime,
    },
    category: {
      type: String,
      default: "Default",
    },
    taskStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", todoSChema);
