const express = require('express');
const router = express.Router();
const home_task =require("../controllers/index_controller")

router.get("/", home_task.home)

router.use('/create-task',require('./create_task'));

router.use('/delete-task',require('./delete _task'));



module.exports=router;