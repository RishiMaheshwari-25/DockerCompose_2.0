import express from "express";
import morgan from  "morgan";
import cors from "cors"
const app=express();
app.use(morgan('dev'));
app.use(express.static('public'));

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        message:"Server is running",
        status:"Ok"
    });
})
app.get("/api/hello",(req,res)=>{
    res.status(200).json({
        message:"Hello from the server",
        status:"Ok"
    });
})
app.get("/api/users",(req,res)=>{
    const users=[
        {
            id:1,
            name:"John Doe",
            email:"john.doe@example.com"},
        {
         id:2,
         name:"Jane Smith",
        email:"jane.smith@example.com"
            }

    ]
    res.status(200).json({users});
})
app.get("*name",(req,res)=>{
    res.sendFile("public/index.html", { root: __dirname });
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})