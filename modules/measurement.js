const mongoose = require("mongoose");

const measurementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 255,
      min: 2,
    },
    data: [
      {
        temperature: Number,
        humidity: Number,
        brightness: Number,
        date: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("measurement", measurementSchema);
