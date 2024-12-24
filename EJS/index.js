const express = require("express");
const path = require("path");
const app = express();

let port = 8080;
//setting up the path of views directory so that it can be found if the sever is run from another directory
app.set("views",path.join(__dirname,"/views")); //here __dirname is the path of the server (/backend/ejs/) + (/views)

//the first step is set the view(template) engine to ejs
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})

app.get("/",(req,res)=>{
    //we use res.send when we want to send some simple things like arrays,objects,string etc.
    //we use res.render when we want to send html file
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let persons = ["rahul","udayan","utpal","amrita"];
    let number = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{number,persons}); //passing an object of the values that are uselful to the page
})

app.get("/ig/:username",(req,res)=>{
    let username = req.params.username;
    res.render("ig.ejs",{username});
})

