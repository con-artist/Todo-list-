const express = require('express');
const router = express.Router();
const create_task =require("../controllers/remove_task");

router.get("/",create_task.deletetask);


module.exports=router;