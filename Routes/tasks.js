
/* 
app.get("/api/v1/tasks")    get all tasks
app.post("/api/v1/tasks")     post a task
app.patch("/api/v1/tasks/:id")    update a specific task
app.delete("/api/v1/tasks/:id")    delet a specific task
app.get("/api/v1/tasks/:id")      get a specific task

*/
const express=require("express");
const router=express.Router();
const {getAlltasks,posttask,deletetask,updatetask,gettask}=require("../Controllers/tasks")

router.route("/").get(getAlltasks).post(posttask)

router.route("/:id").get(gettask).patch(updatetask).delete(deletetask);

module.exports=router;