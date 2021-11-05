// require express for setting up the express server
const express = require("express");

const path = require("path");

// set up the port number
const port = 8000;

// importing the DataBase
const db=require('./config/mongoose');

// importng the Schema For tasks
const Task = require('./models/task');

// using express
const app = express();

// set up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to use encrypted data
app.use(express.urlencoded());

// using static files
app.use(express.static("assets"));


var home = require('./routes/index');     //accessing the router
app.use('/',home); //using express routers



// app.get('/delete-task', function(req, res){
//   // get the id from query
//   var id = req.query;

//   // checking the number of tasks selected to delete
//   var count = Object.keys(id).length;
//   for(let i=0; i < count ; i++){
      
//       // finding and deleting tasks from the DB one by one using id
//       Task.findByIdAndDelete(Object.keys(id)[i], function(err){
//       if(err){
//           console.log('error in deleting task');
//           }
//       })
//   }
//   return res.redirect('back'); 
// });



app.listen(port, function (err) {
    if (err) {
      console.log("Error in running the server", err);
    } else {
      console.log("My express Server is running on port: ", port);
    }
  });
  