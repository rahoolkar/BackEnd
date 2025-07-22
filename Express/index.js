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

app.get("/", (req, res) => {
  res.send("root path");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const { p } = req.query;
  if (!p) {
    res.send("no search results");
  }
  res.send("search path for " + p);
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send("username page");
});
