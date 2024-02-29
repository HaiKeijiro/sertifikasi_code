const express = require("express");
const mongoose = require("mongoose");
const { PORT, MONGODB_URL } = require("./config");
const Note = require("./models/noteModel");

const app = express();

app.get("/", (req, res) => {
  res.send("This is homepage!");
});



// MongoDB Connection
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
