const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note