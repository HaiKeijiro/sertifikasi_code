const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, MONGODB_URL } = require("./config");
const NoteModel = require("./models/noteModel");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is homepage!");
});

// MongoDB Connection
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("MongoDB is connected");
      console.log("Running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Read
app.get("/get", (req, res) => {
  NoteModel.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Add
app.post("/add", (req, res) => {
  const { type, date, title, note } = req.body;

  NoteModel.create({ type, date, title, note })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Update
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { type, date, title, note } = req.body;

  NoteModel.findByIdAndUpdate(id, { type, date, title, note }, { new: true }) // Provide the update object and options
    .then((result) => res.json(result))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error updating todo", message: error.message })
    );
});

// Delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  NoteModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});
