const  Task  = require('../models/task');

module.exports.newtask = function (req, res) {
    console.log(req.body);

   if(typeof(req.body.category)=="undefined"){
     req.body.category="Others";
   }
    
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err, newtask){
        if(err){console.log('error in creating task', err); return;}
        

        console.log(newtask);
        return res.redirect('back');

    });
}