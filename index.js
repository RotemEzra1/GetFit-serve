require("./db");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");
const {checkToken} = require("./auth/checkToken");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {authRouter} = require('./auth/authRouter');
app.use('/auth', authRouter);

const {userR} = require('./routers/user');
app.use('/api/users', checkToken, userR);

const {activityR} = require('./routers/activity');
app.use('/api/activities',checkToken, activityR);

const {workoutR} = require('./routers/workout');
app.use('/api/workouts',checkToken, workoutR);



app.all('*',(req,res) => {
    res.send("Page not found");
});

app.listen(process.env.PORT || 3000, () => console.log(`Express server is running on port ${PORT}`));
