const {Router} = require('express');
const {activityC} = require('../controllers/activity');

const activityR = new Router();

module.exports = {activityR};

activityR.get('/',activityC.getAll);
activityR.get('/:id',activityC.getByID);
activityR.post('/',activityC.add);
activityR.put('/:id',activityC.update);
activityR.delete('/id',activityC.delete);