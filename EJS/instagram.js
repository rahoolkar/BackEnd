let express = require("express");
let path = require("path");
let app = express();

let port = 3000;
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log("app is running on port 3000");
})

app.get("/ig/:username",(req,res)=>{
    let username = req.params.username;
    let igdata = require("./data.json")
    let data = igdata[username];
    console.log(data);
    if(data){
        //agar data me kuch aagya toh data me store ho jaega 
        res.render("instagram.ejs",{data,username});
    }else{
        //aagar data me kuch nhi aaya toh undefined aajaega 
        res.render("error.ejs")
    }
})