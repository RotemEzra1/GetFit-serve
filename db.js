const mongoose = require('mongoose');

const uri = "mongodb+srv://204485320:204485320@cluster0.sqrqr.mongodb.net/ContactsDB?retryWrites=true&w=majority"
mongoose.connect(uri)
.then (() => console.log("con DB sucsses"))
.catch( err => console.log(err));

