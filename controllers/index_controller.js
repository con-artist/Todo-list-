// controller for the home page
const Task = require("../models/task");
var count_entries = 0;

module.exports.home = function (req, res) {
  console.log("route called");

  Task.countDocuments({}, function (err, count) {
    if (err) {
      console.log("error in counting: ", err);
    }
    console.log(count);
    count_entries = count;
    
    
  });

  
  Task.find({}, function (err, task) {
    if (err) {
      console.log("Error in fetching tasks from db");
      return;
    }
    console.log("function ran first");

    return res.render("home", {
      title: "Todo list app",
      task: task,
      count: count_entries,
    });
  });
  
  console.log("route called");

};
