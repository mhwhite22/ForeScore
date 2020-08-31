const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holeSchema = new Schema ({
    holeNum: String,
    yardage: Number,
    par: { type: Number, required: true, min: 3, max: 5 },
})

const courseSchema = new Schema ({
    name: String,
    par: Number,
    yardage: Number,
    holes: [holeSchema]
});

module.exports = mongoose.model('Course', courseSchema);