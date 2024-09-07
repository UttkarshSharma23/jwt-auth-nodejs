import expres from "express";

const app = expres();

app.get("/",(req,res)=>{
    res.send("Hello World 1232")
})

app.listen(3000,()=>{
    console.log("Server is Running on PORT 3000");
})