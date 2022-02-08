const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, required:true},
    activityType:{type: Number,required: true},
    date:{type: String,required: true},
    time:{type: String,required: true},
    distance:{type: Number,required: true},
    Kcal:{type: Number,required: true},
    note:{type: String},
}); 

const workoutModel = mongoose.model('workouts',workoutSchema);

exports.workoutModel = workoutModel;