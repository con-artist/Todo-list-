const express = require('express');
const router = express.Router();
const create_task =require("../controllers/add_task");

router.post("/",create_task.newtask);


module.exports=router;