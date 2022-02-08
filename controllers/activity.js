const {activityModel} = require("../models/activityModel");

exports.activityC =  {

    async getAll(req,res){
        try {
            let data = await activityModel.find({});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },
    async getByID(req,res){
        try {
            let data = await activityModel.findOne({id:req.params.id});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async add(req,res){
        try {

            const obj = new activityModel(req.body);
            const result = await obj.save();

            if(result){
                res.json(result);
            } else{
                res.send("error");
            } 

        } catch (error) {
            res.send("somthing is broken");
        }
    },

    async update(req,res){
        try {
            let data = await activityModel.updateOne({id:req.params.id},req.body);
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
            let data = await activityModel.deleteOne({id:req.params.id});
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    }
}