const mongoose = require('mongoose');

const URI = "mongodb+srv://204485320:204485320@cluster0.sqrqr.mongodb.net/ContactsDB?retryWrites=true&w=majority"
mongoose.connect(URI)
.then (() => console.log("con DB sucsses"))
.catch( err => console.log(err));

module.exports = {
    URI: process.env.URI
}