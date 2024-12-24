const express = require("express");

const app = express();

let port = 3000 ;

app.listen(port,()=>{
    console.log("app is listeing on port 3000");
})

app.get("/",(req,res)=>{
    res.send("<h1>Hello baccho!!!!</h1>")
})

app.get("/:username",(req,res)=>{
    console.log(req.params); //request ke saath kya kya parameter send huee
    res.send("this is parameter page")
    
})

app.get("/:username/:rollno",(req,res)=>{
    console.log(req.params);
    let user = req.params.username ;
    let admitcard = req.params.rollno;
    res.send(`<h1>Welcome to the page of @${user} and your admitcard no is ${admitcard}</h1>`)
})