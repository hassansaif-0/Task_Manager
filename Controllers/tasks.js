const Task=require("../models/task")

const getAlltasks=(req,res)=>
{
    res.send("Hello World");
}
const posttask=async (req,res)=>
{
    try{
       const task=await Task.create(req.body)
       res.status(200).json({task})
    }
    catch(err)
    {
        console.log("Error in insert")

    }
}
const deletetask=(req,res)=>
{
    res.send("Hello World");
}
const updatetask=(req,res)=>
{
    res.send("Hello World");
}
const gettask=(req,res)=>
{
    res.send("Hello World");
}

module.exports={getAlltasks,posttask,deletetask,updatetask,gettask}