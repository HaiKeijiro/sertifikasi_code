const mongoose = require("mongoose");

const sepedaSchema = mongoose.Schema({
  kode_sepeda: {
    type: String,
    unique: true,
  },
  nama_sepeda: {
    type: String,
    required: true,
  },
  merk_sepeda: {
    type: String,
    required: true,
  },
  jenis_sepeda: {
    type: String,
    required: true,
  },
  peruntukan: {
    type: String,
    required: true,
  },
  jumlah_speed: {
    type: Number,
    required: true,
  },
  tanggal_launching: {
    type: String,
    required: true,
  },
});

const Sepeda = mongoose.model("Sepeda", sepedaSchema);
module.exports = Sepeda;
