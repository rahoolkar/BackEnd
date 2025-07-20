const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`app is listening to the port ${port}`);
});

// app.use((req, res) => {
//   console.log("request recieved");
//   res.send("response sent successfully");
// });

app.get("/",(req,res)=>{
    res.send("root path");
})

app.get("/search",(req,res)=>{
    res.send("search path");
})
