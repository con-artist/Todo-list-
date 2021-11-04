const express = require('express');
const router = express.Router();
const home_cont =require("../controllers/index_controller")

router.get("/",home_cont.home)

module.exports=router;