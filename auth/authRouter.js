const {Router} = require('express');
const {controller} = require('./authController');

const {checkToken} = require("../auth/checkToken");

const authRouter = new Router();

module.exports = {authRouter};

authRouter.get('/',checkToken,(req,res)=>{
    res.json({login:true})
});
authRouter.post('/',controller.login);
authRouter.post('/new',controller.register);

