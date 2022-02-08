const {Router} = require('express');
const {userC} = require('../controllers/user');

const userR = new Router();

module.exports = {userR};

userR.get('/',userC.getAll);
userR.get('/:id',userC.getByID);
userR.post('/',userC.add);
userR.put('/:id',userC.update);
userR.delete('/:id',userC.delete);

// app.post('/', (req,res) =>{

//     const newUser = new userModel(req.body);

//     newUser.save()
//     .then(docs => {
//         if(docs){
//             res.json(docs)
//         }else {
//             res.status(404).send("Error saving the flight");
//         }
//     })
//     .catch(err => {
//         res.status(404).send("Error saving the flight");
//         console.log(err);
//     });

// });