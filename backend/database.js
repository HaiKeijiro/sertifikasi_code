const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/notes_db")
  .then(() => {
    console.log("MongoDB Connected!")
  })
  .catch((err) => console.log(err))



app.get("/", (req, res) => {
  res.send("Holla World!");
});

app.listen(port, () => {
  console.log("Port is running in " + port);
});
