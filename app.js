const express=require("express");
const app=express()
const tasks=require("./Routes/tasks")
const port=5000;
const connDB=require("./db/connect")
require('dotenv').config()

app.use(express.json());
app.use("/api/v1/tasks",tasks);

const start=async ()=>
{
    try{

        await connDB(process.env.MONGO_URI)
        console.log("connection Established")
        app.listen(port,()=>{console.log(`Server is listening on port:${port}`)});
    }catch(err)
    {
         console.log("Eror Occured")
    }
}

start()

