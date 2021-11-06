// controller for the home page
const Task = require("../models/task");
var count_entries = 0;   // number of tasks in database

module.exports.home = function (req, res) {        // controller for the home page

  console.log("route called");          

  Task.countDocuments({}, function (err, count) {  // count number of documents in the database
    if (err) {
      console.log("error in counting: ", err);
    }
    count_entries = count;
    
    
  });

  
  Task.find({}, function (err, task) {               //redering the home page
    if (err) {
      console.log("Error in fetching tasks from db");
      return;
    }
    
    return res.render("home", {                        
      title: "Todo list app",
      task: task,
      count: count_entries,
    });
  });
  
  console.log("route called");

};
