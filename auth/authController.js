const {userModel} = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.controller =  {

    login: async(req,res) => {
   
        let user  = await userModel.findOne({email:req.body.email});
        if(!user){
          return res.status(401).json({msg:"User not found"});
        }
    
        let passValid = await bcrypt.compare(req.body.password,user.password);
        if(!passValid){
          return res.status(401).json({msg:"Password worng"});
        }
       
        let newToken = jwt.sign({_id:user._id},"RAVITSECRET",{expiresIn:"30d"});
        res.json({token:newToken});
    
    }, 

    register: async(req,res) =>{

        let user  = await userModel.findOne({email:req.body.email});
        if(user){
          return res.json({msg:"email allready exist"});
        }

        try {

            const obj = new userModel(req.body);
            obj.password = await bcrypt.hash(obj.password,10);
            const result = await obj.save();

            if(result){
                res.send("New user created");
            } else{
                res.send("error");
            } 

        } catch (error) {
            console.log(error);
            res.send("somthing is broken");
        }
    
    } 
}