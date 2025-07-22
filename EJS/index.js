const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(3000, () => {
  console.log("app is listening on the port 3000");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dice", (req, res) => {
  let username = "udayankar";
  let dicenumber = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { username: username, dicenumber: dicenumber });
});

app.get("/instagram/:username", (req, res) => {
  let instaData = require("./data.json");
  let { username } = req.params;
  let data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { username, data });
  } else {
    res.render("error.ejs");
  }
});
