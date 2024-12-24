const express = require("express");
//express is a function

const app = express();
//app is a object 

let port = 8080;

// app.listen listens for the request 
app.listen(port,()=>{ //listens for the request 
    console.log("app is listening on port 8080");
})

//app.use is used to handle any type of request chahe vo get, post request hoo 
app.use((req,res)=>{
    console.log("request recieved")
})