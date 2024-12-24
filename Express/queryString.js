//localhost:3000/search?q=apple

const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("app is listening on port 3000");
})

app.get("/",(req,res)=>{
    res.send("<h1>This is a home page</h1>");
})

app.get("/search",(req,res)=>{
    console.log(req.query); //req.query stores all the query string that we send 
    let search = req.query.q;
    res.send(`Your request query was ${search}`);
})