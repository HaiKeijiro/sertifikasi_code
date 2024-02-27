const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config()

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://sctrynext:${process.env.PASSWORD}@sertifdb.4yewhjo.mongodb.net/?retryWrites=true&w=majority&appName=SertifDB`
  )
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Holla World!");
});

app.listen(port, () => {
  console.log("Port is running in " + port);
});
