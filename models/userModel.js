const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String},
    fullName:{type: String}, 
    phone: {type: String},
    birth: {type: String},
    email: {type: String},
    password:{type: String},
    gender: {type: String},
    hight: {type: Number},
    weight: {type: Number},
    age: {type: Number}   
});


const userModel = mongoose.model('users',userSchema);

exports.userModel = userModel;