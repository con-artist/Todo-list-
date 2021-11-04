// controller for the home page
const  Task  = require('../models/task');

module.exports.home = function (req, res) {
  console.log("route called");
  Task.find({}, function(err, task){
    if(err){
        console.log('Error in fetching tasks from db');
        return;
    }

    return res.render('home', {
        title: "Todo list app",
        task: task
    });
}
)};