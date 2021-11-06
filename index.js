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


app.listen(port, function (err) {     //listen at port 8000
    if (err) {
      console.log("Error in running the server", err);
    } else {
      console.log("My express Server is running on port: ", port);
    }
  });
  