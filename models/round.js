const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roundSchema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  score: { type: Number },
  dateOfPlay: { type: Date },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Round", roundSchema);
