const {workoutModel} = require("../models/workoutModel");
const {activityModel} = require("../models/activityModel");

exports.workoutC =  {

    async getAll(req,res){
        try {
            let data = await workoutModel.find({userID:res.locals.userID});
            const arr = [];

            for (let index = 0; index < data.length; index++) {
                let activity = await activityModel.findOne({value:data[index].activityType});
                arr.push({...data[index]._doc,activityName:activity.name})
                
            }
            
            res.json(arr);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },
    async getForChart(req,res){
        try {
            let data = await workoutModel.find({userID:res.locals.userID, activityType:req.params.type});
            let arr = [];
            data.map((workout,index) => {
                const time = workout.time.split(":");
                let min = Number(time[1]);
                if (Number(time[0])>0)min+=Number(time[0])*60;
                arr.push([index+1,min/workout.distance])
            })
            res.json(arr);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async getByID(req,res){
        try {
            let data = await workoutModel.findOne({_id:req.params.id});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async add(req,res){
        try {

            const obj = req.body;
            obj.userID = res.locals.userID;
            console.log(obj);
            const workout = new workoutModel(obj);
            const result = await workout.save();

            if(result){
                res.json(result);
            } else{
                res.send("error");
            } 

        } catch (error) {
            console.log(error);
            res.send("somthing is broken");
        }
    },

    async update(req,res){
        try {
            let data = await workoutModel.updateOne({_id:req.params.id},req.body);
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async delete(req,res){
        try {
            let data = await workoutModel.deleteOne({_id:req.params.id});
            if(data){
                res.json({deleted:true})
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    }

}