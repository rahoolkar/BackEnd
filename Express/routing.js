//routing is process of selecting the path for traffic to go

const express = require("express");

const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("app is listening on port 3000");
})

//app.get is used for handling the get requests
app.get("/",(req,res)=>{
    console.log("you contacted the root path");
    res.send("<h1>You contacted the home path</h1>");
})

app.get("/apple",(req,res)=>{
    console.log("you contacted the apple path");
    res.send("<h1>You contacted the apple path</h1>");
})

app.get("/orange",(req,res)=>{
    console.log("you contacted the orange path");
    res.send("<h1>You contacted the orange path</h1>");
})

app.get("*",(req,res)=>{
    console.log("this page doesnot exist");
    res.send("<h1>This path doesnot exist</h1>")
})

//app.post is used for handling the post request 
app.post("/",(req,res)=>{
    console.log("you send a post request on the root home page");
})