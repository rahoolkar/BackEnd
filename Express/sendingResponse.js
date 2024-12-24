const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
})

app.use((req,res)=>{
    console.log("request recieved")
    let htmlcode = "<h1>Hello Baccchoooo!!!!!</h1>"
    res.send(htmlcode);
})