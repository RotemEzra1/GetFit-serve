const jwt = require("jsonwebtoken");

const checkToken = async(req,res,next) => {

    let token = req.header("x-api-key");
    if(!token){
        return res.status(401).json({msg:"you must send token"})
    }
   
    try{
        let decodeToken = jwt.verify(token,"RAVITSECRET");
        res.locals.userID = decodeToken._id;
        console.log(res.locals.userID);
        next();
    }
    catch(err){
        console.log(err)
        return res.status(401).json({msg:"token invalid or expired"})
    }

}

exports.checkToken = checkToken;
