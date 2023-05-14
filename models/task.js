const mongoose=require("mongoose")




const TaskSchema=new mongoose.Schema(
    {
        name:String,
        status:Boolean
    }
)

const Task=new mongoose.model("Task",TaskSchema)
module.exports=Task
