const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holeSchema = new Schema({
  holeNum: String,
  yardage: Number,
  par: { type: Number, required: true, min: 3, max: 5 },
  handicap: Number,
  strokes: Number,
});

const courseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  location: String,
  par: { type: Number, required: true, min: 34, max: 73 },
  yardage: Number,
  slope: Number,
  numHoles: Number,
  holes: [holeSchema],
});

module.exports = mongoose.model("Course", courseSchema);
