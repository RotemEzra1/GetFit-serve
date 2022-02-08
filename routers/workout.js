const {Router} = require('express');
const {workoutC} = require('../controllers/workout');

const workoutR = new Router();

module.exports = {workoutR};

workoutR.get('/',workoutC.getAll);
workoutR.get('/byid/:id',workoutC.getByID);
workoutR.get('/type/:type',workoutC.getForChart);

workoutR.post('/',workoutC.add);
workoutR.put('/:id',workoutC.update);
workoutR.delete('/:id',workoutC.delete);