// const  Task  = require('../models/task');

// module.exports.newtask = function (req, res) {
//     //  console.log("Creating Task");
    
//     Task.create({
//         description: req.body.description,
//         category: req.body.category,
//         date: req.body.date
//         }, function(err, res){
//         if(err){
//             console.log('error in creating task', err);
//              return;
//             }
        

//         console.log(res.body.description);
//         return res.redirect('back');

//     });
// };