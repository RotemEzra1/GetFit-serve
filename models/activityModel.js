const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    value: {type: Number,required: true},
    name: {type: String,required: true},
    icon: {type: Number,required: true}
});

const activityModel = mongoose.model('activities',activitySchema);

exports.activityModel = activityModel;