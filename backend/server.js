const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, MONGODB_URL } = require("./config");
const NoteModel = require("./models/noteModel");
const SepedaModel = require("./models/SepedaModel");

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

// SEPEDA

// Read
app.get("/getsepeda", (req, res) => {
  SepedaModel.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Add
app.post("/addsepeda", (req, res) => {
  const {
    kode_sepeda,
    nama_sepeda,
    merk_sepeda,
    jenis_sepeda,
    peruntukan,
    jumlah_speed,
    tanggal_launching,
  } = req.body;

  SepedaModel.create({
    kode_sepeda,
    nama_sepeda,
    merk_sepeda,
    jenis_sepeda,
    peruntukan,
    jumlah_speed,
    tanggal_launching,
  })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// Update
app.patch("/updatesepeda/:kode_sepeda", (req, res) => {
  const { kode_sepeda } = req.params;
  const {
    nama_sepeda,
    merk_sepeda,
    jenis_sepeda,
    peruntukan,
    jumlah_speed,
    tanggal_launching,
  } = req.body;

  SepedaModel.findOneAndUpdate(
    { kode_sepeda: kode_sepeda },
    {
      nama_sepeda,
      merk_sepeda,
      jenis_sepeda,
      peruntukan,
      jumlah_speed,
      tanggal_launching,
    },
    {
      new: true,
    }
  )
    .then((result) => res.json(result))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error updating sepeda", message: error.message })
    );
});

// Delete
app.delete("/deletesepeda/:kode_sepeda", (req, res) => {
  const { kode_sepeda } = req.params;
  SepedaModel.findOneAndDelete({ kode_sepeda: kode_sepeda })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});
