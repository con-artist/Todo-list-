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


app.post('/create-task', function(req, res){
   console.log(req.body);
    
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err, newtask){
        if(err){console.log('error in creating task', err); return;}
        

        console.log(newtask);
        return res.redirect('back');

    });
});



app.listen(port, function (err) {
    if (err) {
      console.log("Error in running the server", err);
    } else {
      console.log("My express Server is running on port: ", port);
    }
  });
  