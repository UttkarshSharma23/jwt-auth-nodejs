import expres from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = expres();

app.get("/",(req,res)=>{
    res.send("Hello World 1232")
})

app.listen(3000,()=>{
    connectDB();
    console.log("Server is Running on PORT 3000");
})