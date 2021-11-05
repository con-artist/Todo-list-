// require the library
const mongoose = require("mongoose");

// creating Schema for Tasks
const taskShema = new mongoose.Schema({
  description: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: 'Others',
    // required: true,
  },
});



const Task = mongoose.model("Task", taskShema);


// exporting the Schema
module.exports = Task;
